import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFormManagerSagaAction } from '@mihanizm56/redux-core-modules';
import {
  isNewTaskCreatingSelector,
  newTaskFormValuesSelector,
  showFormForNewTaskAction,
  showFormForNewTaskSelector,
  TodoStoragePartType,
} from '@/_redux/todo';
import {
  SubmitClickHandlerParamsType,
  TodoType,
} from '@/pages/todo-list/_types';
import { HeaderView } from './_components/header-view';
import { createTodoItemConfig } from './_utils/create-todo-item-config';

type PropsType = {
  fetchFormManager: typeof fetchFormManagerSagaAction;
  handleShowFormForNewTask: (params: boolean) => void;
  showFormForNewTask: boolean;
  isNewTaskCreating: boolean;
  newTaskFormValues: TodoType;
};

class WrappedContainer extends Component<PropsType> {
  submitClickHandler = ({ values }: SubmitClickHandlerParamsType): void => {
    this.props.fetchFormManager(createTodoItemConfig(values));
  };

  handleToggleFormOpened = () => {
    this.props.handleShowFormForNewTask(!this.props.showFormForNewTask);
  };

  render() {
    return (
      <HeaderView
        isNewTaskCreating={this.props.isNewTaskCreating}
        newTaskFormValues={this.props.newTaskFormValues}
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
    newTaskFormValues: newTaskFormValuesSelector(state),
  };
};

const mapDispatchToProps = {
  fetchFormManager: fetchFormManagerSagaAction,
  handleShowFormForNewTask: showFormForNewTaskAction,
};

export const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedContainer);
