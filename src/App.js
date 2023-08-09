function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="px-8 py-12">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
          className="h-10"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1667327925692-532fcd1809ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2926&q=80"
          alt="Netflix Logo"
          className="mt-6 rounded-xl shadow-xl h-48"
        />
        <h1 className="text-2xl font-bold mt-6 text-gray-900">
          You can work from anywhere.{' '}
          <span className="text-indigo-500">Take advantage of it. </span>{' '}
        </h1>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem?
        </p>
        <div className="mt-4">
          <a className="bg-indigo-500 text-white px-4 py-2 inline-block rounded-lg uppercase tracking-wide font-semi-bold text-sm" href="#">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;