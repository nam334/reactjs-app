import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';

export class About extends Component {
  constructor(props){
    super(props);
    this.state={

    }
    console.log("About constructor")
  }
  componentDidMount(){
    console.log("About CDM")
  }
  componentDidUpdate(){
    console.log("About CDU")
  }
  render() {
    console.log("About render")
    return (
      <div>
        <h1 className='font-sans hover:font-serif'>We are EcmaScripters!</h1>
        <Outlet/>
        </div>
    )
  }
}

export default About