import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import BsTabs from './components/tabs';



const Home: NextPage = () => {
  return (
    <div>
      <div className='Walletbutton'>
        <ConnectButton
          accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }}
        />
      </div>
      <BsTabs />
    </div>
  );
};

export default Home;
