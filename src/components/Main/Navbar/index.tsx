import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle, Pets } from '@material-ui/icons';
import { Theme } from '@material-ui/core';
import { FC } from 'react';

interface NavbarInterface {
  classes: any;
  handleDrawerOpen: () => void;
  isOpen: boolean;
}

export const Navbar:FC<NavbarInterface> = (props) => {

  const { classes, handleDrawerOpen, isOpen } = props;

  return (
    <AppBar
      color="primary"
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isOpen,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: isOpen,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography className="dashboard__title-container" variant="h6" noWrap>
          <Pets className="" />
          <span className="dashboard__title-text">Cloudfurr</span>
        </Typography>

        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => {}}
            color="inherit">
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}