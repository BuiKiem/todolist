import React from "react";

import { CompleteState } from "./CompleteState";
import { OnGoingState } from "./OnGoingState";
import { EmptyState } from "./EmptyState";

interface IProps {
  todos: TTodo[];
}

export const TodoList: React.FC<IProps> = ({ todos }) => {
  const onGoingTodos = todos.filter((todo) => !todo.complete);
  const completedTodos = todos.filter((todo) => todo.complete);

  return (
    <div>
      {onGoingTodos.length === 0 ? (
        completedTodos.length === 0 ? (
          <EmptyState />
        ) : (
          <CompleteState completedTodos={completedTodos} />
        )
      ) : (
        <OnGoingState
          onGoingTodos={onGoingTodos}
          completedTodos={completedTodos}
        />
      )}
    </div>
  );
};
