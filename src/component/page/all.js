import React from 'lib/react';
import { connect } from 'lib/react-redux';
import Board from 'component/board';
import AddButton from 'component/add-button';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {  };

const style = { height: '100%' };


const All = () =>
  <div style={style}>
    <Board />
    <AddButton />
  </div>;

const container = connect(mapStateToProps, mapDispatchToProps);

export default container(All);
