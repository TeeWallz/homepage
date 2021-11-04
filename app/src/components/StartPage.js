import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';

import home from '../data/links/home.json'
import styles from '../data/style/style1.css'
import kek from '../data/style/style1.css'

class StartPage extends Component {



    render() {
        const {classes} = this.props;

        const kek1 = classes;
        const kek2 = styles;

        console.log()
        console.log(classes)
        console.log(styles)


        const links = home.map(function(group, i){
            return (

                <section className="link-section" key={i}>
                    <h2 className="link-section-title">{group.name}</h2>
                    <hr/>
                    <ul className="link-list">
                        {group.links.map(function (link, j) {
                            return (<li key={j} className="link-list-item"><a className="link" href={link.url} target="_blank">{link.name}</a>
                            </li>)
                        })}
                    </ul>
                </section>
            )
        })

        return (
            <React.Fragment>

                <div id="top-div">
                    <div id="clock-div">
                        <h1 id="clock">04/11/2021<br/>10:05:28</h1>
                    </div>

                    <form id="search-form" action="https://duckduckgo.com" data-np-checked="1">
                        <div id="search-bar-wrapper">
                            <input id="search-bar" name="q" type="text" title="Search" data-np-checked="1">
                            </input>
                            <button id="search-bar-btn" type="submit">🔎</button>
                        </div>
                    </form>
                </div>
                <div id="links-container">
                    {links}
                </div>
                <script src="/widgets/clock.js"></script>
            </React.Fragment>
        )
    }
}

StartPage.propTypes = {
    classes: PropTypes.object.isRequired
};

// const combinedStyles = combineStyles(styles, commonStyle);

export default withStyles(styles)(StartPage)
