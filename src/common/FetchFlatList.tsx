import {useInterval} from "@nafkhanzam/react-architecture";
import React, {ReactElement, useCallback, useEffect, useRef, useState} from "react";
import {FlatList, ListRenderItemInfo} from "react-native";

type Status = "FIRST_RENDER" | "FETCHING" | "ERROR" | "DONE";
type Components = {
  error: (err: unknown) => ReactElement;
  empty: ReactElement;
};

const mapComp = (
  status: Status,
  comps: Components,
  empty: boolean,
  error: unknown,
): ReactElement | undefined => {
  switch (status) {
    case "ERROR":
      return comps.error(error);
    case "DONE":
      if (empty) return comps.empty;
  }
};

export const FetchFlatList = <T,>(props: {
  firstData?: T[];
  fetchDatas: () => Promise<T[]>;
  keyExtractor: (item: T, index: number) => string;
  renderItem: (args: ListRenderItemInfo<T>) => JSX.Element;
  autoRefresh?: number;
  components: Components;
}): ReactElement => {
  const [status, setStatus] = useState<Status>("FIRST_RENDER");
  const [data, setData] = useState(props.firstData ?? []);
  const [error, setError] = useState<unknown>();
  const mountedRef = useRef(true);

  const fetchDatas = useCallback(async () => {
    try {
      setStatus("FETCHING");
      const res = await props.fetchDatas();
      if (!mountedRef.current) {
        return;
      }
      setData(res);
      setStatus("DONE");
    } catch (error: unknown) {
      if (!mountedRef.current) {
        return;
      }
      setError(error);
      setStatus("ERROR");
    }
  }, [props]);

  useEffect(() => {
    mountedRef.current = true;
    if (data) {
      fetchDatas();
    }
    return () => {
      mountedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useInterval(
    () => {
      if (props.autoRefresh) {
        fetchDatas();
      }
    },
    [fetchDatas],
    props.autoRefresh ?? 0,
  );

  return (
    <FlatList<T>
      onRefresh={fetchDatas}
      refreshing={status === "FETCHING"}
      data={status !== "ERROR" ? data : []}
      keyExtractor={props.keyExtractor}
      renderItem={props.renderItem}
      ListEmptyComponent={mapComp(status, props.components, !data.length, error)}
    />
  );
};
