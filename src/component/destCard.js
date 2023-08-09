import React from 'react';
export default function destCard({dest}) {
  return (
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <img
        src={dest.imgUrl}
        alt={dest.city}
        className="h-32 w-32 flex-shrink-0"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{dest.city}</div>
        <p className="text-gray-700 text-base">
          {dest.averageTemperature} / {dest.averageWindSpeed}
        </p>
      </div>
    </div>
  );
}
