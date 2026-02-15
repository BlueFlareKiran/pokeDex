import React from 'react'

export default function DashBoard( {title, controls, children}) {
  return (
    <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 overflow-hidden min-h-0 border border-gray-100 flex flex-col">
      
      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          {title}
        </h2>

        <div>
          {controls}
        </div>
      </div>

      {/* Inner Content Container */}
      <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl p-6 overflow-y-auto min-h-0">
        {children}
      </div>

    </div>
  );
}
