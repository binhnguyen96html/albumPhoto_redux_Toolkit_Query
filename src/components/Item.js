import { RiDeleteBin2Line } from "react-icons/ri";
import { useThunk } from "../hooks/use-thunk";
import { deleteUserThunk } from "../store";
import Button from "./Button";
// import { useState } from "react";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";

const Item = ({ user }) => {
  const [isLoadingDelete, isErrorDelete, doDelete] = useThunk(deleteUserThunk);

  const handleDelete = () => {
    doDelete(user);
  };

  const header = (
    <div className="flex items-center">
      <div className="cursor-pointer mr-6 text-purple-950 ">
        <Button onClick={handleDelete} loading={isLoadingDelete}>
          <RiDeleteBin2Line className="text-xl hover:text-2xl transition duration-150 ease-in-out" />
        </Button>

        {isErrorDelete && <div>Error for deleting...</div>}
      </div>

      <div>
        <p>
          <span className="font-bold mr-2">Name:</span> {user.name}
        </p>
        <p>
          <span className="font-bold mr-2">Phone:</span>: {user.phone}
        </p>
      </div>
    </div>
  );

  return (
    <div 
    className="mt-4 rounded shadow-md bg-purple-50">
      <ExpandablePanel header={header}>
        <hr />
        <AlbumList user={user} />
      </ExpandablePanel>
    </div>
  );
};

export default Item;
