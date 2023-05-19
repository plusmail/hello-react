import React, {Component} from "react";

class Count extends Component{
    state = {
        number: 0,
        fixedNumber:0
    }

    render() {
        const {number, fixedNumber} = this.state;
        console.log("number->",number, fixedNumber);

        return (
            <div>
                <h1>{number}</h1>
                <h2>{fixedNumber}</h2>
                <button
                     onClick={()=>{
                      this.setState((prevState)=>{
                          return {
                              number: prevState.number + 1
                          }
                      });
                    this.setState(prevState =>({
                    number : prevState.number +1
                    }))
                    }}
                >
                    +1
                </button>
            </div>
        )
    }
}

export default Count;