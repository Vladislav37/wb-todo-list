import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodoItemAction, TodoType } from '@/_redux/todo';
import { HeaderView } from './_components/header-view';

type PropsType = {
  handleCreateTask: (params: TodoType) => void;
};

// eslint-disable-next-line react/prefer-stateless-function
class WrappedContainer extends Component<PropsType> {
  render() {
    return <HeaderView onCreateClick={this.props.handleCreateTask} />;
  }
}

const mapDispatchToProps = {
  handleCreateTask: createTodoItemAction,
};

export const ConnectedHeader = connect(
  null,
  mapDispatchToProps,
)(WrappedContainer);
