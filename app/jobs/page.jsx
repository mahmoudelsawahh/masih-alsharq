import dynamic from 'next/dynamic';

const JobsContainer = dynamic(() => import('../components/Jobs_Page/JobsContainer'),{
  ssr : false
});
const Jobs = () => {
  return (
      <section>
          <JobsContainer/>
      </section>
  )
}

export default Jobs