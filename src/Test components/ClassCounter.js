import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    Increment(){
        this.setState({count:this.state.count +1},
            ()=>{console.log('callback value',this.state.count)})
            console.log(this.state.count)
    }
    
    render() {
        return (
            <div>
                <button onClick={()=>{this.Increment()}}>count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter
