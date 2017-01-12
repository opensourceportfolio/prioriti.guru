import React from 'lib/react';
import { Link } from 'lib/react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = { position: 'fixed', right: 20, bottom: 20 };

const AddButton = () =>
  <Link to={'edit'}>
    <FloatingActionButton style={style}>
      <ContentAdd />
    </FloatingActionButton>
  </Link>;

export default AddButton;
