import Image from 'next/image'
import { useEthPrice } from '@components/hooks/web3/useEthPrice'

export default function EthRates() {
  const { eth } = useEthPrice();
  return (
    <div className="grid grid-cols-4">
      <div className="flex items-stretch flex-1 text-center">
        <div className="p-10 border rounded-md drop-shadow">
          <div className='flex item-center'>
            <Image 
              layout='fixed'
              height='35'
              width='35'
              src='/small-eth.webp'/>
            <span className="text-2xl font-bold">  = {eth.data}$</span>
          </div>
          <p className="text-xl text-gray-500">Current eth Price</p>
        </div>
      </div>
      <div className="flex items-stretch flex-1 text-center">
        <div className="p-10 border rounded-md drop-shadow">
          <div className='flex item-center'> 
            <span className="text-2xl font-bold">
              {eth.perItem} </span>
              <Image 
              layout='fixed'
              height='35'
              width='35'
              src='/small-eth.webp'/>
              <span className='text-2xl font-bold'>
                = 15$
              </span>
          </div>
          <p className="text-xl text-gray-500">Price per course</p>
        </div>
      </div>
    </div>
  )
}
