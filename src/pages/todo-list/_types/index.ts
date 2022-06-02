export type TodoType = {
  id: string;
  name: string;
  description: string;
  isLoading: boolean;
  isEditable: boolean;
  isDeleting: boolean;
};

export type SubmitClickHandlerType = {
  values: TodoType;
  isEditable?: boolean;
};

export type DeleteClickHandlerType = {
  id: string;
  isEditable: boolean;
};
