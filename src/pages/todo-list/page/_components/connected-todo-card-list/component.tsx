import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  areTasksLoadingSelector,
  deleteTodoItemActionSaga,
  setTodoListAction,
  todoListSelector,
  TodoStoragePartType,
  updateTodoItemActionSaga,
} from '@/_redux/todo';
import {
  SubmitClickHandlerParamsType,
  TodoType,
} from '@/pages/todo-list/_types';
import { updatePropertyState } from '@/_utils/todo/update-property-state';
import { TodoCardListView } from './_components/todo-card-list-view';

type PropsType = {
  todoList: Array<TodoType>;
  deleteTask: (params: string) => void;
  updateTask: (params: TodoType) => void;
  setUpdatedTodos: (params: Array<TodoType>) => void;
  areTasksLoading: boolean;
};

class WrappedContainer extends Component<PropsType> {
  submitClickHandler = ({
    values,
    isEditable,
  }: SubmitClickHandlerParamsType): void => {
    if (isEditable) {
      this.props.updateTask(values);

      return;
    }

    const updatedEditableTodos = updatePropertyState({
      items: this.props.todoList,
      currentId: values.id,
      property: 'isEditable',
      value: true,
    });

    this.props.setUpdatedTodos(updatedEditableTodos);
  };

  deleteClickHandler = (id: string): void => {
    const isCardEditable = this.props.todoList.find(
      (todo: TodoType) => todo.id === id,
    )?.isEditable;

    if (isCardEditable) {
      const updatedEditableTodos = updatePropertyState({
        items: this.props.todoList,
        currentId: id,
        property: 'isEditable',
        value: false,
      });

      this.props.setUpdatedTodos(updatedEditableTodos);
    } else {
      this.props.deleteTask(id);
    }
  };

  render() {
    return (
      <TodoCardListView
        isLoading={this.props.areTasksLoading}
        onDeleteClick={this.deleteClickHandler}
        onSubmitClick={this.submitClickHandler}
        todoList={this.props.todoList}
      />
    );
  }
}

const mapStateToProps = (state: TodoStoragePartType) => {
  return {
    todoList: todoListSelector(state),
    areTasksLoading: areTasksLoadingSelector(state),
  };
};

const mapDispatchToProps = {
  deleteTask: deleteTodoItemActionSaga,
  updateTask: updateTodoItemActionSaga,
  setUpdatedTodos: setTodoListAction,
};

export const ConnectedTodoCardList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedContainer);
