import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import PhotoItem from "./PhotoItem";
import Skeleton from "./Skeleton";

const PhotoList = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className='h-8 w-full'/>;
  } else if (error) {
    content = <div>Error fetching ...</div>;
  } else {
    content = data.map((photo) => (
      <div>
        <PhotoItem photo={photo} key={photo.id} />
      </div>
    ));
  }

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  return (
    <>
      <div className="flex justify-end">
        <Button
          onClick={handleAddPhoto}
          className="bg-white text-sm hover:bg-purple-400 transition ease-in-out duration-150"
          rounded
          loading={results.isLoading}
        >
          +Add photo
        </Button>
      </div>
      <div className="mt-2 flex flex-wrap justify-center">{content}</div>
    </>
  );
};

export default PhotoList;
