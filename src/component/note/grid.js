import React from 'lib/react';
import { connect } from 'lib/react-redux';
import NoteRow from 'component/note/row';
import Note from 'component/note';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {  };

const GridNote = () => {
  return (
    <NoteRow rowStyle={{flex: 2}}>
      <Note style={{width: '50%', height: '50%'}} />
      <Note style={{width: '50%', height: '50%'}} />
      <Note style={{width: '50%', height: '50%'}} />
      <Note style={{width: '50%', height: '50%'}} />
    </NoteRow>
  );
};

const container = connect(mapStateToProps, mapDispatchToProps);

export default container(GridNote);
