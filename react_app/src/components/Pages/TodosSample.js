// import React from 'react'
// import CssBaseline from '@material-ui/core/CssBaseline';
// function Home() {
//     return (
//         <React.Fragment>
//             <CssBaseline />
//             <div>
//                 <h1>Home Page</h1>
//             </div>
//         </React.Fragment>
//     )
// }
// export default Home





// App.js
import React, { Component } from 'react';
import * as settings from '../../settings';

class Home extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    try {
      const res = await fetch(settings.API_SERVER);
      const todos = await res.json();
      this.setState({
        todos
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
          <h1>Here are your Todos! v3 </h1>
        <hr/>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
