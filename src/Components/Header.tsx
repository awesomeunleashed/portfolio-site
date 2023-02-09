import classNames from "classnames";
import { NavLink } from "react-router-dom";
import classes from "Util/classes";
import {
  ABOUT_NAME,
  ABOUT_PATH,
  HOME_NAME,
  HOME_PATH,
  RESUME_NAME,
  RESUME_PATH,
} from "Util/constants";

const Header = () => (
  <div className="flex w-full items-center sm:justify-between justify-around border-b border-stone-500 bg-stone-300 py-1 flex-wrap sm:py-4 px-1 sm:pl-4 sm:pr-6">
    <div className="m-1 flex max-sm:max-w-full mr-2 sm:mb-0">
      <NavLink
        end
        className={({ isActive }) =>
          classNames(
            "rounded-r-none max-sm:text-sm",
            classes.button.base,
            isActive ? classes.button.selected : primary
          )
        }
        to={HOME_PATH}
      >
        {HOME_NAME}
      </NavLink>
      <NavLink
        end
        className={({ isActive }) =>
          classNames(
            "rounded-r-none rounded-l-none border-r-0 border-l-0 max-sm:text-sm",
            classes.button.base,
            isActive ? classes.button.selected : primary
          )
        }
        to={ABOUT_PATH}
      >
        {ABOUT_NAME}
      </NavLink>
      <NavLink
        end
        className={({ isActive }) =>
          classNames(
            "rounded-l-none max-sm:text-sm",
            classes.button.base,
            isActive ? classes.button.selected : primary
          )
        }
        to={RESUME_PATH}
      >
        {RESUME_NAME}
      </NavLink>
    </div>
    <div className="font-headers mx-1 text-xl lowercase text-cyan-800 sm:text-3xl my-1">
      Asher Tuggle
    </div>
  </div>
);

const primary = classNames(classes.button.primary, "min-w-0 truncate");

export default Header;
