import React, {useEffect, useState} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import {SimplePage} from "./SimplePage"
import axios from 'axios';

class StartPage extends React.Component {

    constructor(props) {
        window.cellRenders = 0;
        super(props);
        this.state = {startpages: {}, links: {}, style: {},}
        this.getLinkData = this.getLinkData.bind(this);
        this.initialLoad = this.initialLoad.bind(this);
        this.renderStartPage = this.renderStartPage.bind(this);
    }

    componentDidMount() {
        this.initialLoad();
    }


    getLinkData(linkId) {
        // return this.makeAjaxCall("http://localhost:8002/startpage/1", "get")
    }

    async initialLoad() {

        // https://stackoverflow.com/questions/44182951/axios-chaining-multiple-api-requests
        const [currentStartpageResponse] = await Promise.all([
            axios.get(`http://localhost:8002/startpage/1`),
        ]);

        const [linkResponse, styleResponse] = await Promise.all([
            axios.get(`http://localhost:8002/links/1${""}`),
            axios.get(`http://localhost:8002/style/1${""}`)
        ]);

        this.setState({
            startpages: {
                ...this.state.startpages,
                [currentStartpageResponse.data[0].id]: currentStartpageResponse.data[0]
            },
            links: {
                ...this.state.links,
                [linkResponse.data[0].id]: linkResponse.data[0]
            },
            style: {
                ...this.state.style,
                [styleResponse.data[0].id]: styleResponse.data[0]
            }
        }, () => {
            console.log(this.state)
        })
    }

    renderStartPage() {
        if (!this.state.startpages.hasOwnProperty(1)) {
            return "1";
        }
        if (!this.state.links.hasOwnProperty(1) && !this.state.style.hasOwnProperty(1)) {
            return "2";
        }

        let result = "";
        // for(let i = 0; i < this.state.links[1].data.items.length; i++){
        //     result += this.state.links[1].data.items[i].name
        //
        //     for(let j = 0; j < this.state.links[1].data.items.length; j++){
        //         result += this.state.links[1].data.items[i].items[j].title
        //     }
        //
        //
        // }
        result = (
            <React.Fragment>
                {
                    this.state.links[1].data.items.map((group) => (
                        <React.Fragment>
                            <h1>{group.name}</h1>
                            {group.items.map((link) => (
                                <li>
                                    <a target="_blank" rel="noopener" href={link.url}>{link.title}</a>
                                </li>
                            ))}
                        </React.Fragment>

                        // <li>
                        //     <a target="_blank" rel="noopener" href={link.url}>{link.title}</a>
                        // </li>
                    ))
                }
            </React.Fragment>
        )
        console.log(result);
        return (
            <React.Fragment>
                {result}
            </React.Fragment>
        )
    }


    render() {
        console.log(this.props.match.params);


        return (
            <React.Fragment>
                <CssBaseline/>
                <div>
                    <h1>Start Page</h1>
                    <hr/>
                    {this.renderStartPage()}
                    <br/><br/>
                    {/*{JSON.stringify(this.state.linkData.data)}*/}
                </div>
            </React.Fragment>
        )
    }
}

export default StartPage
