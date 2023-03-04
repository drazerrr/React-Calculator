import './App.css';
import React from 'react';


let op = '';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      expression: '0',
      answer: '0'
    }
    this.display = this.display.bind(this);
    this.calculate = this.calculate.bind(this);
    this.allClear = this.allClear.bind(this);
    this.clear = this.clear.bind(this);
    this.decimal = this.decimal.bind(this);
    this.operator = this.operator.bind(this);
  }
  display(symbol) {
    if(this.state.answer === '0' || this.state.answer.includes('=')){
      this.setState({
        answer: symbol      })
    } else {
      this.setState({
        answer: this.state.answer + symbol
      })
    }
    if(this.state.expression === '0' || this.state.expression === '-' || this.state.expression === '*' || this.state.expression === '/' || this.state.expression === '+' || this.state.answer.includes('=')) {
      this.setState({
        expression: symbol
      })
    }else {
    this.setState({
      expression: this.state.expression + symbol
    })
  }
  op = '';
  }
  calculate() {
    const total = eval(this.state.answer);
    this.setState({
      answer: this.state.answer + " " + '=' + " " +total,
      expression: total
    })
    op = '';
  }
  allClear() {
    this.setState({
      answer: '0',
      expression: "0"
    })
    op = '';
  }
  clear(){
    if (this.state.answer !== '0') {
    this.setState({
      answer: this.state.answer.split("").slice(0, this.state.answer.length - 1).join(""),
      expression: '0'
    })
    if (this.state.answer < 10 || this.state.answer < -10) {
      this.setState({
        answer: '0'
      })
    }
  }
  }
  decimal(e){
    let array = this.state.expression.split(' ');
    let lastArray = array[array.length - 1];
     if(lastArray === '*' || lastArray === '+' || lastArray === '-' || lastArray === '/'){
      this.setState({
        expression: this.state.expression + '0.',
        answer: this.state.answer + '0.'
      })
  }else if(!lastArray.includes(e)){
      this.setState({
        expression: this.state.expression + e,
        answer: this.state.answer + e
        
      })
    }

  }
  operator(event) {
    op = op + event;
    if(this.state.answer === '0'){
      this.setState({
        answer: event,
        expression: event
      })
    } else if (op === '+' || op === '-' || op === '*' || op === '/') {
      this.setState({
        answer: this.state.answer + ' ' + event + ' ',
        expression: event
      })
    } else if (op[1] === '+' || op[1] === '*' || op[1] === '/') {
      this.setState({
        answer: this.state.answer.slice(0, this.state.answer.length - 3) + ' ' + event + ' ',
        expression: event
      })
      op = event;
    } else if (op.length === 2 && op[1] === '-') {
      this.setState({
        answer: this.state.answer + ' ' + event + ' ',
        expression: event
      })
    } else if (op.length === 3) {
      this.setState({
        answer: this.state.answer.slice(0, this.state.answer.length -6) + ' ' + event + ' ',
        expression: event
      })
      op = event;
    }

    if(this.state.answer.includes('=')){
      this.setState({
        answer: this.state.expression + ' ' + event + ' ',
        expression: event
      })
    }
      }
  render() {
    return (
      <div className='container'>
        <div className='grid'>
          <div className='display'>
            <div className='display'>{this.state.answer}</div>
            <div id='display'>{this.state.expression}</div>

          </div>
        <div onClick={this.allClear} id='clear' className='padbutton allclear tomato'>AC</div>
        <div onClick={this.clear} className='padbutton clear tomato'>C</div>
        <div onClick={() =>this.operator("/")} id='divide' className='padbutton divide opcolor'>/</div>
        <div onClick={() =>this.operator("*")} id='multiply' className='padbutton multiply opcolor'>X</div>
        <div onClick={() =>this.display("7")} id='seven' className='padbutton seven bcolor'>7</div>
        <div onClick={() =>this.display("8")} id='eight' className='padbutton eight bcolor'>8</div>
        <div onClick={() =>this.display("9")} id='nine' className='padbutton nine bcolor'>9</div>
        <div onClick={() =>this.operator("-")} id='subtract' className='padbutton subtract opcolor'>-</div>
        <div onClick={() =>this.display("4")} id='four' className='padbutton four bcolor'>4</div>
        <div onClick={() =>this.display("5")} id='five' className='padbutton five bcolor'>5</div>
        <div onClick={() =>this.display("6")} id='six' className='padbutton six bcolor'>6</div>
        <div onClick={() =>this.operator("+")} id='add' className='padbutton add opcolor'>+</div>
        <div onClick={() =>this.display("1")} id='one' className='padbutton one bcolor'>1</div>
        <div onClick={() =>this.display("2")} id='two' className='padbutton two bcolor'>2</div>
        <div onClick={() =>this.display("3")} id='three' className='padbutton three bcolor'>3</div>
        <div onClick={this.calculate} id='equals' className='padbutton equals'>=</div>
        <div onClick={() =>this.display("0")} id='zero' className='padbutton zero bcolor'>0</div>
        <div onClick={() =>this.decimal(".")} id='decimal' className='padbutton decimal bcolor'>.</div>
        </div>

      </div>
    )
  }

}

export default App;
