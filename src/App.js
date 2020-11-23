import "./App.css";
import { Component } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  addToInput = (val) => {
    this.setState({ input: this.state.input == '0' && val == '0' ?  '0' : this.state.input + val });
  };
  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input} id="display"></Input>
          <div className="row">
            <Button handleClick={this.addToInput} id="seven">7</Button>
            <Button handleClick={this.addToInput} id="eight">8</Button>
            <Button handleClick={this.addToInput} id="nine">9</Button>
            <Button handleClick={this.addToInput} id="divide">/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput} id="four">4</Button>
            <Button handleClick={this.addToInput} id="five">5</Button>
            <Button handleClick={this.addToInput} id="six">6</Button>
            <Button handleClick={this.addToInput} id="multiply">*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput} id="one">1</Button>
            <Button handleClick={this.addToInput} id="two">2</Button>
            <Button handleClick={this.addToInput} id="three">3</Button>
            <Button handleClick={this.addToInput} id="add">+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput} id="decimal" >.</Button>
            <Button handleClick={this.addToInput} id="zero">0</Button>
            <Button handleClick={this.handleEqual} id="equals">
              =
            </Button>
            <Button handleClick={this.addToInput} id="subtract">-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })} id="clear">
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
