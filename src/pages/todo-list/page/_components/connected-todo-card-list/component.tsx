import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  areTasksLoadingSelector,
  deleteTodoItemAction,
  setUpdatedTodoItem,
  todoListSelector,
  TodoStoragePartType,
  updateTodoItemAction,
} from '@/_redux/todo';
import { SubmitClickHandlerType, TodoType } from '@/pages/todo-list/_types';
import { updateIsEditableStateForTodoList } from '@/_utils/todo';
import { TodoCardListView } from './_components/todo-card-list-view';

type PropsType = {
  todoList: TodoType[];
  handleDeleteTask: (params: string) => void;
  handleUpdateTask: (params: TodoType) => void;
  handleSetUpdatedTodos: (params: TodoType[]) => void;
  areTasksLoading: boolean;
};

class WrappedContainer extends Component<PropsType> {
  submitClickHandler = ({
    values,
    isEditable,
  }: SubmitClickHandlerType): void => {
    if (isEditable) {
      this.props.handleUpdateTask(values);
    } else {
      const updatedEditableTodos = updateIsEditableStateForTodoList({
        items: this.props.todoList,
        currentId: values.id,
        isEditable: true,
      });

      this.props.handleSetUpdatedTodos(updatedEditableTodos);
    }
  };

  deleteClickHandler = (id: string): void => {
    const isEditable = this.props.todoList.find(
      (todo: TodoType) => todo.id === id,
    )?.isEditable;

    if (isEditable) {
      const updatedEditableTodos = updateIsEditableStateForTodoList({
        items: this.props.todoList,
        currentId: id,
        isEditable: false,
      });

      this.props.handleSetUpdatedTodos(updatedEditableTodos);
    } else {
      this.props.handleDeleteTask(id);
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
  handleDeleteTask: deleteTodoItemAction,
  handleUpdateTask: updateTodoItemAction,
  handleSetUpdatedTodos: setUpdatedTodoItem,
};

export const ConnectedTodoCardList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedContainer);
