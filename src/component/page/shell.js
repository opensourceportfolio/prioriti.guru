import React from 'lib/react';
import { connect } from 'lib/react-redux';
import PrioritiDrawer from 'component/drawer';
import FixedAppBar from 'component/fixed-app-bar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import { toggleDrawer } from 'action/navigation';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = { toggleDrawer };

const Shell = (props) => {
  const page = props.location.pathname.substring(1) || null;
  const icon = page ? <IconButton><NavigationClose /></IconButton> : null;
  const onTap = () => {
    if (page) {
      props.router.goBack();
    } else {
      props.toggleDrawer();
    }
  };

  return (
    <div>
      {
        page ? null : <PrioritiDrawer />
      }
      <FixedAppBar iconLeft={icon} onTap={onTap} />
      {props.children}
    </div>
  );
};

const container = connect(mapStateToProps, mapDispatchToProps);

export default container(Shell);
