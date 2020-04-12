type TTodo = {
  text: string;
  complete: boolean;
};

type AddTodoFormProps = {
  open: boolean;
  onClose: () => void;
};

type AddTaskFormData = {
  text: string;
};
