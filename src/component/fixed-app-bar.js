import React from 'lib/react';
import AppBar from 'material-ui/AppBar';

const style = { position: 'fixed', top: 0, };

const FixedAppBar = ({ iconLeft, onTap }) => {

  return (
    <AppBar
      iconElementLeft={iconLeft}
      onLeftIconButtonTouchTap={onTap}
      style={style}/>
  );
};

export default FixedAppBar;
