import React, { Component } from "react";
import Button from "./Components/Button";
import List from "./Components/List";
import Previus from "./Components/Previous"; 
import data from "./DB/data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountant: 0,
      accountantUI: data[0],
      record: [],
      previous: '',
    };
    this.increase = this.increase.bind(this);
  }



  componentDidUpdate(prevProps, prevState) {
    if (prevState.accountant !== this.state.accountant) {
      this.state.record.push(this.state.previous);
    }
  }


  increase(e) {
    
    let cont = this.state.accountant;
    let letter = e.target.value;

    if (this.state.accountant === 4) {
      alert('Fin de la historia, dale aceptar para volver a continuar')
      this.setState({
        accountant: 0,
        accountantUI: data[0],
        record: [],
        previous: '',
      });
    } else {
      this.setState({
        accountant: this.state.accountant + 1,
        previous: letter,
      });

      if (letter === "a") {
        let arregloA = data.filter((e) => e.id.includes(letter));
        this.setState({
          accountantUI: arregloA[cont],
        });
        console.log(arregloA);
        console.log(cont);
      } else if (letter === "b") {
        let arregloB = data.filter((e) => e.id.includes(letter));
        this.setState({
          accountantUI: arregloB[cont],
        });
      }
    }
  }

  render() {
    return (
      <div className="main--container">
        <div className="main--ui">
          <h1 className="main--title">{this.state.accountantUI.historia}</h1>
          <Button
            increase={this.increase}
            letter={"a"}
            option={this.state.accountantUI.opciones.a}
          />
          <Button
            increase={this.increase}
            letter={"b"}
            option={this.state.accountantUI.opciones.b}
          />
          <Previus previous={this.state.previous}/>
          <List record={this.state.record}/>

        </div>
      </div>
    );
  }
}

export default App;
