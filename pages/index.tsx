import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import BsTabs from './components/tabs';
import { useEffect } from 'react';
import { initReddio } from '../config/config'
import Balance, { BalanceNumber } from './components/Balance';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: NextPage = () => {
  useEffect(() => {
    initReddio()
    // @ts-ignore
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .catch(err => console.log("Error with Bootstrap", err));
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-web-app.js';
    script.async = true;
    script.onload = () => {
      const tele = window.Telegram;
      if (tele && tele.WebApp) {
        tele.WebApp.ready();
      } else {
        console.error('Telegram.WebApp is not defined');
      }
    };
  }, []);
  return (
    <>
      <header className='Walletbutton'>
        <ConnectButton
          accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }}  
        />
      </header>
      <div className="Main-container">
      <span className='balance-text'>Wallet Balance</span>
      <div className="balance">
        <BalanceNumber />
        </div>
      
      <BsTabs />
      </div>
    </>
  );
};

export default Home;
