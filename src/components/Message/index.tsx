import { Link } from "react-router-dom";

export type MessageProps = {
  title: string;
  content: string;
  link: string;
  textLink: string;
};

export const Message: React.FC<MessageProps> = ({
  title,
  content,
  link,
  textLink,
}) => {
  return (
    <div className="flex justify-center items-center my-40">
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 align-items:center">
        <div className="flex justify-center md:justify-end -mt-16"></div>
        <div>
          <div className="text-gray-800 text-3xl font-semibold font-small">
            {title}
          </div>
          <p className="mt-2 text-gray-600">{content}</p>
        </div>
        <div className="flex justify-end mt-4">
          <Link to={link}>
            <span className="text-xl font-medium text-indigo-500">
              {textLink}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
