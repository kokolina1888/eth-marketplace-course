import { Modal } from "@components/ui/common";
import {
  CourseHero,
  Curriculum,
  Keypoints
} from "@components/ui/course";
import { getAllCourses } from "../../content/courses/fetcher";
import { BaseLayout } from "@components/ui/layout";
import { useOwnedCourse } from "@components/hooks/web3";
import { useAccount } from "@components/hooks/web3";
import { Message} from '@components/ui/common';

export default function Course({course}) {
  const { account } = useAccount()
  const { ownedCourse } = useOwnedCourse(course, account.data)
  const courseState = ownedCourse.data?.state; 
  return (
    <>
      <div className="py-4">
        <CourseHero 
            hasOwner={ !!ownedCourse.data }
            title={course.title}
            description={course.description}
            image={course.coverImage}
        />
      </div>
      <Keypoints 
        points={course.wsl} />
      { course.state &&
        <div className="max-w-5xl mx-auto">
      {
        courseState === 'Purchased' && 
       
          <Message>
            Course is purchased and waiting for activation. Process can take up to 24 houts.
          </Message>
        
      }
      {
        courseState === 'Activated' && 
       
          <Message>
            Course is activated
          </Message>
        
      }
      {
        courseState === 'Deactivated' && 
       
          <Message>
            Course is deactivated
          </Message>
        
      }
      </div> }
      <Curriculum 
        locked={true}
      />
      <Modal />
    </>
  )
}

export function getStaticPaths() {
    const { data } = getAllCourses();

    return {
        paths: data.map(c => ({
            params: {
                slug: c.slug
            }
        })),
        fallback: false
    }
}export function getStaticProps({params}) {
    const { data } = getAllCourses();
    const course = data.filter( c => c.slug === params.slug)[0]
    return {
      props: {
        course: course
      }
    }
  } 

Course.Layout = BaseLayout
