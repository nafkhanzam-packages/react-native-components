import {useInterval} from "@nafkhanzam/react-architecture";
import React, {ReactElement, useCallback, useEffect, useRef, useState} from "react";
import {FlatList, FlatListProps, ListRenderItemInfo} from "react-native";

type Status = "FIRST_RENDER" | "FETCHING" | "ERROR" | "DONE";
type Components = {
  error: (err: unknown) => ReactElement;
  empty: ReactElement;
  loading: ReactElement;
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
    case "FIRST_RENDER":
      return comps.loading;
    case "DONE":
      if (empty) return comps.empty;
  }
};

export type FetchFlatListProps<T> = {
  firstData?: T[];
  fetchDatas: () => Promise<T[]>;
  nonRefreshable?: boolean;
  keyExtractor: (item: T, index: number) => string;
  renderItem: (args: ListRenderItemInfo<T>) => JSX.Element;
  autoRefresh?: number;
  components: Components;
  flatListProps?: Omit<
    FlatListProps<T>,
    "onRefresh" | "refreshing" | "data" | "keyExtractor" | "renderItem" | "ListEmptyComponent"
  >;
};

export const FetchFlatList = <T,>(props: FetchFlatListProps<T>): ReactElement => {
  const [status, setStatus] = useState<Status>("FIRST_RENDER");
  const [data, setData] = useState(props.firstData ?? []);
  const [error, setError] = useState<unknown>();
  const mountedRef = useRef(true);

  const {fetchDatas: origFetchDatas} = props;

  const fetchDatas = useCallback(async () => {
    try {
      if (status !== "FIRST_RENDER") {
        setStatus("FETCHING");
      }
      const res = await origFetchDatas();
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
  }, [origFetchDatas, status]);

  useEffect(() => {
    mountedRef.current = true;
    fetchDatas();
    return () => {
      mountedRef.current = false;
    };
  }, [fetchDatas]);

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
      onRefresh={props.nonRefreshable ? undefined : fetchDatas}
      refreshing={status === "FETCHING"}
      data={status !== "ERROR" ? data : []}
      keyExtractor={props.keyExtractor}
      renderItem={props.renderItem}
      ListEmptyComponent={mapComp(status, props.components, !data.length, error)}
      {...props.flatListProps}
    />
  );
};
