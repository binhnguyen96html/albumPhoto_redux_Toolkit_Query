import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const ExpandablePanel = ({ children, header }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="p-4 rounded mt-2">
      <div className="flex justify-between items-center">
        <div>{header}</div>
        <div onClick={handleExpand}>
          {expanded ? (
            <GoChevronDown  />
          ) : (
            <GoChevronLeft />
          )}
        </div>
      </div>

      {expanded && <div className="p-2 mt-2 ">{children}</div>}
    </div>
  );
};

export default ExpandablePanel;
