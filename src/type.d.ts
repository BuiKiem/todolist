type TTodo = {
  text: string;
  complete: boolean;
};

type AddTaskFormProps = {
  open: boolean;
  onClose: () => void;
};
