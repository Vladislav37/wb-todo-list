import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  deleteTodoItemAction,
  isLoadingTasksSelector,
  todoListSelector,
  TodoStoragePartType,
  TodoType,
  updateTodoItemAction,
} from '@/_redux/todo';
import { TodoCardListView } from './_components/todo-card-list-view';

type PropsType = {
  todoList: TodoType[];
  handleDeleteTask: (params: TodoType) => void;
  handleUpdateTask: (params: TodoType) => void;
  isLoadingTasks: boolean;
};

// eslint-disable-next-line react/prefer-stateless-function
class WrappedContainer extends Component<PropsType> {
  render() {
    return (
      <TodoCardListView
        isLoadingList={this.props.isLoadingTasks}
        onDeleteClick={this.props.handleDeleteTask}
        onUpdateClick={this.props.handleUpdateTask}
        todoList={this.props.todoList}
      />
    );
  }
}

const mapStateToProps = (state: TodoStoragePartType) => {
  return {
    todoList: todoListSelector(state),
    isLoadingTasks: isLoadingTasksSelector(state),
  };
};

const mapDispatchToProps = {
  handleDeleteTask: deleteTodoItemAction,
  handleUpdateTask: updateTodoItemAction,
};

export const ConnectedTodoCardList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedContainer);
