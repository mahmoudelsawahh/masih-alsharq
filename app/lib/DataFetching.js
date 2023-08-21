 import dynamic from "next/dynamic";
import { baseUrl } from "./baseUrl"
const Loading = dynamic(() => import('@/app/loading'),{
  ssr : false
});
export async function getCategoryData() {
    const res = await fetch(`${baseUrl}/rest/tables.job/getJobs`,{
      cache : 'no-store',
      headers : {
        "Access-Control-Allow-Headers" : "X-Custom-Header, Upgrade-Insecure-Requests"
      },
    })
    // Recommendation: handle errors 
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return <Loading/>
    }
   
    return res.json()
  }


  export async function getNationalities() {
    const res = await fetch(`${baseUrl}/rest/tables.client/getNationalities`,{
      cache : 'no-store',
      headers : {
        "Access-Control-Allow-Headers" : "X-Custom-Header, Upgrade-Insecure-Requests"
      },
    })
    // Recommendation: handle errors 
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return <Loading/>
    }
   
    return res.json()
  }


  export async function getAllCategory(param) {
    const res = await fetch(`${baseUrl}/rest/tables.client/getclientsPojoo`,{
      method : 'POST',
      body : JSON.stringify(
        {
          "page":0,
          "jobId":param.Job,
          "nationality":param.Nationality,
          "religion":param.Religion
      }
        ),
        headers : {
          'Content-Type': 'application/json',
        },
        cache : 'no-store',
  })
  
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return <Loading/>
    }
   
    return res.json()
  }

  export async function getClient(param) {
    const res = await fetch(`${baseUrl}/rest/tables.client/getclient`,{
      method : 'POST',
      body : JSON.stringify(
        {
          "id" : 1
        }
        ),
        headers : {
          'Content-Type': 'application/json',
        },
        cache : 'no-store',
  })
  
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return <Loading/>
    }
   
    return res.json()
  }