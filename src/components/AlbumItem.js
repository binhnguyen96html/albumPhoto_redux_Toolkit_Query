import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { CiCircleRemove } from "react-icons/ci";
import PhotoList from "./PhotoList";

const AlbumItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <div className="flex items-center font-bold">
      <Button
        loading={results.isLoading}
        onClick={handleRemoveAlbum}
        rounded
        className="mr-2 hover:text-purple-500 hover:text-lg"
      >
        <CiCircleRemove />
      </Button>

      {album.title}
    </div>
  );
  return (
    <div
      className="
      bg-purple-200 hover:bg-purple-100 rounded transition ease-in-out duration-150"
    >
      <div>
        <ExpandablePanel key={album.id} header={header}>
          <PhotoList album={album} />
        </ExpandablePanel>
      </div>
    </div>
  );
};

export default AlbumItem;
