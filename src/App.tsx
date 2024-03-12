import React, { useEffect, useState } from 'react';
import './App.css';


const App: React.FC = () => {
  const [ethAmount, setEthAmount ] = useState<number | ''>('');
  const [action, setAction] = useState<'sell' | 'buy'>('sell');
  const [currentEthPrice, setCurrentEthPrice] = useState<number | null>(null);
  const [usdtAmount, setUsdtAmount ] = useState<number | null>(null);
  const [isEthAmountEntered, setIsEthAmountEntered] = useState<boolean>(false);
  const [lastEthAmount, setLastEthAmount] = useState<number | null>(null);
  

  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');

    ws.onmessage = event => {
      const parsedData  = JSON.parse(event.data);
      const price = parseFloat(parsedData.p);
      setCurrentEthPrice(price);
  };

  const handleClose = () => {
    ws.close();
  };

  return handleClose;
  }, [ethAmount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEthAmount = parseFloat(e.target.value);
    setEthAmount(newEthAmount);

    // const { value } = e.target;
    // if (value) {
    //   setEthAmount(Number(value))
    // } else {
    //   alert("Enter ETH amount")
    // }
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
      setUsdtAmount(ethAmount / currentEthPrice);
    }
  }, [action, currentEthPrice, ethAmount]);

  return (<>
    <div>
      <h1>Калькулятор купівлі/продажу ETH</h1>

      <div>
        <label>ETH amount
          <input onChange={handleInputChange} value={ethAmount} type='number'/>
        </label>
      </div>

      <div>
      <label>
        <input type='radio' name='action' value='sell' checked
        onChange={handleRadioInputChange}/>
        <div>
          <p>Sell</p>
        </div>
      </label>
      <label>
        <input type='radio' name='action' value='buy'
        onChange={handleRadioInputChange}/>
        <div>
          <p>Buy</p>
        </div>
      </label>
      </div>

    </div>
    <div>
      <p>{action === 'sell' ? 'You will receive:' : 'You have to pay' }</p>
      <div>
        {usdtAmount}
      </div>
    </div>
    </>
  );
};

export default App;
