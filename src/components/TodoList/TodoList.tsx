import React from "react";
import { useDispatch } from "react-redux";

import { TodoItem } from "../TodoItem/TodoItem";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  List,
  Typography,
} from "@material-ui/core";

import { toggleTodo } from "../../reducers/todos";

interface IProps {
  todos: TTodo[];
}

export const TodoList: React.FC<IProps> = ({ todos }) => {
  const dispatch = useDispatch();

  const onGoingTodos = todos.filter((todo) => !todo.complete);
  const completedTodos = todos.filter((todo) => todo.complete);

  return (
    <div>
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
    </div>
  );
};