import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('0');
  const [prevInput, setPrevInput] = useState('');
  const [operator, setOperator] = useState(null);
  const [reset, setReset] = useState(false);

  const handleClick = (value) => {
    if (value === 'AC') {
      resetCalculator();
    } else if (value === '=') {
      calculate();
    } else if (['+', '-', '*', '/'].includes(value)) {
      handleOperator(value);
    } else if (value === '.') {
      handleDecimal();
    } else {
      handleNumber(value);
    }
  };

  const resetCalculator = () => {
    setInput('0');
    setPrevInput('');
    setOperator(null);
    setReset(false);
  };

  const handleNumber = (value) => {
    if (reset) {
      setInput(value);
      setReset(false);
    } else {
      setInput((prev) => (prev === '0' ? value : prev + value));
    }
  };

  const handleOperator = (value) => {
    if (prevInput === '') {
      setPrevInput(input);
    } else if (operator) {
      calculate();
    }
    setOperator(value);
    setReset(true);
  };

  const calculate = () => {
    if (operator && prevInput !== '') {
      let result;
      const num1 = parseFloat(prevInput);
      const num2 = parseFloat(input);

      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          break;
      }

      setInput(result.toString());
      setPrevInput('');
      setOperator(null);
    }
  };

  const handleDecimal = () => {
    if (!input.includes('.')) {
      setInput((prev) => prev + '.');
    }
  };

  return (
    <div className="calculator">
      <div id="display">{input}</div>
      <div id="buttons">
        <button id="clear" onClick={() => handleClick('AC')}>
          AC
        </button>
        <button id="seven" onClick={() => handleClick('7')}>
          7
        </button>
        <button id="eight" onClick={() => handleClick('8')}>
          8
        </button>
        <button id="nine" onClick={() => handleClick('9')}>
          9
        </button>
        <button id="divide" onClick={() => handleClick('/')}>
          /
        </button>
        <button id="four" onClick={() => handleClick('4')}>
          4
        </button>
        <button id="five" onClick={() => handleClick('5')}>
          5
        </button>
        <button id="six" onClick={() => handleClick('6')}>
          6
        </button>
        <button id="multiply" onClick={() => handleClick('*')}>
          *
        </button>
        <button id="one" onClick={() => handleClick('1')}>
          1
        </button>
        <button id="two" onClick={() => handleClick('2')}>
          2
        </button>
        <button id="three" onClick={() => handleClick('3')}>
          3
        </button>
        <button id="subtract" onClick={() => handleClick('-')}>
          -
        </button>
        <button id="zero" onClick={() => handleClick('0')}>
          0
        </button>
        <button id="decimal" onClick={() => handleClick('.')}>
          .
        </button>
        <button id="equals" onClick={() => handleClick('=')}>
          =
        </button>
        <button id="add" onClick={() => handleClick('+')}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
