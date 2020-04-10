import React from "react";
import {
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  Fade,
  Modal,
  IconButton,
  InputBase,
} from "@material-ui/core";
import {
  Subject as SubjectIcon,
  EventAvailable as EventAvailableIcon,
} from "@material-ui/icons";
import { useForm } from "react-hook-form";

type FormData = {
  text: string;
};

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ open, onClose }) => {
  const { register, handleSubmit, errors } = useForm<FormData>({
    mode: "onSubmit",
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Modal
      open={open}
      onClose={() => onClose()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Card className="absolute top-auto bottom-0 w-full">
          <form onSubmit={onSubmit}>
            <CardContent>
              <InputBase
                name="text"
                autoFocus
                fullWidth
                error={!!errors.text}
                placeholder="New task"
                inputRef={register({ required: true })}
              />
            </CardContent>
            <CardActions>
              <IconButton edge="start" color="primary">
                <SubjectIcon />
              </IconButton>
              <IconButton edge="start" color="primary">
                <EventAvailableIcon />
              </IconButton>
              <div className="flex-grow" />
              <Button
                type="submit"
                color="primary"
                className="font-bold capitalize"
              >
                save
              </Button>
            </CardActions>
          </form>
        </Card>
      </Fade>
    </Modal>
  );
};
