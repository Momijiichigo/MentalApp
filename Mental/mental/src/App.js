import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Home from './Home';
import Post from './Post';
import User from './User';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  const bottom = {
    position: "fixed",
    bottom: "0px",

  };
 

  return (
    <div className={classes.root}>
      <AppBar position="static" style = {bottom}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab icon = {<HomeOutlinedIcon/>} href="/drafts" {...a11yProps(0)} />
          <LinkTab icon = {<AddBoxOutlinedIcon />} href="/trash" {...a11yProps(1)} />
          <LinkTab icon = {<AccountBoxIcon/>} href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home></Home>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Post></Post>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <User></User>
      </TabPanel>
    </div>
  );
}
