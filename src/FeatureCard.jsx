import React from 'react'

const Card = ({ icon, title, description }) => {
    return (
      <div className="bg-[#121212] p-8 rounded-lg  w-[350px] h-[400px] flex flex-col justify-evenly">
        <div className="bg-red-800 w-12 h-12 rounded-full flex items-center justify-center mb- border-none  hover:border-red-500">
          <div className="text-red-500 text-5xl">{icon}</div>
        </div>
        <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
        <div className="w-16 h-1 bg-red-800 mb-4" ></div>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    );
  };

export default Card
