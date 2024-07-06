import React from 'react';

type Props = {
  imageSrc: string;
  caption: string;
};

function ImageCard({ imageSrc, caption }: Props) {
  return (
    <div className="relative inline-block w-full h-96 shadow-lg">
      <img src={imageSrc} alt="Image" className="object-cover w-full h-full" />
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
        {caption}
      </div>
    </div>
  );
}

export default ImageCard;
