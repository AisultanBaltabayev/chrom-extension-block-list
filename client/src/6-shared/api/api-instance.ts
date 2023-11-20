import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const apiInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createInstance = <T>(
  config: AxiosRequestConfig,
  option?: AxiosRequestConfig,
): Promise<T> => {
  const source = axios.CancelToken.source();
  const promise = apiInstance({
    ...config,
    ...option,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel("Query was cancelled by React Query");
  };
  return promise;
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
