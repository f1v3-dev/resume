import { AwardProps } from "@/types";

const AwardItem = ({ name, organizer, description, url }: AwardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <b>{name} ({organizer})</b>
          {/*위에 href 태그 */}

          <span className="text-sm text-gray-500">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
            </span>
        </div>
        <span className="whitespace-pre-wrap">{`${description}`}</span>
      </div>
    </div>
  );
};

export default AwardItem;
