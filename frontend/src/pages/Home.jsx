import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'


const Home = () => {

    const [loading, setLoading] = useState(false);

useEffect(()=>{

    setLoading(true);
    axios.get('http://localhost:5555/gym')
    .then((response)=>{

        setLoading(false);
        console.log(response);
    })
    .catch((error)=>{
        setLoading(false);
    })
},[])

  return (
    <div>
    {loading ? <Spinner />: "Hi"}

    </div>
  )
}

export default Home