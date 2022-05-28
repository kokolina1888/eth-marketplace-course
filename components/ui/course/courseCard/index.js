
import Image from 'next/image'
import Link from 'next/link'


export default function CourseCard({course, Footer, disabled }) {
  return (
    
    <div className="overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
        <div className="flex h-full">
        <div className="flex-1 h-full next-image-wrapper">
            <Image
            className={`object-cover ${disabled && "filter grayscale"}`}
            layout='responsive'
            width='200'
            height='230'
            src={course.coverImage}
            alt={course.title} 
            />
        </div>
        <div className="p-8 pb-4 flex-2">
            <div 
            className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            {course.type}
            </div>
            <Link
            href= {`/courses/${course.slug}`}
            >
            <a 
                className="block h-12 mt-1 text-lg font-medium leading-tight text-black hover:underline">
                {course.title} 
            </a>
            </Link>
            
            <p 
            className="mt-2 text-gray-500">
                {course.description.substring(0, 70)}...
            </p>
            {
                Footer && 
                <Footer/>
            }
        </div>
        </div>
    </div>
      
  )
}
