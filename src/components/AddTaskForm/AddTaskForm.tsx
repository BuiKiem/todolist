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

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ open, onClose }) => {
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
          <form>
            <CardContent>
              <InputBase autoFocus fullWidth placeholder="New task" />
            </CardContent>
            <CardActions>
              <IconButton edge="start" color="primary">
                <SubjectIcon />
              </IconButton>
              <IconButton edge="start" color="primary">
                <EventAvailableIcon />
              </IconButton>
              <div className="flex-grow" />
              <Button color="primary" className="font-bold capitalize">
                save
              </Button>
            </CardActions>
          </form>
        </Card>
      </Fade>
    </Modal>
  );
};
