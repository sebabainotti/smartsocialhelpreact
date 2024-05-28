/*import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: "53ff5ae3b0a14185acf69ef68f630092" // Infura ID para usar WalletConnect
        }
    },
    // Puedes añadir más proveedores aquí
};

export const web3Modal = new Web3Modal({
    cacheProvider: false, // opción para recordar la última conexión
    providerOptions // opciones de los proveedores
});

export const connectWallet = async () => {
    const instance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
    return { provider, signer };
};*/