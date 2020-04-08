import React from "react";
import {
  AppBar as MuiAppBar,
  Fab,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  Add as AddIcon,
  MoreVert as MoreVertIcon,
} from "@material-ui/icons";

import { AddTaskForm } from "../AddTaskForm/AddTaskForm";
import { useModal } from "../../hooks";

export const AppBar: React.FC = () => {
  const [openAddTaskForm, onOpenAddTaskForm, onCloseShowAddTaskForm] = useModal(
    false
  );

  const fabOnClickHandler = () => onOpenAddTaskForm();

  return (
    <MuiAppBar position="fixed" className="top-auto bottom-0">
      <AddTaskForm open={openAddTaskForm} onClose={onCloseShowAddTaskForm} />
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <Fab
          color="secondary"
          className="absolute z-10 -top-6 left-0 right-0 mx-auto my-0"
          onClick={fabOnClickHandler}
        >
          <AddIcon />
        </Fab>
        <div className="flex-grow" />
        <IconButton edge="end" color="inherit">
          <MoreVertIcon />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
};
