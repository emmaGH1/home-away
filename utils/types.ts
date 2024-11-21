
export type actionFunction<T> = (
    prevState: T,
    formData: FormData
  ) => Promise<{ message: string }>;

export interface StateType {
    message: string;
 }