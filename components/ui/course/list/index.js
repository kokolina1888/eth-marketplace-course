
export default function List({courses, children }) {
  return (
    <section className="grid gap-4 mb-5 md:grid-cols-1 lg:grid-cols-2">
      { courses.map(course => children(course) ) }
    </section>
  )
}
