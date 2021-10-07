import React from 'react';
import './MyButton.css';



class MyButtonClass extends React.Component{
    render(){

        return <button className="MyButton">{this.props.children} </button>
       

    }
}

export default MyButtonClass;
