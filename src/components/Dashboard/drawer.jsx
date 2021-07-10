import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Dashboard,LocalShipping, ExitToApp ,Assignment } from '@material-ui/icons';
import header from './Images/header.jpg';
import {Grid} from '@material-ui/core';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';


const jwt = require('jsonwebtoken');

const drawerWidth = 15+'%';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  links: {
    fontFamily: 'Baloo Da 2, cursive', 
    fontSize: '10rem',
    '&$focusVisible': {
      backgroundColor: theme.palette.action.selected,
    },
    '&$selected, &$selected:hover': {
      color: 'red',
    },
    '&$disabled': {
      opacity: 0.5,
    },
  },
}));

function logout(){
  localStorage.clear();
  sessionStorage.clear();
  <Redirect to = '/login'/>
}

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const username = jwt.decode(props.token)
  //console.log(username.username)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerData = [
      {
          title: 'Dashboard',
          icon: Dashboard,
          link: '/'
      },{
        title: "Today's Report",
        icon: Assignment,
        link: '/todayreport'
    },{
          title: 'Order History',
          icon: LocalShipping,
          link: '/orderHistory'
      },{
          title: 'Log Out',
          icon: ExitToApp,
          onClick : logout
      }
  ];
  //backgroundColor: '#13154e'
  const drawer = (
    <div style={{backgroundColor: 'white', overflow: 'hidden', height: 100+'vh',  tranparency: 0.52}}>
      <div style={{color: 'white', overflow: 'hidden', backgroundImage: 'url("https://images.unsplash.com/photo-1518112166137-85f9979a43aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxpbmVzfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")'}}>
        <Typography style={{marginTop: 20+'%',textAlign: 'center', fontStyle: 'italic',fontFamily: 'Baloo Da 2, cursive'}}>
            <h2>FSM</h2>
        </Typography>
      <div className={classes.toolbar} />
      <Divider />
      <List style= {{height: 100+'vh', overflow: 'hidden'}}>
        {drawerData.map((data) => {
          return(
          <a href= {data.link} className = {classes.links} style={{color: 'white', textDecoration: 'none', fontFamily: 'Baloo Da 2, cursive'}}>
          <ListItem  selected = {classes.active} button>
            <Grid component = {data.icon} style= {{marginRight: 10+'%', marginLeft: 10+'%'}}></Grid>
            <ListItemText style={{fontFamily: 'Baloo Da 2, cursive'}} multiline = {classes.links} classes= {classes.links} primary={data.title} onClick = {data.onClick}/>
          </ListItem>
          </a>
          );    
    })}
      </List>
      <Divider />
      </div> 
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root} style={{margin:0, border: 'none'}}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style = {{padding: 0,}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <img src = {header} style= {{width: 100+'%', margin: 0, height: 100+'%', padding: 0}} alt ='FSM-Logo'></img>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders" >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer 
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            style={{}}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
  token: PropTypes.func
};

export default withRouter(ResponsiveDrawer);
