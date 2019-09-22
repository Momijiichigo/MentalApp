import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ServiceMenu from './ServiceButton';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CardActionArea from '@material-ui/core/CardActionArea';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
let HeartColor = "";
let isTrue = false;
function changeHeartColor(color) {
    HeartColor = color;
    // isTrue = !isTrue;

  }
  let upvotes = 1000;
  let commentNum = 35;

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  function handleChangeHeartColor(color) {
    changeHeartColor(color);

  }
  const right = {
      marginLeft: "10%",
  }


  return (
    <Card className={classes.card}>
        
      <CardHeader
        avatar={
          <AccountBoxIcon aria-label="problem" className={classes.avatar}>
          </AccountBoxIcon>
        }
        action={
          <ServiceMenu></ServiceMenu>
        
        }
        title="Anonymous"
        subheader="September 22, 2019"
      />
      
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          Help! I'm super depressed and want to kill my self!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick = {() => handleChangeHeartColor("error")} color = "primary">
          <FavoriteIcon />
          <Typography style = {right}> {upvotes}</Typography>
        </IconButton>
        <IconButton color = "primary">
        <ChatBubbleIcon/>
        <Typography style = {right}>{commentNum}</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}