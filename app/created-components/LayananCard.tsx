import React from "react";

type Props = {
  icon: React.ElementType;
  text: string;
};

const LayananCard: React.FC<Props> = ({ icon: Icon, text }) => {
  return (
    <div className="mx-auto w-48 h-48 p-10 border border-black rounded-lg shadow-lg">
      <Icon className="w-16 h-16 mb-2 mx-auto" />
      <div id="text" className="text-center">
        {text}
      </div>
    </div>
  );
};

export default LayananCard;
