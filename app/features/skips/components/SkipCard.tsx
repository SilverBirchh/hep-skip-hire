import { Link } from "@remix-run/react";
import { FC } from "react";
import { SkipDetails } from "../types/types";

type Props = {
  skip: SkipDetails;
};

const SkipCard: FC<Props> = ({ skip }) => {
  return (
    <div className="max-w-sm h-full bg-white rounded-lg border border-gray-200 shadow-md flex flex-col">
      <div>
        <div className="rounded-t-lg aspect-video">{skip.image}</div>
      </div>
      <div className="p-5 pt-0 inline-flex flex-col h-full">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {skip.title}
          </h5>
          <p className="text-grey-400 text-sm">{skip.size}</p>
        </div>
        <div className="h-5" />
        <p className="mb-3 flex-grow font-normal text-gray-700 dark:text-gray-400">
          {skip.description}
        </p>
        <Link
          to={"/contact"}
          className="inline-flex self-start items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ring-offset-2 transition-colors duration-300"
        >
          Enquire
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default SkipCard;
