export type ServiceResponseError = {
  status: 404 | 400,
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: 200
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;