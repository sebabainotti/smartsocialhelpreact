import React, { useState } from 'react';
import Web3 from 'web3';
import BigNumber from "bignumber.js";

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
                alert('Connect your wallet.');
                return;
            }
            let contractInstance = connectToSepolia(web3Instance);
            let valueEthInUsd = parseInt(await contractInstance.methods.getConversionRate(1).call());
            const amountETH = new BigNumber(inputValue / valueEthInUsd);
            let weiAmount = (amountETH.multipliedBy(new BigNumber(1000000000000000000)));
            const accounts = await web3Instance.eth.getAccounts();
            var result = await contractInstance.methods.fund().send({
                from: accounts[0],
                value: parseInt(weiAmount),
            }).then(transactionHash => {
                console.log('Transacción enviada. Hash:', transactionHash);
                // Esperar a que la transacción se confirme
                waitForTransactionConfirmation(web3Instance, transactionHash);
            });
            console.log('Resultado de la ejecución:', result);
        }
        catch (error) {
            console.log('Error al ejecutar la función del contrato:', error);
        }
    };

    async function waitForTransactionConfirmation(web3Instance, transactionHash) {
        while (true) {
            try {
                const receipt = await web3Instance.eth.getTransactionReceipt(transactionHash.transactionHash);
                if (receipt && receipt.blockNumber) {
                    console.log('Transacción confirmada en el bloque:', receipt.blockNumber);
                    break;
                } else {
                    await delay(1000);
                }
            } catch (error) {
                console.error('Error al obtener el recibo de la transacción:', error);
                break;
            }
        }
    }

    // Función de utilidad para esperar un tiempo determinado
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const connectToSepolia = (web3Instance) => {
        try {
            const contractAddress = '0xf865853847a571c12a8e956c9f2ce28e2487a563';
            const contractABI = require('../../src/contracts/SmartSocialHelp_1/abi.json');
            const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
            return contractInstance;
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const connectWallet = () => {
        try {
            var isConnected = true;
            var web3;
            if (typeof window.ethereum !== 'undefined') {
                web3 = new Web3(window.ethereum);
                window.ethereum.enable();
            } else if (typeof window.BinanceChain !== 'undefined') {
                web3 = new Web3(window.BinanceChain);
            } else if (typeof window.trust !== 'undefined') {
                web3 = new Web3(window.trust);
            } else if (typeof window.coinbase !== 'undefined') {
                web3 = new Web3(window.coinbase);
            } else {
                isConnected = false;
                alert('No compatible wallet was detected. Make sure you have one of the following wallets installed: MetaMask, Binance Wallet, Trust Wallet, Coinbase Wallet.')
            }
            if (isConnected) {
                const accounts = web3.eth.getAccounts();
                accounts.then(function (res) {
                    setWalletValue(res[0]);
                })
                setWeb3(web3);
            }
            return web3;
        } catch (error) {
            console.error('Failed to connect wallet:', error);
            alert('Ups! Failed to connect wallet.')
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
