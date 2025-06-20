import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className=" p-1  text-white  bg-gradient-to-r from-slate-900 to-slate-800/90">
      <div className="flex  items-center w-[90%] m-auto   ">
        <img src="https://www.softclub.tj/logo-softclub.svg" alt="" />
        <nav className="flex w-[70%] font-bold m-auto justify-around">
          <h1>
            <NavLink to={"/"} end>
              Sync Redux{" "}
            </NavLink>
          </h1>
          <h1>
            <NavLink to={"delete"} end>
              Async Redux
            </NavLink>
          </h1>
          <h1>
            <NavLink to={"edit"} end>
              Sync Zustand
            </NavLink>
          </h1>
          <h1>
            <NavLink to={"post"} end>
              Async Zustand
            </NavLink>
          </h1>
        </nav>
      </div>
    </div>
  );
}
