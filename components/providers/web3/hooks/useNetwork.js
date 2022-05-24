import useSWR from "swr";
import { useEffect } from "react";

const NETWORKS = {
    1: 'Ethereum Main Network',
    3: 'Ropstein Test Network',
    4: 'Rinkeby Test Netqork',
    5: 'Goerli Test Netqork',
    42: 'Kovant Test Netqork',
    56: 'Binance Smart Chain',
    1337: 'Ganache'
}

export const handler = (web3, provider) => () => {
    const {mutate, ...rest } = useSWR(() => 
        web3 ? 'web3/network' : null,
        async () => {
            const chainId = await web3.eth.getChainId();
            return NETWORKS[chainId];
        }
    )
    useEffect(()=>{
        provider &&
        provider.on('chainChanged', chainId => 
            mutate(NETWORKS[parseInt(chainId, 16)]))
    }, [web3]);
    return {
        network: {
            mutate,
            ...rest 
        }
    }
}