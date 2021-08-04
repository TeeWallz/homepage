// App.js
import React, {Component} from 'react';
import * as settings from '../../settings';

import {printLinksSimple} from '../../utils/linkutils'


class Home extends Component {
    state = {
        links: []
    };

    async componentDidMount() {
        try {
            const res = await fetch(settings.API_SERVER + "/user/tom/links");
            const links = await res.json();
            this.setState({
                links
            });
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        console.log("----");
        console.log(settings)
        console.log(process.env)
        console.log("----");
        return (
            <div>
                <h1>Here are your Links!</h1>
                <hr/>
                <table >
                    <tr>
                        <td style={{ verticalAlign: "baseline"}}>
                            <table style={{    verticalAlign: "baseline"}}>
                                <thead>
                                <tr>
                                    <td>Link Name</td>
                                    <td>Show Links</td>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.links.map(link => (
                                    <tr>
                                        <td>{link.name}</td>
                                        <td>
                                            <button type="button">Show Links</button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </td>
                        <td style={{"backgroundColor": "red"}}>
                            {this.state.links.map(link => (
                                printLinksSimple(link)
                            ))}
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Home;
