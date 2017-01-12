import React from 'lib/react';
import { connect } from 'lib/react-redux';
import FullNote from 'component/note/full';
import GridNote from 'component/note/grid';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {  };

const style = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  height: '80%',
};

const Board = () =>
  <div style={style}>
    <FullNote />
    <GridNote />
  </div>;

const container = connect(mapStateToProps, mapDispatchToProps);

export default container(Board);
