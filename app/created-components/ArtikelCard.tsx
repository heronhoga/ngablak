import React from "react";
import Link from "next/link";

interface ArtikelCardProps {
  image: string;
  title: string;
  summary: string;
  articleUrl: string;
}

const ArtikelCard: React.FC<ArtikelCardProps> = ({
  image,
  title,
  summary,
  articleUrl,
}) => {
  return (
    <div className="border rounded-lg p-4 max-w-sm shadow-lg">
      <img src={image} alt={title} className="w-full h-auto rounded-lg" />
      <h2 className="text-2xl my-4">{title}</h2>
      <p className="text-gray-700">{summary}</p>
      <Link
        href={articleUrl}
        className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Selengkapnya
      </Link>
    </div>
  );
};

export default ArtikelCard;
