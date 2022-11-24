import React from 'react';
import './App.css';
import Header from './components/Header';
import Heading from './components/Heading';

function App() {
  return (
    <div>
      <Header/>
      <h3><b>Using React.createElement</b></h3>
      { React.createElement( "div", {id:"title"}, [
        React.createElement( "h4", {style:{ color: "black"}}, "This is the first heading"),
        React.createElement( "h5", {style:{ color: "black"}}, "This is the second heading"),
        React.createElement( "h6", {style:{ color: "black"}}, "This is the third heading")
        
      ])}
      <br/>
    <h3><b>Using JSX</b></h3>
    {
    <span>
    <h4>This is the first heading</h4>
    <h5>This is the second heading</h5>
    <h6>This is the third heading</h6>
    </span>
    }
    <br/>
    <h3><b>Using Functional Component</b></h3>
    <Heading/>
    </div>
  );
}

export default App;
