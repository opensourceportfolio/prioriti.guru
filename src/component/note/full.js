import React from 'lib/react';
import { connect } from 'lib/react-redux';
import NoteRow from 'component/note/row';
import Note from 'component/note';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {  };

const FullNote = () => {
  return (
    <NoteRow rowStyle={{flex: 1}}>
      <Note />
    </NoteRow>
  );
};

const container = connect(mapStateToProps, mapDispatchToProps);

export default container(FullNote);
