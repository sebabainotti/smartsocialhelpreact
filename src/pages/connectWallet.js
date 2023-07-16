import React, { useState } from 'react';
import Web3 from 'web3';

const ConnectWalletPage = () => {
    const [web3, setWeb3] = useState(null);
    const [inputValue, setInputValue] = useState('50');
    const [walletValue, setWalletValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const donar = async () => {
        try {
            let web3Instance = web3;
            if (web3Instance == null) {
                alert('Conecte su billetera virtual.');
                return;
            }
            let contractInstance = connectToSepolia(web3Instance);
            let valueEthInUsd = parseInt(await contractInstance.methods.getConversionRate(1).call());
            const amountETH = inputValue / valueEthInUsd;
            const weiAmount = web3Instance.utils.toWei(amountETH.toString(), 'ether');
            const accounts = await web3Instance.eth.getAccounts();
            var result = await contractInstance.methods.fund().send({
                from: accounts[0],
                value: weiAmount,
            });
            console.log('Resultado de la ejecución:', result);
        }
        catch (error) {
            console.log('Error al ejecutar la función del contrato:', error);
        }
    };
    const connectToSepolia = (web3Instance) => {
        try {
            const contractAddress = '0x3b2aF9C1749E7F6375BdAFFEa22e2E2973c19ffE';
            const contractABI = require('../../src/contracts/SmartSocialHelp_1/abi.json');
            const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
            setContract(contractInstance);
            return contractInstance;
        } catch (error) {
            console.error('Error al conectarse a Sepolia:', error);
        }
    };
    const connectWallet = () => {
        try {
            var isConnected = true;
            var web3;
            if (typeof window.ethereum !== 'undefined') {
                // Conexión a la billetera MetaMask
                web3 = new Web3(window.ethereum);
                window.ethereum.enable();
                console.log('Conectado a MetaMask:', web3);
            } else if (typeof window.BinanceChain !== 'undefined') {
                // Conexión a la billetera Binance Wallet
                web3 = new Web3(window.BinanceChain);
                console.log('Conectado a Binance Wallet:', web3);
            } else if (typeof window.trust !== 'undefined') {
                // Conexión a la billetera Trust Wallet
                web3 = new Web3(window.trust);
                console.log('Conectado a Trust Wallet:', web3);
            } else if (typeof window.coinbase !== 'undefined') {
                // Conexión a la billetera Coinbase Wallet
                web3 = new Web3(window.coinbase);
                console.log('Conectado a Coinbase Wallet:', web3);
            } else {
                isConnected = false;
                alert('No se detectó ninguna billetera compatible. Asegúrate de tener instalada una de las siguientes billeteras: MetaMask, Binance Wallet, Trust Wallet, Coinbase Wallet.')
                console.log('No se detectó ninguna billetera compatible. Asegúrate de tener instalada una de las siguientes billeteras: MetaMask, Binance Wallet, Trust Wallet, Coinbase Wallet.');
            }
            if (isConnected) {
                const accounts = web3.eth.getAccounts();
                accounts.then(function (res) {
                    setWalletValue(res);
                })
                setWeb3(web3);
            }
            return web3;
        } catch (error) {
            console.error('Error al conectar la billetera:', error);
            alert('Error al conectar la billetera. Comunicate con nosotros asi te ayudamos a resolverlo!')
        }
    };

    return (
        <div className="col-six donation-box">
            <p>
                <label>
                    1. Primero conecta tu wallet a tu billetera preferida.
                </label>
                <a className="button button-primary btn-donar" onClick={connectWallet}>CONECTAR</a>
                <label id="wallet">{walletValue}</label>
            </p>
            <p>
                <label>
                    2. Ahora puedes donar lo que quieras y puedas(en USD). El valor en USD que dones se convertira automaticamente a ETH de acuerdo al precio actual.
                </label>
                <input type="number" className="full-width" value={inputValue} onChange={handleInputChange} />
                <button onClick={donar}>DONAR</button>
            </p>
        </div>
    );
};

export default ConnectWalletPage;
