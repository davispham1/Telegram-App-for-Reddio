import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import BsTabs from './components/tabs';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .catch(err => console.log("Error loading Bootstrap", err));
  }, []);
  return (
    <>
      <div className='Walletbutton'>
        <ConnectButton
          accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }}
        />
      </div>
      <BsTabs />
    </>
  );
};

export default Home;
