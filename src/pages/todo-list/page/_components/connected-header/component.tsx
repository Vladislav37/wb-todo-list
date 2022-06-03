import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  createTodoItemActionSaga,
  isNewTaskCreatingSelector,
  showFormForNewTaskAction,
  showFormForNewTaskSelector,
  TodoStoragePartType,
} from '@/_redux/todo';
import {
  SubmitClickHandlerParamsType,
  TodoType,
} from '@/pages/todo-list/_types';
import { HeaderView } from './_components/header-view';

type PropsType = {
  handleCreateTask: (params: TodoType) => void;
  handleShowFormForNewTask: (params: boolean) => void;
  showFormForNewTask: boolean;
  isNewTaskCreating: boolean;
};

class WrappedContainer extends Component<PropsType> {
  submitClickHandler = ({ values }: SubmitClickHandlerParamsType): void => {
    this.props.handleCreateTask(values);
  };

  handleToggleFormOpened = () => {
    this.props.handleShowFormForNewTask(!this.props.showFormForNewTask);
  };

  render() {
    return (
      <HeaderView
        isNewTaskCreating={this.props.isNewTaskCreating}
        onSubmitClick={this.submitClickHandler}
        onToggleFormOpened={this.handleToggleFormOpened}
        showFormForNewTask={this.props.showFormForNewTask}
      />
    );
  }
}

const mapStateToProps = (state: TodoStoragePartType) => {
  return {
    showFormForNewTask: showFormForNewTaskSelector(state),
    isNewTaskCreating: isNewTaskCreatingSelector(state),
  };
};

const mapDispatchToProps = {
  handleCreateTask: createTodoItemActionSaga,
  handleShowFormForNewTask: showFormForNewTaskAction,
};

export const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedContainer);
