import React from "react";
// import { Doughnut } from 'react-chartjs-2';


function Card({weather, weather5d}) {
  console.log(weather)
  console.log(weather5d)
  return <div>Card
    {/* <Doughnut data={weather5d.list} /> */}
  </div>;
}

export default Card;
