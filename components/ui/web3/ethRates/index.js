export default function EthRates({eth, ethPerItem}) {

  return (
    <div className="grid grid-cols-4 mb-5">
      <div className="flex items-stretch flex-1 text-center">
        <div className="p-10 border rounded-md drop-shadow">
          <div>
            <span className="text-2xl font-bold">ETH = {eth}$</span>
          </div>
          <p className="text-xl text-gray-500">Current eth Price</p>
        </div>
      </div>
      <div className="flex items-stretch flex-1 text-center">
        <div className="p-10 border rounded-md drop-shadow">
          <div>
            <span className="text-2xl font-bold">{ethPerItem} = 15$</span>
          </div>
          <p className="text-xl text-gray-500">Price per course</p>
        </div>
      </div>
    </div>
  )
}
