import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    border:'1px solid #e3e3e3',
    borderRadius:"5px"
  },
}));

export default function Dropdown() {
  const classes = useStyles();
  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      <ListItem button>
        <ListItemText primary="Recently Viewed" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Items you following" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="All Contacts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Contacts added in the last 24 hours" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Contacts added in the last 7 hours" />
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