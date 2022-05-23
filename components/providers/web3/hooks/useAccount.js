import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses = { 
    '0xcd9b83001240ee15d072490a52030d1a0f24f06efa0f14788ce5a5f1c95c5b1a': true
};
export const handler = (web3, provider) => () => {

  const { data, mutate, ...rest } = useSWR(() =>
    web3 ? "web3/accounts" : null,
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  )

  useEffect(() => {
    provider &&
    provider.on("accountsChanged",
      accounts => mutate(accounts[0] ?? null)
    )
  }, [provider])
if(data ){
    console.log(web3.utils.keccak256(data) )
}
    return { account: {
        isAdmin:  ( data && adminAddresses[web3.utils.keccak256(data)]) ?? false,  
        data, 
        mutate, 
        ...rest
        }
    }
}