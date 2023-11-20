const baseURL = "http:/localhost:3000";

class ApiError extends Error {
  constructor(public data: unknown) {
    super("Api Error");
  }
}

export const createInstance = async <T>({
  url,
  method,
  params,
  headers,
  data,
  signal,
}: {
  url: string;
  method: "get" | "post" | "put" | "delete" | "patch";
  params?: Record<string, string>;
  headers?: HeadersInit;
  data?: BodyType<unknown>;
  responseType?: string;
  signal?: any;
}): Promise<T> => {
  const response = await fetch(
    `${baseURL}${url}` + new URLSearchParams(params),
    {
      method: method.toUpperCase(),
      headers,
      credentials: "include",
      ...(data ? { body: JSON.stringify(data) } : {}),
    },
  );

  if (!response.status.toString().startsWith("2")) {
    throw new ApiError(response);
  }
  return response.json();
};

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = Error;
// In case you want to wrap the body type (optional)
// (if the custom instance is processing data before sending it, like changing the case for example)
export type BodyType<BodyData> = BodyData;
