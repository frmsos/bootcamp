import {Component} from "react";
import React from "react";

class PersonCard extends Component{
   constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
   }
   increaseAge = () => {
        let ageCounter = this.state.age;
        ageCounter++;
        this.setState( { age: ageCounter } );
   }
   
    render(){
        return(
            <div className="list">
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.haircolor}</p>
                <button onClick = { this.increaseAge   }> Birthday button for {this.props.firstName} {this.props.lastName} </button>
            </div>
            
        );
    }
}
export default PersonCard;