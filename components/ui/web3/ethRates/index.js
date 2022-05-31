import { useEthPrice, COURSE_PRICE } from '@components/hooks/web3/useEthPrice'
import { Loader } from "@components/ui/common"
import Image from "next/image"

export default function EthRates() {
  const { eth } = useEthPrice()

  return (
    <div className="grid grid-cols-4">
      <div className="flex items-stretch flex-1 text-center">
        <div className="p-10 border rounded-md drop-shadow">
          <div className="flex items-center">
            { eth.data ?
              <>
                <Image
                  layout="fixed"
                  height="35"
                  width="35"
                  src="/small-eth.webp"
                />
                <span className="text-2xl font-bold">
                  = {eth.data}$
                </span>
              </> :
              <div className="flex justify-center w-full">
                <Loader size="md" />
              </div>
            }
          </div>
          <p className="text-xl text-gray-500">Current eth Price</p>
        </div>
      </div>
      <div className="flex items-stretch flex-1 text-center">
        <div className="p-10 border rounded-md drop-shadow">
          <div className="flex items-center">
            { eth.data ?
              <>
                <span className="text-2xl font-bold">
                  {eth.perItem}
                </span>
                <Image
                  layout="fixed"
                  height="35"
                  width="35"
                  src="/small-eth.webp"
                />
                <span className="text-2xl font-bold">
                  = {COURSE_PRICE}$
                </span>
              </> :
              <div className="flex justify-center w-full">
                <Loader size="md" />
              </div>
            }
          </div>
          <p className="text-xl text-gray-500">Price per course</p>
        </div>
      </div>
    </div>
  )
}