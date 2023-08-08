function App() {
  return (
    <div className="bg-blue-700">
      <div className="container">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
          Find Friends
        </button>
        <button className="btn btn-blue">
          Find Group
        </button>

        <div className="bg-red-400 border border-red-400 text-red-700 px-4 py-3 rounded relative my-5" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">Something went wrong.</span>
        </div>

        <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div className="ml-6 pt-1">
            <h4 className="text-xl font-medium text-gray-900">
              Tom Cook
            </h4>
            <p className="text-base text-gray-500">You have a notification</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
