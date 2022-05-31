export default function OwnedCourseCard({children}) {

  return (
    <div className="mb-3 overflow-hidden bg-white border shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Next JS & Typescript with Shopify Integration - Full Guide
        </h3>
        <p className="max-w-2xl mt-1 text-sm text-gray-500">
          0.0065 ETH
        </p>
      </div>

      <div className="border-t border-gray-200">
        <dl>
          <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Order ID
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              0x9a4e56614591da8c1ad30fe04ac672111a7f20faa92f7c484568b0213bfbf405
            </dd>
          </div>
          <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Proof
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              0x95f147a2c0ced33a2d49b7ce780bc2a9cf404593c64658b336ab2eb7d9136d90
            </dd>
          </div>
          <div className="px-4 py-5 bg-white sm:px-6">
            {children}
          </div>
        </dl>
      </div>
    </div>
  )
}