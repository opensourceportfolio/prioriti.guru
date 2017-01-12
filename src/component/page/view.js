import React from 'lib/react';
import { connect } from 'lib/react-redux';
import {Card} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import { getTodos } from 'reducer';

const mapStateToProps = (state) => {
  return {
    todos: getTodos(state)
  };
};

const mapDispatchToProps = {  };

const paddedStyle = { padding: '5px' };

const Editor = ({todos}) =>
  <div style={paddedStyle}>
    <Card style={paddedStyle}>
      <List>
        <Subheader>General</Subheader>
        <Divider />
        {
          todos.map((todo) =>
            <ListItem leftCheckbox={<Checkbox />} primaryText={todo.text} key={todo.id} />
          )
        }
      </List>
    </Card>
  </div>;


const container = connect(mapStateToProps, mapDispatchToProps);

export default container(Editor);
