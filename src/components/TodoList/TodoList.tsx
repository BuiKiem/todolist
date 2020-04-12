import React from "react";
import { useDispatch } from "react-redux";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  List,
  Typography,
} from "@material-ui/core";
import {
  InboxOutlined as InboxOutlinedIcon,
  DoneAllOutlined as DoneAllOutlinedIcon,
} from "@material-ui/icons";

import { TodoItem } from "../TodoItem/TodoItem";

import { toggleTodo } from "../../reducers/todos";
import { Notification } from "./Notification";

interface IProps {
  todos: TTodo[];
}

export const TodoList: React.FC<IProps> = ({ todos }) => {
  const dispatch = useDispatch();

  const onGoingTodos = todos.filter((todo) => !todo.complete);
  const completedTodos = todos.filter((todo) => todo.complete);

  const list = (
    <>
      <List>
        {onGoingTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            todo={todo}
            toggleTodo={() => dispatch(toggleTodo(todo.text))}
          />
        ))}
      </List>
      {completedTodos.length > 0 && (
        <ExpansionPanel>
          <ExpansionPanelSummary>
            <Typography variant="subtitle1">
              Completed ({completedTodos.length})
            </Typography>
          </ExpansionPanelSummary>
          <List>
            {completedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                todo={todo}
                toggleTodo={() => dispatch(toggleTodo(todo.text))}
              />
            ))}
          </List>
        </ExpansionPanel>
      )}
    </>
  );

  return (
    <div>
      {onGoingTodos.length === 0 ? (
        completedTodos.length === 0 ? (
          <Notification
            iconComponent={InboxOutlinedIcon}
            title="You list is empty"
            subTitle="Anything to add?"
          />
        ) : (
          <>
            <ExpansionPanel>
              <ExpansionPanelSummary>
                <Typography variant="subtitle1">
                  Completed ({completedTodos.length})
                </Typography>
              </ExpansionPanelSummary>
              <List>
                {completedTodos.map((todo) => (
                  <TodoItem
                    key={todo.text}
                    todo={todo}
                    toggleTodo={() => dispatch(toggleTodo(todo.text))}
                  />
                ))}
              </List>
            </ExpansionPanel>
            <Notification
              iconComponent={DoneAllOutlinedIcon}
              title="Well done!"
              subTitle="You've completed all task"
            />
          </>
        )
      ) : (
        list
      )}
    </div>
  );
};
