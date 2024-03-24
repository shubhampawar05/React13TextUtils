import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [themeMode, setThemeMode] = useState("light");
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <nav>
      <div>
        <div className="flex justify-between p-3 bg-[#F8F9FA]  dark:bg-gray-400">
          <div className="flex items-center gap-6 dark:text-white">
            <span className="text-2xl font-semibold text-[#06B6D4] dark:text-[#06B6D4]">
              TextUtils
            </span>
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/aboutus">
              {" "}
              <span>About Us</span>
            </Link>
            <Link to="/contactus">
              <span>Contact</span>
            </Link>
          </div>
          <div>
            <p>
              {" "}
              <span>
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={onChangeBtn}
                    checked={themeMode === "dark"}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    Toggle Theme
                  </span>
                </label>
              </div>

                
              </span>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
