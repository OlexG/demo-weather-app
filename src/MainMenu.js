import { useState } from 'react';
import { Day } from './Day';
import Status from './Status';

function MainMenu() {
  const [days] = useState([
    { dayName: 'Sun', weatherType: 'sunny', degrees: 45 },
    { dayName: 'Mon', weatherType: 'sunny', degrees: 43 },
    { dayName: 'Tue', weatherType: 'rainy', degrees: 15 },
    { dayName: 'Wed', weatherType: 'sunny', degrees: 43 },
    { dayName: 'Thu', weatherType: 'sunny', degrees: 44 },
    { dayName: 'Fri', weatherType: 'rainy', degrees: 12 },
    { dayName: 'Sat', weatherType: 'sunny', degrees: 41 },
  ]);

  const [todaysStatus] = useState([
    { title: 'Humidity', number: '15%', status: 'normal' },
    { title: 'Visibility', number: '4km', status: 'normal' },
    { title: 'Air Quality', number: '170', status: 'bad' },
    { title: 'Humidity', number: '15%', status: 'normal' },
    { title: 'Visibility', number: '4km', status: 'normal' },
    { title: 'Air Quality', number: '170', status: 'bad' },
  ]);

  return (
    <div className="bg-gray-100 p-4 col-span-5">
      <h1 className="text-lg ml-10">
        Week
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-7 mt-4 w-6/7 m-auto justify-items-center">
        {
          days.map((e) => (
            <Day
              dayName={e.dayName}
              weatherType={e.weatherType}
              degrees={e.degrees}
            />
          ))
        }
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {
          todaysStatus.map((e) => (
            <Status
              title={e.title}
              number={e.number}
              status={e.status}
            />
          ))
        }
      </div>
    </div>
  );
}

export default MainMenu;
