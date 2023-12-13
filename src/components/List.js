import { useEffect } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import { fetchUsersThunk, addUserThunk } from "../store";
import Skeleton from "./Skeleton";
import { useThunk } from "../hooks/use-thunk";
import Item from "./Item";
import { useState } from "react";

const List = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [isLoadingFetch, isErrorFetch, doFetchUsers] =
    useThunk(fetchUsersThunk);
  const [isLoadingAdd, isErrorAdd, doAddUser] = useThunk(addUserThunk);

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmitAddUser = (e) => {
    e.preventDefault();
    doAddUser({ name, phone });
    setName("");
    setPhone("");
  };

  let content;
  if (isLoadingFetch) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (isErrorFetch) {
    content = <div>Error Fetching Data</div>;
  } else {
    content = data.map((user) => <Item key={user.id} user={user} />);
  }

  return (
    <>
      <div className="mt-4 mb-6 p-4 shadow border rounded">
        <form onSubmit={handleSubmitAddUser}>
          <div className="m-2">
            <div>
              <label className="font-bold">Name: </label>
            </div>
            <input
              required
              value={name}
              onChange={handleChangeName}
              className="border mt-2"
            />
          </div>
          <div className="m-2">
            <div>
              <label className="font-bold">Phone: </label>
            </div>
            <input
              required
              value={phone}
              onChange={handleChangePhone}
              className="border mt-2"
            />
          </div>
          <div className="m-2 mt-4">
            <Button
              loading={isLoadingAdd}
              rounded
              className="bg-purple-600 text-white hover:bg-purple-500 transition duration-150 ease-linear"
            >
              +Add User
            </Button>
          </div>
        </form>

        {isErrorAdd && "Error adding new user..."}
      </div>

      <div className="mt-4">{content}</div>
    </>
  );
};

export default List;
