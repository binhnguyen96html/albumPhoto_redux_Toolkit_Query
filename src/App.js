import List from "./components/List";

const App = () => {
  return (
    <div className="container p-6">
      <h1 className="mt-3 mb-4 text-2xl font-bold text-center text-purple-900">
        USER PROFILE - PHOTO
      </h1>

      <div className="p-6">
        <List />
      </div>
    </div>
  );
};

export default App;
