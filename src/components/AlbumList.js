import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import AlbumItem from "./AlbumItem";
import Button from "./Button";
import Skeleton from "./Skeleton";

const AlbumList = ({ user }) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  console.log(useAddAlbumMutation());

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className='h-8 w-full'/>;
  } else if (error) {
    content = <div>Error is loading...</div>;
  } else {
    content = data.map((album) => {
      return <AlbumItem album={album} key={album.id} />;
    });
  }

  const handleAddAlbum = () => {
    addAlbum(user);
  };
  return (
    <div className="mt-2 p-4 ">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-bold italic text-violet-800">
          Album for {user.name}
        </h3>
        <Button
          loading={results.isLoading}
          onClick={handleAddAlbum}
          className="bg-violet-300 hover:bg-violet-400 transition ease-in-out duration-150"
          rounded
        >
          +Add Album
        </Button>
      </div>

      <div>{content}</div>
    </div>
  );
};

export default AlbumList;
