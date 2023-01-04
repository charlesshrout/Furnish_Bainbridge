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
    <header style={{ width: '100%' }}>
    
      <div >
        {user ? (
          <> 
            <div className="container">
              <h1 className="siteTitle">furnish bainbridge</h1>
              <Link className="link" style={{ flex: 1 }} to="/">Collection</Link>
              <Link className="link" style={{ flex: 1 }} to="/brands">Brands</Link>
              <Link className="link" style={{ flex: 1 }} to="/about">About</Link>
              <Link className="link" style={{ flex: 1 }} to="/contact">Contact Us</Link>
              <Link className="link" style={{ flex: 1 }} to="/create">Add Furniture</Link>
              <button onClick={handleLogoutClick}>Logout</button> 
              <h3>Welcome, {user.username}!</h3>
            </div>
          </>
        ) : (
          <>
             <Link className="link" style={{ flex: 1 }} to="/">Collection</Link>
              <Link className="link" style={{ flex: 1 }} to="/brands">Brands</Link>
              <Link className="link" style={{ flex: 1 }} to="/about">About</Link>
              <Link className="link" style={{ flex: 1 }} to="/contact">Contact Us</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Bar;
