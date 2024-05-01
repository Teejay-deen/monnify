import { useState } from "react";
import { BsJustifyLeft, BsSearch } from "react-icons/bs";

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard" },
    { title: "pages" },
    { title: "media", spacing: true },
    { title: "Analytic" },
    { title: "Inbox" },
    { title: "Profile", spacing: true },
    { title: "Settings" },
    { title: "Logout" },
  ];

  return (
    <div className="flex ">
      <div
        className={`bg-green-400 h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsJustifyLeft
          className={`text-3xl rounded-full bg-white absolute border-2 cursor-pointer border-green-400  -right-3 top-9 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="Logo inline-flex ">
          <BsJustifyLeft
            className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              !open && "rotate-[360degree]"
            }`}
          />
          <h1
            className={`text-white text-2xl origin-left font-medium duration-300 ${
              !open && "scale-0"
            } `}
          >
            Monnify
          </h1>
        </div>

        <div
          className={`flex items-center rounded-md bg-gray-500 px-4 py-2 mt-9 ${
            !open ? "px-2.5" : "px-4"
          }`}
        >
          <BsSearch
            className={`text-white text-lg block float-left cursor-pointer${
              !open && "mr-8"
            }`}
          />
          <input
            type={"search"}
            className={`text-base bg-transparent w-full text-white focus:outline-none " placeholder="Search ${
              !open && "hidden"
            }`}
          />
        </div>

        {/* menu items */}

        <ul className="pt2">
          {Menus.map((menu, index) => (
            <>  
              <li
                key={index}
                className="text-gray-400 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-white rounded-md mt-2"
              >
                <span>{Menus.title}</span>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold">
        <h1>Home page</h1>
      </div>
    </div>
  );
};

export default App;
