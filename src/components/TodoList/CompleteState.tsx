import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  List,
  Typography,
} from "@material-ui/core";
import { DoneAllOutlined as DoneAllOutlinedIcon } from "@material-ui/icons";

import { Notification } from "./Notification";
import { TodoItem } from "../TodoItem/TodoItem";

interface IProps {
  completedTodos: TTodo[];
}

export const CompleteState: React.FC<IProps> = ({ completedTodos }) => {
  return (
    <>
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography variant="subtitle1">
            Completed ({completedTodos.length})
          </Typography>
        </ExpansionPanelSummary>
        <List>
          {completedTodos.map((todo) => (
            <TodoItem key={todo.text} todo={todo} />
          ))}
        </List>
      </ExpansionPanel>
      <Notification
        iconComponent={DoneAllOutlinedIcon}
        title="Well done!"
        subTitle="You've completed all task"
      />
    </>
  );
};
