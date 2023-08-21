import { getAllCategory } from '@/app/lib/DataFetching';
import { Container, Grid } from '@mui/material'
import dynamic from 'next/dynamic';
const ShowJobs = dynamic(() => import('./ShowJobs'),{
  ssr : false
});
export default async function Jobs_card ({filterData}) {
  const data = await getAllCategory(filterData);
  return (
    <>
      <Container maxWidth="lg">
            <Grid container spacing={3}>
                   <ShowJobs data={data.data}/>
            </Grid>
      </Container>
    </>
  )
}


