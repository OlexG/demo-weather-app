import Sunny from './Sunny';
import Rainy from './Rainy';

export function renderSwitch(weatherType, size) {
  switch (weatherType) {
    case 'sunny':
      return <Sunny width={size} height={size} />;
    case 'rainy':
      return <Rainy width={size} height={size} />;
    default:
      return <Sunny width={size} height={size} />;
  }
}

export function Day({ dayName, weatherType, degrees }) {
  return (
    <div className="shadow-md bg-white px-10 py-4 rounded-lg mt-2">
      <p>{dayName}</p>
      {renderSwitch(weatherType, 14)}
      <p>{degrees}</p>
    </div>
  );
}
