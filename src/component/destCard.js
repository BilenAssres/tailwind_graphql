import React from 'react';
export default function destCard({ dest }) {
  return (
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <div className='aspect-[2/1] w-1/2'>
        <img src={dest.imgUrl} alt={dest.city}/>
      </div>
      <div className="px-6 py-4 w-1/2">
        <div className="font-bold text-xl mb-2">{dest.city}</div>
        <p className="text-gray-700 text-base">
          {dest.averageTemperature} / {dest.averageWindSpeed}
        </p>
        <p className="line-clamp-4" >{dest.description}</p>
      </div>
    </div>
  );
}
