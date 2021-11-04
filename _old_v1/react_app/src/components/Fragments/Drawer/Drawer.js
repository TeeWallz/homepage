import React from "react";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const styles = theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

class DrawerComponent extends React.Component {
  state = {
    left: false
  };

  render() {
    const { classes } = this.props;

    const sideList = side => (
      <div
        className={classes.list}
        role="presentation"
        onClick={this.props.toggleDrawerHandler}
        onKeyDown={this.props.toggleDrawerHandler}
      >
        <List>
          <ListItem button key={"Home"} component="a" href="/">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key={"Your Settings"} component="a" href="/usersettings">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Your Settings"} />
            </ListItem>
        </List>
      </div>
    );

    return (
      <Drawer open={this.props.left} onClose={this.props.toggleDrawerHandler}>
        {sideList("left")}
      </Drawer>
    );
  }
}

export default withStyles(styles)(DrawerComponent);
