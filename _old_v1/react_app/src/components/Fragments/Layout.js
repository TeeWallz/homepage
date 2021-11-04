import React from 'react';
// import TopBar from "./Toolbar/TopBar.js"
// import Footer from "./Footer"
import CssBaseline from '@material-ui/core/CssBaseline';
import ToolbarComponent from "./ToolBar/TopBar"
import DrawerComponent from "./Drawer/Drawer";


function Layout(props) {
    return (
        <React.Fragment>
            <CssBaseline />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
            />

            {/*<TopBar {...props} />*/}
            <ToolbarComponent customToolbar={props.customToolbar} setCustomToolbar={props.setCustomToolbar} openDrawerHandler={props.openDrawer} />
            <DrawerComponent
                left={props.left}
                toggleDrawerHandler={props.toggleDrawer}
            />
            <div>
                {props.children}
            </div>
            {/*<Footer />*/}
        </React.Fragment>
    )
}
export default Layout