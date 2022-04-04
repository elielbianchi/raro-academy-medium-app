export type MessageProps = {
  title: string;
  content: string;
  link: string;
};

export const Message: React.FC<MessageProps> = ({ title, content, link }) => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 align-items:center">
      <div className="flex justify-center md:justify-end -mt-16"></div>
      <div>
        <div className="text-gray-800 text-3xl font-semibold font-small">
          {title}
        </div>
        <p className="mt-2 text-gray-600">{content}</p>
      </div>
      <div className="flex justify-end mt-4">
        <a href="#" className="text-xl font-medium text-indigo-500">
          {link}
        </a>
      </div>
    </div>
  );
};
