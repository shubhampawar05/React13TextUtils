import React from "react";
import { Link } from "react-router-dom";



function Header() {
  return (
    <nav>
      <div>
        <div className="flex justify-between p-3 bg-[#F8F9FA]">
          <div className="flex items-center gap-6">
              <span className="text-2xl font-semibold text-[#06B6D4] ">TextUtils</span>
              <Link to='/'><span>Home</span></Link>
             <Link to='/aboutus'> <span>About Us</span></Link>
              <Link to='/contactus'><span>Contact</span></Link>
          </div>
          <div >
           
           <p>Enable dark Mode</p>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
