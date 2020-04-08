import React from "react";
import { action } from "@storybook/addon-actions";

import { AddTaskForm } from "./AddTaskForm";

export default {
  component: AddTaskForm,
  title: "AddTaskForm",
  excludeStories: /.*Data$/,
};

export const defaultData: AddTaskFormProps = {
  open: true,
  onClose: action("onCloseAddTaskForm"),
};

export const Default = () => <AddTaskForm {...defaultData} />;
