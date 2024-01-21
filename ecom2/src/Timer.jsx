import React, { useEffect, useState } from 'react'
import "./Timer.css"
export const Timer = () => {
  const [time, setTime] = useState(400000000)

  useEffect(()=>{
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormatedTime = (milliseconds)=>{
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minut = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minut / 60));
    let days = parseInt(Math.floor(total_hours / 24));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minut % 60);
    let hours = parseInt(total_hours % 24);

    return (
        <div className='timer'>{`${days} : ${hours} : ${minutes} : ${seconds}`}</div>
    );
  };

  
  return (
    <>
        {getFormatedTime(time)}
    </>
  )
}
