import React, {Component} from 'react';
import * as settings from "../../../settings";
import {printLinksSimple, linkIdsAndNames} from "../../../utils/linkutils";

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

class EditLinksPage extends Component {
    state = {
        links: []
    };

    async componentDidMount() {
        try {
            const res = await fetch(settings.API_SERVER + "/links/" + this.props.match.params.linkid);
            console.log(settings.API_SERVER + "/links/" + this.props.match.params.linkid)
            console.log(res)
            const links = await res.json();
            this.setState({
                links
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        // let kek = 1
        // let yeet = this.state.links;
        // return linkIdsAndNames(this.state.links)

        // console.log(this.state.links )

        const columns = [{
          dataField: 'name',
          text: 'name'
        }];

        const expandRow = {
          renderer: row => (
            <div>
              <p>{ `This Expand row is belong to rowKey ${row.name}` }</p>
              <p>You can render anything here, also you can add additional data on every row object</p>
              <p>expandRow.renderer callback will pass the origin row object to you</p>
            </div>
          )
        };


        return(
            <BootstrapTable
              keyField="id"
              data={ this.state.links }
              columns={ columns }
              cellEdit={ cellEditFactory({ mode: 'dbclick' }) }
              expandRow={ expandRow }
            />
        )
    }
};

export default EditLinksPage;

