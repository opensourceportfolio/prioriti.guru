import React from 'lib/react';
import { Link } from 'lib/react-router';
import { connect } from 'lib/react-redux';
import {Card} from 'material-ui/Card';
import { getTodos } from 'reducer';

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getTodos(ownProps.type, state)
  };
};

const mapDispatchToProps = {  };

const noteStyle = {
  padding: '5px',
  height: '100%',
  width: '100%',
};

const cardStyle = {
  height: '100%',
};

const Note = ({ style, type, todos }) => {
  const extendedStyles = Object.assign({}, noteStyle, style);

  return (
      <div style={extendedStyles}>
        <Link to={`/view/${type}`}>
          <Card style={cardStyle} />
        </Link>
      </div>
  );
};
const container = connect(mapStateToProps, mapDispatchToProps);

export default container(Note);
