import Map from './components/Map'
import React, {useState,useEffect} from 'react'
import Loader from './components/Loaders'


function App() {


    const [loading, setLoading] = useState(false)
    const [eventData, setEventData] = useState([])

    useEffect(()=> {

        const fetchData = async ()=> {
            setLoading(true)
            const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
            const {events} = await res.json()
            setEventData(events)
            console.log(events);
            setLoading(false)

        }

        fetchData()
    },[])




  return (
    <div className="App">
      {!loading ? <Map eventData={eventData}/> : <Loader/> }
    </div>
  );
}

export default App;
