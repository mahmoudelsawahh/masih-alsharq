import { getCategoryData, getNationalities } from "@/app/lib/DataFetching"
import dynamic from "next/dynamic";
const Jobs_Page = dynamic(() => import('../Jobs_Page/Jobs_Page'),{
    ssr : false
  });
const JobsContainer = async() => {
    const data = await getCategoryData()
    const Nationalities = await getNationalities()
  return (
    <>
        <Jobs_Page categoriesData={data.data} Nationalities={Nationalities.data}/>
    </>
  )
}

export default JobsContainer