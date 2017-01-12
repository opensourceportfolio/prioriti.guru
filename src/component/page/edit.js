import React from 'lib/react';
import { connect } from 'lib/react-redux';
import Editor from 'component/editor';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {  };

const Edit = () =>
  <div>
    <Editor />
  </div>;

const container = connect(mapStateToProps, mapDispatchToProps);

export default container(Edit);
