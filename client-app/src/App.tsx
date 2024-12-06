import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
    .then(Response => {
      console.log(Response)
      setActivities(Response.data)
    })
  }, [])

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Reactivities</h1>
      <ul>
        {activities.map((activity: any) => (
          <li
            key={activity.id}
            className="text-lg text-gray-600 mb-2 transition-colors duration-300 hover:text-blue-500 hover:cursor-pointer"
          >
            {activity.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App