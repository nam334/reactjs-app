import { render } from "@testing-library/react";
import { Component } from "react";
import { Outlet } from "react-router-dom";

class ProfileComponent extends Component{
   
    constructor(props){
        super(props);
        this.state={
           fetchData:{},
        }
        console.log("Profile constructor")
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/nam334")
        const json = await data.json();
        //console.log(json)
        this.setState({
            fetchData:json,
        });
        console.log("Profile CDM")
    }
    //CDU will be called on a props or state update
    componentDidUpdate(){
        console.log("Profile CDU")
    }
    render(){
    const {login, avatar_url,name} = this.state.fetchData
    return(
        
        <>
        <img src={avatar_url} alt="profile"/>
        <h3>Github username :{login}</h3>
        <h3>Name :{name}</h3>
        <Outlet/>
        </>
    )
  }
} 

export default ProfileComponent