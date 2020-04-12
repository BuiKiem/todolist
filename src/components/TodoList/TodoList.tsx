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

interface IProps {
  todos: TTodo[];
}

export const TodoList: React.FC<IProps> = ({ todos }) => {
  const dispatch = useDispatch();

  const onGoingTodos = todos.filter((todo) => !todo.complete);
  const completedTodos = todos.filter((todo) => todo.complete);

  const empty = (
    <div className="flex flex-col items-center">
      <InboxOutlinedIcon color="disabled" fontSize="large" />
      <div className="text-center">
        <Typography variant="subtitle2" component="h2">
          <span className="capitalize">your</span> list is empty
        </Typography>
        <Typography variant="caption" component="h3">
          <span className="capitalize">anything</span> to add?
        </Typography>
      </div>
    </div>
  );

  const welldone = (
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
      <div className="flex flex-col items-center">
        <DoneAllOutlinedIcon color="disabled" fontSize="large" />
        <div className="text-center">
          <Typography variant="subtitle2" component="h2">
            <span className="capitalize">well</span> done
          </Typography>
          <Typography variant="caption" component="h3">
            <span className="capitalize">you</span> have completed all todos
          </Typography>
        </div>
      </div>
    </>
  );

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
      {onGoingTodos.length === 0
        ? completedTodos.length === 0
          ? empty
          : welldone
        : list}
    </div>
  );
};
