import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import { useRef } from "react";
import { useScroll } from "~/hooks/useScroll";

function Header() {
  const navBar = useRef<null | HTMLDivElement>(null);
  const { scrollY } = useScroll();

  return (
    <header
      className={classNames("header-area stuck", {
        moving: scrollY > 50,
      })}
    >
      <div className={classNames("navigation", "stuck")}>
        <div className="container">
          <div className="row">
            <div className="w-full">
              <nav className="flex items-center justify-between navbar navbar-expand-md">
                <a className="mr-4 navbar-brand" href="/">
                  <h1 className="text-2xl font-bold">
                    Hep <span className="text-yellow-400">Skip</span> Hire
                  </h1>
                </a>

                <button
                  className="block navbar-toggler focus:outline-none md:hidden"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarOne"
                  aria-controls="navbarOne"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={() => navBar.current?.classList.toggle("show")}
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div
                  ref={navBar}
                  className="absolute left-0 z-30 hidden w-full px-5 py-3 duration-300 bg-white shadow md:opacity-100 md:w-auto collapse navbar-collapse md:block top-100 mt-full md:static md:bg-transparent md:shadow-none"
                  id="navbarOne"
                >
                  <ul className="items-center content-start mr-auto lg:justify-center md:justify-end navbar-nav md:flex">
                    <li className="nav-item">
                      <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                          isActive ? "active" : undefined
                        }
                      >
                        HOME
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/skips"
                        className={({ isActive }) =>
                          isActive ? "active" : undefined
                        }
                      >
                        SKIP HIRE
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/faq"
                        className={({ isActive }) =>
                          isActive ? "active" : undefined
                        }
                      >
                        FAQ
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                          isActive ? "active" : undefined
                        }
                      >
                        CONTACT
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
