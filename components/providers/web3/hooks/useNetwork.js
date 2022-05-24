export const handler = (web3, provider) => () => {
    return {
        network: {
            data:  'testing network'
        }
    }
}