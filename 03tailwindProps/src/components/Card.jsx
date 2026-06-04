import React from 'react'

function Card({name, btnText = "HelloWorld" /*default text if text is not given in app.jsx*/, object, myArr}) { 
       
    console.log(object);
    console.log(myArr);
    return (
    
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Nature landscape"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {name}
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Experience the calm of untouched landscapes and the beauty of natural
          light.
        </p>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          {btnText}
        </button>
      </div>
    </div>
  )
}

export default Card