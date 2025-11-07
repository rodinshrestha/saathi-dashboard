export type ApiErrorResponseType = {
  response?: {
    data?: {
      data?: Record<string, string[]>;
      message: string;
    };
  };
};
