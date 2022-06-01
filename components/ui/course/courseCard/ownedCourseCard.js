export default function OwnedCourseCard({children, course}) {

  return (
    <div className="mb-3 overflow-hidden bg-white border shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          {course.title}
        </h3>
        <p className="max-w-2xl mt-1 text-sm text-gray-500">
        {course.price} ETH
        </p>
      </div>

      <div className="border-t border-gray-200">
        <dl>
          <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-9 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Course ID
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {course.ownedCourseId}
            </dd>
          </div>
          <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-9 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Proof
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {course.proof}
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