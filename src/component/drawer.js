import React from 'lib/react';
import { connect } from 'lib/react-redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { toggleDrawer as toggle, getDrawerState } from 'action/navigation';

const mapStateToProps = (state) => {
  return {
    openDrawer: getDrawerState(state),
  };
};

const mapDispatchToProps = { toggleDrawer: toggle };

const PrioritiDrawer = ({ openDrawer, toggleDrawer }) =>
  <Drawer
    docked={false}
    open={openDrawer}
    onRequestChange={toggleDrawer}>
      <MenuItem onTouchTap={toggleDrawer}>Menu Item</MenuItem>
      <MenuItem onTouchTap={toggleDrawer}>Menu Item 2</MenuItem>
  </Drawer>;

const container = connect(mapStateToProps, mapDispatchToProps);

export default container(PrioritiDrawer);
