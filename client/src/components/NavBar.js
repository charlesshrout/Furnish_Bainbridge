import React from "react";
import {Link} from "react-router-dom";


function Bar({ user, setUser }) {


  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div style={{padding: "2vh", marginLeft: "1vw", marginRight: "1vw", borderBottom: "1px solid gray"}}>
        {user ? (
          <> 
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{display: "flex", gap: "2rem"}}>
              <Link className="btn btn-accent btn-outline bg-white" style={{ flex: 1 }} to="/">Collection</Link>
              <Link className="btn btn-accent btn-outline bg-white" style={{ flex: 1 }} to="/brands">Brands</Link>
              <Link className="btn btn-accent btn-outline bg-white" style={{ flex: 1 }} to="/about">About</Link>
              <Link className="btn btn-accent btn-outline bg-white" style={{ flex: 1 }} to="/contact">Contact Us</Link>
              <Link className="btn btn-accent btn-outline bg-white" style={{ flex: 1 }} to="/create">Add Furniture</Link>
              <button class="btn btn-accent btn-outline bg-white" onClick={handleLogoutClick}>Logout</button> 
            </div>
            <div>
            <h1 className="siteTitle" style={{fontSize: "32px", fontWeight: "bold"}}>furnish bainbridge</h1>
            </div>
            </div>
            <h3>Welcome, {user.username}!</h3>
          </>
        ) : (
          <>
          <div style={{display: "flex", alignItems: "center"}}>
          <div>
            <h1 className="siteTitle" style={{fontSize: "32px", fontWeight: "bold"}}>furnish bainbridge</h1>
          </div>
           <div style={{display: "flex", gap: "2rem", paddingLeft:"2rem"}}>
             <Link className="btn btn-accent btn-outline bg-white" style={{ flex: 1 }} to="/">Collection</Link>
              <Link className="btn btn-accent btn-outline bg-white" style={{ flex: 1 }} to="/brands">Brands</Link>
              <Link className="btn btn-accent btn-outline bg-white" style={{ flex: 1 }} to="/about">About</Link>
              <Link className="btn btn-accent btn-outline bg-white" style={{ flex: 1 }} to="/contact">Contact Us</Link>
              </div>
            </div>
          </>
        )}
        </div>
  );
}

export default Bar;
