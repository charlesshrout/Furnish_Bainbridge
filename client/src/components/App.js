import React, { useEffect, useState } from "react";
import { Route, Routes} from "react-router-dom";
import Collection from "./Collection";
import Brands from "./Brands";
import FurnForm from "./FurnForm";
import About from "./About";
import Contact from "./Contact"
import Login from "./Login"
import NavBar from "./NavBar"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <>
          <Routes>
            <Route path="/" element={<Collection />}/>
            <Route path="/brands" element={<Brands />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/create" element={<FurnForm />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
          </>
        ) : (
          <>
          <Routes>
            <Route path="/" element={<Collection />}/>
            <Route path="/brands" element={<Brands />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/> 
            <Route path="/login" element={<Login setUser= {setUser}/>}/>            
          </Routes>
          </>        
        )}
      </main>
    </>
  );
}

export default App;