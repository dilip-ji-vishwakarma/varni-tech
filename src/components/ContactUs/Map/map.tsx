import React from 'react';

type MapProps = {
  src: string;
};
const sourse=''
const Map: React.FC<MapProps> = ({ src }) => {
  return (
    <div className="container relative">
      <div className="grid grid-cols-1">
        <div className="w-full leading-[0] border-0">
          <iframe src={src} style={{ border: 0 }} className="w-full h-[500px]" allowFullScreen={true}></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;