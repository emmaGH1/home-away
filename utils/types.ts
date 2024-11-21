
export type actionFunction<T> = (
    prevState: T,
    formData: FormData
  ) => Promise<{ message: string }>;