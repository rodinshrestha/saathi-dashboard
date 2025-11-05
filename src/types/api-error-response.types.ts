export type ApiErrorResponseType = {
  response?: {
    data?: {
      errors?: Record<string, string[]>;
      message: string;
    };
  };
};
