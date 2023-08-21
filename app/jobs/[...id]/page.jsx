import { getClient } from '@/app/lib/DataFetching';
import dynamic from 'next/dynamic';

const JobDetails_Page = dynamic(() => import('@/app/components/Jobs_Page/JobDetails_Page/JobDetails_Page'),{
  ssr : false
});
const Footer = dynamic(() => import('@/app/components/Footer/Footer'),{
  ssr : false
});


export default async function JobDetails() {
  const data = await getClient()
  return (
  <>
     <main>
     <section>
        <JobDetails_Page data={data}/>
    </section>
   </main>
  </>
  )
}
