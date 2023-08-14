import { Component } from "react";
import { Section } from "./Section/Section ";

export class App extends Component {

  state = {
    good: 0,
    bad: 0,
    neutral: 0,
  }

  handleAdd = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      }

    })

  }

  


  render() {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    const procent = (good / (1 + total)) * 100;
    
    return (
      
      <div>

        <Section onIncrement={this.handleAdd}
          onGood={good} onBad={bad} onNeutral={neutral}
          onSum={total} onProcent={procent}
        />

        
      </div>
    )
  };

}