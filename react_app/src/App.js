import React from 'react';
import Urls from './Urls';
// import Layout from './components/GlobalLayouts/Layout';
import {connect} from 'react-redux';
import * as actions from './store/authActions';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss';
// import * as utils from './components/CustomUtils.js';


function App(props) {
    // const [left, setleft] = React.useState(false)
    // const [customToolbar, setCustomToolbar] = React.useState(false)

    // function toggleDrawer() {
    //     // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //     //   return;
    //     // }
    //
    //     setleft(false);
    // };
    //
    // function openDrawer() {
    //     setleft(true);
    // };
    //
    //
    //
    // // Similar to componentDidMount and componentDidUpdate:
    // React.useEffect(() => {
    //     props.setAuthenticatedIfRequired();
    // }, []);


    console.log("APP > ", props)
    return (
        <div className="App">
            <Urls  {...props} />
        </div>
    );
}

//This means that one or more of the redux states in the store are available as props
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null && typeof state.auth.token !== 'undefined',
        token: state.auth.token
    }
}

//This means that one or more of the redux actions in the form of dispatch(action) combinations are available as props
const mapDispatchToProps = (dispatch) => {
    return {
        setAuthenticatedIfRequired: () => dispatch(actions.authCheckState()),
        logout: () => dispatch(actions.authLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);