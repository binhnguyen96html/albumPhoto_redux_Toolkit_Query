import { RiDeleteBin7Fill } from "react-icons/ri";
import { useRemovePhotoMutation } from "../store";
import Button from "./Button";

const PhotoItem = ({ photo }) => {
  const [removePhoto, results] = useRemovePhotoMutation();

  const handleDeletePhoto = () => {
    removePhoto(photo);
  };
  return (
    <div className="relative m-1">
      <img className="h-20 w-20" src={photo.url} />
      <div
        className="absolute inset-0 flex items-center justify-center 
      opacity-0 hover:bg-gray-200 hover:opacity-70 
      transition duration-150 ease-in-out"
      >
        <Button loading={results.isLoading} onClick={handleDeletePhoto}>
          <RiDeleteBin7Fill className="text-xl" />
        </Button>
      </div>
    </div>
  );
};

export default PhotoItem;
