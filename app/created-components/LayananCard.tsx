import React from 'react';

type Props = {
  icon: React.ElementType;
  text: string;
}

const LayananCard: React.FC<Props> = ({ icon: Icon, text }) => {
  return (
    <div className='mx-auto p-10 border border-black rounded-lg shadow-lg'>
      <Icon className="w-6 h-6 mb-2 mx-auto" />
      {text}
    </div>
  );
}

export default LayananCard;
