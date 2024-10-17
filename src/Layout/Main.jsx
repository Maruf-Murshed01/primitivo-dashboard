import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../config";
import Login from "../Login/Login";
import SidebarNav from "../Shared/SidebarNav";

function Main() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // console.log("uid", uid)
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        // console.log("user is logged out")
      }
    });
  }, []);

  return (
    <>
      {loggedIn ? (
        <div className="p-5 md:p-0 flex">
          {" "}
          <SidebarNav></SidebarNav> <Outlet></Outlet>
        </div>
      ) : (
        <Login></Login>
      )}
      {/* <div className='p-8 md:p-0 flex'>  <SidebarNav></SidebarNav>  <Outlet></Outlet></div> */}
    </>
  );
}

export default Main;
