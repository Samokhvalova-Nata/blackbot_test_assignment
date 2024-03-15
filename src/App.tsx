import React, { useEffect, useState } from 'react';
import './App.styled.jsx';
import { Container, FieldWrap, Image, ImageText, ImageWrap, Input, InputWrap, Label, Result, ResultText, ResultWrap, Switcher, SwitcherInput, SwitcherLabel, SwitcherText, Title, Wrapper } from './App.styled.jsx';


const App: React.FC = () => {
  const [ethAmount, setEthAmount ] = useState<number | ''>('');
  const [action, setAction] = useState<'sell' | 'buy'>('sell');
  const [currentEthPrice, setCurrentEthPrice] = useState<number | null>(null);
  const [usdtAmount, setUsdtAmount ] = useState<number | null>(null);

  useEffect(() => {
    if (ethAmount !== '') {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
    console.log('ws on');

    ws.onmessage = event => {
      const parsedData  = JSON.parse(event.data);
      const price = parseFloat(parsedData.p);
      setCurrentEthPrice(price);
  };
  }}, [ethAmount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value !== '') {
      const newEthAmount = parseFloat(e.target.value);
      setEthAmount(newEthAmount);
    } else { setEthAmount('') }
  };

  const handleRadioInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAction(value as 'buy' | 'sell');
  };

  useEffect(() => {
    if (!ethAmount || !currentEthPrice) {
      setUsdtAmount(null);
      return
    };

    if (action === 'buy') {
      setUsdtAmount(parseFloat((ethAmount * currentEthPrice).toFixed(8)));
    } else if (action === 'sell') {
      setUsdtAmount( parseFloat((ethAmount / currentEthPrice).toFixed(8)));
    }
  }, [action, currentEthPrice, ethAmount]);

  return (
  <Container>
    <Title>ETH Buy/Sell Calculator</Title>
    <Wrapper>
      <FieldWrap>
        <Label htmlFor='input-amount'>Enter amount</Label>
        <InputWrap>
          <Input onChange={handleInputChange} value={ethAmount} id='input-amount' 
          type='number' min="0"
          />
          <ImageWrap>
            <Image alt="Ethereum logo" loading="lazy" width="24" height="24" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"/>
            <ImageText>ETH</ImageText>
          </ImageWrap>
        </InputWrap>
      </FieldWrap>
      <Switcher>
        <SwitcherLabel>
          <SwitcherInput type='radio' name='action' value='sell'  checked={action === "sell"}
          onChange={handleRadioInputChange}/>
          <div>
            <SwitcherText>Sell</SwitcherText>
          </div>
        </SwitcherLabel>
        <SwitcherLabel>
          <SwitcherInput type='radio' name='action' value='buy' checked={action === "buy"}
          onChange={handleRadioInputChange}/>
          <div>
            <SwitcherText>Buy</SwitcherText>
          </div>
        </SwitcherLabel>
      </Switcher>
    </Wrapper>
    <FieldWrap>
      <ResultText>{action === 'sell' ? 'You will receive' : 'You have to pay' }</ResultText>
      <ResultWrap>
        <Result>{usdtAmount}</Result>
        <ImageWrap>
          <Image alt="Ethereum logo" loading="lazy" width="24" height="24" src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"/>
          <ImageText>USDT</ImageText>
        </ImageWrap>
      </ResultWrap>
    </FieldWrap>
    </Container>
  );
};

export default App;
