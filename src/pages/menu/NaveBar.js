import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from 'react-router-dom';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{flexGrow:1}} noWrap>
            Espace Admin
          </Typography>
          <Button color="inherit" >Logout</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
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
          <Link to="/Home">
          <ListItem button>
     <ListItemIcon>
      <HomeIcon />
     </ListItemIcon>
     <ListItemText primary="Home" />
    </ListItem>
          </Link>
    
<Link to="/Professeur">
<ListItem button>
    <ListItemIcon>
     <InsertDriveFileIcon  />
      </ListItemIcon>
    <ListItemText primary="Professeur" />
  </ListItem>

</Link>
  
  <Link to="/Etudiant">
  <ListItem button>
  <ListItemIcon>
    <SchoolIcon />
    </ListItemIcon>
    <ListItemText  primary="Etudiant" />
  </ListItem>
  </Link>
  
   <Link to="/Paiement">
   <ListItem button>
    <ListItemIcon>
    <MonetizationOnIcon />
    </ListItemIcon>
    <ListItemText primary="Paiement" />
  </ListItem>
   </Link>
  
    <Link to="/Filiere">
    <ListItem button>
    <ListItemIcon>
    <ImportContactsIcon />
    </ListItemIcon>
    <ListItemText primary="Filière" />
  </ListItem>
    </Link>
  
    <Link to="/Matiere"> 
    <ListItem button>
    <ListItemIcon>
    <MenuBookIcon />
    </ListItemIcon>
    <ListItemText primary="Matière" />
  </ListItem>
    </Link>
  
  <Link to="/Projet">
  <ListItem button>
  <ListItemIcon>
    <AccountTreeIcon />
    </ListItemIcon>
    <ListItemText  primary="Projet" />
  </ListItem>
  </Link>
  <Link to="/Stage">
  <ListItem button>
  <ListItemIcon>
    <WorkOutlineIcon/>
    </ListItemIcon>
    <ListItemText  primary="Stage" />
  </ListItem>
  </Link>
  <Link to="/Admin">
  <ListItem button>
  <ListItemIcon>
    <SupervisorAccountIcon/>
    </ListItemIcon>
    <ListItemText  primary="Admin" />
  </ListItem>
  </Link>
   <Link>
   <ListItem button>
  <ListItemIcon>
    <ExitToAppIcon color='secondary' />
    </ListItemIcon>
    <ListItemText  primary="Quiter" />
  </ListItem>
   </Link>
  
        </List>

      </Drawer>
      <main className={classes.content}>
      
        <div className={classes.toolbar} />
         
      </main>
      
    </div>
  );
}
