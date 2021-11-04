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
            <div style={{width: "30vw"}}>
                <h1>Here are your Links!</h1>
                <hr/>
                <table >
                    <tr>
                        <td style={{ verticalAlign: "baseline"}}>
                                <select multiple style={{width: "10vw"}}>
                                    {this.state.links.map(link => (
                                        <option>
                                            {link.name}
                                        </option>
                                    ))}
                                </select>
                            <button>Edit Links</button>
                        </td>
                        <td style={{"backgroundColor": "salmon", width: "20vw"}}>
                            {this.state.links.map(link => (
                                printLinksSimple(link)
                            ))}
                        </td>
                    </tr>
                </table>
                <hr/>
            </div>
        );
    }
}

export default Home;
