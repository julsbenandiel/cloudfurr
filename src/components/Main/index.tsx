import React, { FC } from 'react'
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import 'styles/index.scss';
import { Navbar } from './Navbar';
import { AppRouter } from 'components/Router';
import { Folder, People, Settings, ShoppingBasket } from '@material-ui/icons';
import { List } from '@material-ui/core';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => {
  console.log({ theme })
  return createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  });
});

const Main:FC<any> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${classes.root} dashboard`}>
      <CssBaseline />
      <Navbar
        classes={ classes }
        handleDrawerOpen={ handleDrawerOpen }
        isOpen={ isOpen }
      />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: isOpen,
            [classes.drawerClose]: !isOpen,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />

        <List>
          <Link to="/records">
            <ListItem button key="records-button">
              <ListItemIcon><Folder /></ListItemIcon>
              <ListItemText primary="Animal Records" />
            </ListItem>
          </Link>

          <Link to="/users">
            <ListItem button key="users-button">
              <ListItemIcon><People /></ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          </Link>

          <Link to="/shop">
            <ListItem button key="shpopping-button">
              <ListItemIcon><ShoppingBasket /></ListItemIcon>
              <ListItemText primary="Cloudfurr Shop" />
            </ListItem>
          </Link>

        </List>

        <Divider />

        <List>
          <ListItem button key="settings-button">
            <ListItemIcon><Settings/></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />

        <AppRouter />
        
      </main>
    </div>
  );
}

export default Main;
