/* eslint-disable consistent-return */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable  quotes */
/* eslint-disable comma-dangle */
/* eslint-disable spaced-comment */
/* eslint-disable no-trailing-spaces */
/* eslint-disable object-curly-spacing */
/* eslint-disable semi */
/* eslint-disable padded-blocks */
/* eslint-disable eol-last */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable import/order */
/* eslint-disable object-shorthand */
/* eslint-disable function-paren-newline  */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-use-before-define */
/* eslint-disable no-alert  */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/sort-comp */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable lines-between-class-members */

import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={props.handleChangeProps}
        deleteTodoProps={props.deleteTodoProps}
        setUpdate={props.setUpdate}
      />
    ))}
  </ul>
);
export default TodosList;
