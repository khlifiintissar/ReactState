import React from "react";
class Welcome extends React.Component{
    g
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Sara"
        }
    }
    static getDerivedStateFromProps(props, state) {
        
    }
    
    handleClick(){
        this.setState({name:"Arya"},()=>console.log('callback value',this.state.name))
        console.log(this.state.name)
    }
    render(){
        return(
        <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={()=>this.handleClick()}>click me</button>
        </div>
        )
        

    }
}
export default Welcome;