import React from 'lib/react';
import { Link } from 'lib/react-router';
import { connect } from 'lib/react-redux';
import {Card} from 'material-ui/Card';

const mapStateToProps = () => {
  return {};
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

const Note = (props) => {
  const extendedStyles = Object.assign({}, noteStyle, props.style);

  return (
      <div style={extendedStyles}>
        <Link to="view">
          <Card style={cardStyle}>
          </Card>
        </Link>
      </div>
  );
};
const container = connect(mapStateToProps, mapDispatchToProps);

export default container(Note);
