import React, { useEffect, useState } from 'react';
import './App.styled.jsx';
import { Container, FieldWrap, Image, ImageText, ImageWrap, Input, InputWrap, Label, Result, ResultText, Switcher, SwitcherInput, SwitcherLabel, SwitcherText, Title, Wrapper } from './App.styled.jsx';


const App: React.FC = () => {
  const [ethAmount, setEthAmount ] = useState<number | ''>('');
  const [action, setAction] = useState<'sell' | 'buy'>('sell');
  const [currentEthPrice, setCurrentEthPrice] = useState<number | null>(null);
  const [usdtAmount, setUsdtAmount ] = useState<number | null>(null);

  useEffect(() => {
    if(!ethAmount) return;
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
    // console.log('ws on');
    ws.onmessage = event => {
      const parsedData  = JSON.parse(event.data);
      const price = parseFloat(parsedData.p);
      setCurrentEthPrice(price);
  };

  return () => {
    ws.close();
  };

  }, [ethAmount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEthAmount = parseFloat(e.target.value);
    setEthAmount(newEthAmount);
  };

  const handleRadioInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { value } = e.target;
  setAction(value as 'buy' | 'sell');
  //   if (value === "buy") {
  //     setAction('buy');
  // } else {
  //     setAction('sell');
  // }
  };

  useEffect(() => {
    if (!ethAmount || !currentEthPrice) return;

    if (action === 'buy') {
      setUsdtAmount(ethAmount * currentEthPrice);
    } else if (action === 'sell') {
      setUsdtAmount( parseFloat((ethAmount / currentEthPrice).toFixed(5)));
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
          // type='number' min="0"
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
      <InputWrap>
      <Result>
        {usdtAmount}
      </Result>
      <ImageWrap>
          <Image alt="Ethereum logo" loading="lazy" width="24" height="24" src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"/>
          <ImageText>USDT</ImageText>
          </ImageWrap>
      </InputWrap>
      
    </FieldWrap>
    </Container>
  );
};

export default App;
