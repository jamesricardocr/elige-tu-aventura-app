import React, { Component } from "react";
import Button from "./Components/Button";
import List from "./Components/List";
import data from './DB/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountant: 0,
      Button: data[0],
      record: [],
      previous: []
    };
    this.increase = this.increase.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.accountant !== this.state.accountant) {
      this.state.record.push('hola')
      console.log(this.state.record);
    }
  }
  
  increase(e){
    if (this.state.accountant === 4) {
      this.setState({
        accountant: 0,
        Button: data[0]
      })
    }else{
      this.setState({
        accountant: this.state.accountant + 1,
      })

      let cont = this.state.accountant;
      let letter = e.target.value;
  
      if (letter === 'a') {
        let arregloA = data.filter((e) => e.id.includes(letter))
        this.setState({
          Button: arregloA[cont],
        })
        
      } else if(letter === 'b') {
        let arregloB = data.filter((e) => e.id.includes(letter))
        this.setState({
          Button: arregloB[cont],
        })
      }
      
    }
    
   
  }
  
  render() {

    return (
      <div className="main--container" >
        <div className="main--ui">
          <h1 className="main--title">{this.state.Button.historia}</h1>
          <Button increase={this.increase} letter={'a'} option={this.state.Button.opciones.a}/>
          <Button increase={this.increase} letter={'b'} option={this.state.Button.opciones.b}/>
          <List/>
        </div>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
