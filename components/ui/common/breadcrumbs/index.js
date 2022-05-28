


export default function Breadcrumbs() {

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
        <li className="pr-4 font-medium text-gray-500 hover:text-gray">
          <a href="#">Buy</a>
        </li>
        <li className="px-4 font-medium text-gray-500 hover:text-gray">
          <a href="#">My Courses</a>
        </li>
        <li className="px-4 font-medium text-gray-500 hover:text-gray">
          <a href="#">Manage Courses</a>
        </li>
      </ol>
    </nav>
  )
}
