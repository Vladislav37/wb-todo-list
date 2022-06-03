export type TodoType = {
  id: string;
  name: string;
  description: string;
  isLoading: boolean;
  isEditable: boolean;
  isDeleting: boolean;
};

export type SubmitClickHandlerParamsType = {
  values: TodoType;
  isEditable?: boolean;
};
