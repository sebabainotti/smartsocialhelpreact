import React, { useState } from 'react';
//import { web3Modal, connectWallet } from '../containers/Web3ModalContainer';
import { Web3Button } from '@web3modal/react'

const Web3ModalConnect = () => {
  /*const [address, setAddress] = useState('');

  const handleConnect = async () => {
    try {
      const { provider, signer } = await connectWallet();
      const userAddress = await signer.getAddress();
      setAddress(userAddress);
    } catch (error) {
      console.error("Error al conectar la wallet:", error);
    }
  };*/

  return (
    <div>
      <Web3Button />
    </div>
  );
};

export default Web3ModalConnect;