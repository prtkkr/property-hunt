import Link from 'next/link';

const Infobox = ({
  title,
  description,
  bgColor = 'bg-gray-100',
  txtColor = 'text-gray-800',
  btnInfo,
}: {
  title: string;
  description: string;
  bgColor?: string;
  txtColor?: string;
  btnInfo: {
    text: string;
    link: string;
    bgColor: string;
  };
}) => {
  return (
    <>
      <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
        <h2 className={`${txtColor} text-2xl font-bold`}>{title}</h2>
        <p className={`${txtColor} mt-2 mb-4`}>{description}</p>
        <Link
          href={btnInfo.link}
          className={`inline-block ${btnInfo.bgColor} text-white rounded-lg px-4 py-2 hover:opacity-90`}
        >
          {btnInfo.text}
        </Link>
      </div>
    </>
  );
};

export default Infobox;
