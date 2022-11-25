import React from 'react'
import { useEffect } from 'react'

const Clock = () => {
  let [currentTime, setCurrentTime] = React.useState(new Date().toLocaleTimeString())
  let [currentDate, setCurrentDate] = React.useState(new Date().toLocaleDateString())
  useEffect(()=>{
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
      setCurrentDate(new Date().toLocaleDateString())
    }, 1000);
  }, [])
  return <>
  <div className="container mt-5">
    <div className="row">
      <div className="col-4">
        <div className="card">
          <div className="card-header bg-success text-white">
            <h4>{currentTime}</h4>
          </div>
          <div className="card-body bg-danger text-white">
            <h4>{currentDate}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
}

export default Clock
