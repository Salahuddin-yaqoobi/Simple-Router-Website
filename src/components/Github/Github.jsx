import React, { useEffect ,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setdata] = useState([])

    // useEffect(() => {
    //   fetch('http://api.github.com/users/Salahuddin-yaqoobi')
    //   .then(response => response.json())
    //   .then(data => {
        //   console.log(data);
        //   setdata(data)
    //   })
    // }, [])

                     //2
    const data = useLoaderData()
    //now data has all the value of the object

  return (
    <div className='bg-gray-600 m-4 text-3xl text-white p-4'>
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="Git picture" />
    </div>
  )
}

export default Github

//there is another method to call the api and it is better because it start to fetch data even when that field would just hover not clicked so it give more fast fetching of the data
//everything which is participating is shown in 2
export const gitInfoLoader = async () => {
    const response = await fetch('http://api.github.com/users/Salahuddin-yaqoobi')

    //i can simply return the response in json form
    return response.json()
}
