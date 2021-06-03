
import './App.css';
import React, { Component } from 'react';


export class App extends Component {
  constructor(props) {
    console.log("constructor()")
    super(props)
  
    this.state = {
       person:{
         fullName:"Dalida",
         imgSrc:"./Dalida.jpg",
         profession:"she was a multi-talented person:Singer,Actress,Dancer,Model",
         biography:"Dalida was an Italian-Egyptian singer who moved to France in her 30's, where she enjoyed the most successful part of her career. She was born on January 17, 1933 in Cairo, Egypt as Yolande Christina Gigliotti. She was married to Lucien Morisse. She died on May 3, 1987 in Paris, France.",

       },
       shows:false,
       intervall:null,
       timer:0,

    }
  }
  componentDidMount(){
    console.log("componentDidMount()");
    this.setState({
      intervall:setInterval(() => {
        this.setState({timer:this.state.timer +1});
        
      }, 1000),
    });
  }
  componentDidUpdate(){
    console.log("componentDidUpdate()")
  }
  handleClick(){
    this.state.shows ? this.setState({shows:false}):this.setState({shows:true})
    console.log(this.state.shows)

  }


  
  render() {
    console.log("render()")
    const styleObject={width:"350px",height:"450px"}
    return (
      <div>
        <nav>
        <h1>{this.state.person.fullName}</h1>
        </nav>
        <section>
        <img src={this.state.person.imgSrc} style={styleObject} alt='Dalida'/><br></br>
         <button onClick={()=>this.handleClick()}>Show more about Dalida </button>
        {this.state.shows ? <h2>{this.state.person.profession}</h2>: null}
        {this.state.shows ? <p>{this.state.person.biography}</p> : null}
        </section>
      </div>

    )
  }
}

export default App
