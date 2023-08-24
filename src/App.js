import Input from './components/Input';
import Botton from './components/Botton';
import {Container,Content,Row} from './styles'

import { useState } from 'react';

const App = () =>{
  const[currentNumber, setCurrentNumber] = useState(0);
  const[firstNumber, setFirstNumber] = useState(0);
  const[operation, setOperation] = useState(0);

  const handleOnClear = () =>{
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+');
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  const handleMultNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*');
    }else{
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleDivNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/');
    }else{
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-');
    }else{
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0' ){
     switch(operation){
      case '+':
        handleSumNumber();
        break;
      case '-':
        handleMinusNumber();
        break;
      case '*':
        handleMultNumber();
        break;
      case '/':
        handleDivNumber();
        break;
      default:
        break;
     }
  }
  }
  return(
    <Container>
      <Content>
        <Input value = {currentNumber}/>
        <Row>
        <Botton label="Limpar" onClick={()=> handleOnClear()}/>
        </Row>
        <Row>
          <Botton label="7" onClick={() => handleAddNumber('7')}  />
          <Botton label="8" onClick={() => handleAddNumber('8')}  />
          <Botton label="9" onClick={() => handleAddNumber('9')}  />
          <Botton label="/" onClick={() => handleDivNumber()}/>
        </Row>
        <Row>
          <Botton label="4" onClick={() => handleAddNumber('4')}  />
          <Botton label="5" onClick={() => handleAddNumber('5')}  />
          <Botton label="6" onClick={() => handleAddNumber('6')}  />
          <Botton label="*" onClick={() => handleMultNumber()}/>
        </Row>
        <Row>
          <Botton label="1" onClick={() => handleAddNumber('1')}  />
          <Botton label="2" onClick={() => handleAddNumber('2')}  />
          <Botton label="3" onClick={() => handleAddNumber('3')}  />
          <Botton label="-" onClick={() => handleMinusNumber()}/>
        </Row>
        <Row>
          <Botton label="0" onClick={() => handleAddNumber('0')}  />
          <Botton label="." onClick={() => handleAddNumber('.')}/>
          <Botton label="+" onClick={() => handleSumNumber()}/>
          <Botton label="=" onClick={() => handleEquals() } />
        </Row>
      </Content>
    </Container>
  );
}
export default App