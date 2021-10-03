import { useState } from 'react';
import { renderSwitch } from './Day';

function Sidebar() {
  const [currentWeather] = useState({ dayName: 'Sun', weatherType: 'sunny', degrees: 10 });
  return (
    <div className="rounded background-gray-200">
      <div className=" grid justify-items-center">{renderSwitch(currentWeather.weatherType, 44)}</div>
      <div className="overflow-hidden mt-5 h-16">
        <img className="mb-10" src={`${process.env.PUBLIC_URL}/sunny.jpg`} alt="sunny weather" />
      </div>
      <h1 className="text-5xl ml-10 mt-5">
        {currentWeather.degrees}
      </h1>
      <h1 className="text-lg ml-10 mt-3">
        {currentWeather.dayName}
      </h1>
      <p className="m-4 p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
        The weather today will be quite sunny, with a tiny chance of meatballs
      </p>
    </div>
  );
}

export default Sidebar;
