import React from 'lib/react';
import { connect } from 'lib/react-redux';
import {Card} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Trash from 'material-ui/svg-icons/action/delete';
import { getTodos } from 'reducer';
import {
  toggleCompleted,
  deleteTodo,
} from 'action/todo';

const mapStateToProps = (state, ownProps) => {
  const type = ownProps.params.type;

  return {
    todos: getTodos(type, state),
    type,
    onEdit: (id) => ownProps.router.push(`/edit/${id}`)
  };
};

const mapDispatchToProps = {
  onToggle: (id, isCompleted) => toggleCompleted(id, !isCompleted),
  onDelete: (id) => deleteTodo(id),
};

const paddedStyle = { padding: '5px', marginBottom: '10px' };

const checkbox = (id, isCompleted, onToggle) =>
  <Checkbox onCheck={() => onToggle(id, isCompleted)} checked={isCompleted} />;

const deleteIcon = (id, onDelete) =>
  <IconButton>
    <Trash onClick={() => onDelete(id)} />
  </IconButton>;

const toListItem = (onToggle, onEdit, onDelete) => ({text, id, isCompleted}) =>
  <ListItem
    leftCheckbox={checkbox(id, isCompleted, onToggle)}
    rightIcon={deleteIcon(id, onDelete)}
    primaryText={text}
    key={id} />;

const isDeleted = (todo) => todo.isDeleted;

const isCompleted = (todo) => todo.isCompleted;

const Editor = ({todos, onToggle, onDelete, onEdit}) => {
  const tasks = todos
                .filter((todo) => !isDeleted(todo))
                .filter((todo) => !isCompleted(todo))
                .map(toListItem(onToggle, onEdit, onDelete));

  const completed = todos
                    .filter((todo) => !isDeleted(todo))
                    .filter(isCompleted)
                    .map(toListItem(onToggle, onEdit, onDelete));

  return (
    <div style={paddedStyle}>
      <Card style={paddedStyle}>
        <List>
          <Subheader>{`Pending:${tasks.length}`}</Subheader>
          <Divider />
          {tasks}
        </List>
      </Card>
      <Card style={paddedStyle}>
        <List>
          <Subheader>{`Completed:${completed.length}`}</Subheader>
          <Divider />
          {completed}
        </List>
      </Card>
    </div>
  );
};


const container = connect(mapStateToProps, mapDispatchToProps);

export default container(Editor);
