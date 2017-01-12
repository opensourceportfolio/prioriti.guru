import React from 'lib/react';
import { connect } from 'lib/react-redux';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import * as todoActions from 'action/editor';
import { getCurrentTodoState } from 'reducer';

const mapStateToProps = (state) => {
  return {
    todo: getCurrentTodoState(state),
  };
};

const mapDispatchToProps = {
  create: (todo) => todoActions.create(todo),
  changeText: (e, v) => todoActions.changeText(v),
  toggle: (toggleName, v) => todoActions.toggle(toggleName, v),
};

const rowStyle = { marginBottom: '10px'};

const paddedStyle = { padding: '5px' };

const buttonStyle = {display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'};

const Editor = ({ todo, toggle, create, changeText }) => {
  return (
    <div style={paddedStyle}>
    <Card style={paddedStyle}>
      <TextField
        hintText="My goal"
        fullWidth={true}
        style={rowStyle}
        value={todo.text}
        onChange={changeText} />
      <div style={{maxWidth: '250px', paddingLeft: '20px'}}>
        <Toggle
          label="Important"
          style={rowStyle}
          defaultToggled={todo.important}
          onToggle={() => toggle('important', !todo.important)} />
        <Toggle
          label="Easy"
          style={rowStyle}
          defaultToggled={todo.easy}
          onToggle={() => toggle('easy', !todo.easy)} />
      </div>
      <div style={buttonStyle}>
        <RaisedButton label="Save" primary={true} onClick={() => create(todo)} />
      </div>
    </Card>
  </div>);
};

const container = connect(mapStateToProps, mapDispatchToProps);

export default container(Editor);
