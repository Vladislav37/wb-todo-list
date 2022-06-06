import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchFormManagerSagaAction,
  initLoadManagerActionSaga,
} from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import {
  isNewTaskCreatingSelector,
  showFormForNewTaskAction,
  showFormForNewTaskSelector,
  startCreatingNewTaskAction,
  stopCreatingNewTaskAction,
  TodoStoragePartType,
} from '@/_redux/todo';
import { SubmitClickHandlerParamsType } from '@/pages/todo-list/_types';
import { createTodoItemRequest } from '@/api/requests/todo';
import { fetchTodoConfig } from '@/pages/todo-list/store-inject-config/_utils/fetch-todo-config';
import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { PAGE_SUB_NAMESPACE } from '@/pages/todo-list/_constants/translations/page-sub-namespace';
import { HeaderView } from './_components/header-view';

type PropsType = {
  handleCreateTask: typeof fetchFormManagerSagaAction;
  handleShowFormForNewTask: (params: boolean) => void;
  showFormForNewTask: boolean;
  isNewTaskCreating: boolean;
};

class WrappedContainer extends Component<PropsType> {
  submitClickHandler = ({ values }: SubmitClickHandlerParamsType): void => {
    this.props.handleCreateTask({
      formRequest: createTodoItemRequest,
      formValues: values,
      showNotification: true,
      loadingStartAction: startCreatingNewTaskAction,
      loadingStopAction: stopCreatingNewTaskAction,
      formSuccessActionsArray: [
        () => showFormForNewTaskAction(false),
        () =>
          initLoadManagerActionSaga({
            requestConfigList: [fetchTodoConfig(true)],
          }),
      ],
      titleMessageSuccess: i18next.t(
        `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.success.title`,
      ),
      textMessageSuccess: i18next.t(
        `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.success.text`,
      ),
      titleMessageError: i18next.t(
        `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.errors.title`,
      ),
    });
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
  // use form manager from redux-core-modules
  // handleCreateTask: createTodoItemActionSaga,
  handleCreateTask: fetchFormManagerSagaAction,
  handleShowFormForNewTask: showFormForNewTaskAction,
};

export const ConnectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WrappedContainer);
