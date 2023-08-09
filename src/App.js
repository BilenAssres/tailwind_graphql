import data from './data/dest.js';
import DestCard from './component/destCard.js';
function App() {
  return (
    <div className=" min-h-screen ">
      <div className="grid bg-gray-100 lg:grid-cols-2">
        <div className=" max-w-md lg:max-w-full mx-auto sm:max-w-xl">
          <div className="px-8 py-12 lg:px-12 lg:py-24">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="Netflix Logo"
              className="h-10"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1667327925692-532fcd1809ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2926&q=80"
              alt="Netflix Logo"
              className="mt-6 rounded-xl shadow-xl h-48 sm:mt-8 lg:hidden"
            />
            <h1 className="text-2xl font-bold mt-6 text-gray-900 lg:text-3xl">
              You can work from anywhere.{' '}
              <span className="text-primary-500">Take advantage of it. </span>{' '}
            </h1>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quidem?
            </p>
            <div className="mt-4 space-x-3">
              <a
                className="btn btn-primary active:-translate-y-0.5 transform hover:-translate-y-0.5"
                href="#"
              >
                Learn more
              </a>
              <a className="btn btn-secondary" href="#">
                Click
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1667327925692-532fcd1809ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2926&q=80"
            alt="Netflix Logo"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div className="mt-5 container grid gap-6 grid-cols-3">
        {data.map((dest) => (
          <DestCard dest={dest} key={dest.city} />
        ))}
      </div>
      <div className="container">
        <div className="max-w-sm mx-auto shadow-lg bg-white my-5 border p-5">
          <form action="#" method="POST" className=" space-y-3">
            <label for="fname" className=" w-full  ">
              First name:
            </label>
            <input
              type="text"
              className=""
            />
            <label for="lname" className=" w-full">
              Last name:
            </label>
            <input
              type="text"
              className=" "
            />
            <select className="  ">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <div>
              <input
                type="checkbox"
                id="demoCheckbox"
                name="checkbox"
                value="1"
                className='rounded border-gray-300 text-indigo-400 focus:border-indigo-400 focus:ring-indigo-500'
              />
              <label for="demoCheckbox"> Check me!</label>
            </div>
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
