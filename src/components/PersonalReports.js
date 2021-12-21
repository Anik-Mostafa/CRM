import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    border:'1px solid #e3e3e3',
    borderRadius:"5px"
  },
}));

export default function PersonalReports() {
  const classes = useStyles();
  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      <ListItem button>
        <ListItemText primary="Share Reports" />
      </ListItem>
      <ListItem button>
        <ListItemText primary=" All Reports" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Task Reports" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Contact Reports" />
      </ListItem>
      <ListItem button>
        <ListItemText primary=" Company Reports" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Lead Reports" />
      </ListItem>
      <ListItem button>
        <ListItemText primary=" Deal Reports" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Projects Reports" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Other Reports" />
      </ListItem>
    </List>
  );
}
