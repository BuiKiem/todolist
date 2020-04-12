import React from "react";
import { action } from "@storybook/addon-actions";

import { AddTodoForm } from "./AddTodoForm";

export default {
  component: AddTodoForm,
  title: "AddTodoForm",
  excludeStories: /.*Data$/,
};

export const defaultData: AddTodoFormProps = {
  open: true,
  onClose: action("ON_CLOSE_ADD_TODO_FORM"),
};

export const Default = () => <AddTodoForm {...defaultData} />;
