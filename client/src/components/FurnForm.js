import React, {useState} from "react";
import { useNavigate } from "react-router-dom"


function FurnForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brand_id, setBrand] = useState("");
  const [type_id, setType] = useState("");



  const navigate = useNavigate()




  function handleSubmit(e) {
    e.preventDefault();
    const furnData = {
      name: name,
      image: image,
      brand_id: brand_id,
      type_id: type_id
    };
    fetch("/furnitures", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(furnData),
  })
    .then((r) => r.json())
    // .then((newStore) => handleAdd((newStore)));
    .then((newFurn) => console.log(((newFurn))));
    setName("");
    setImage("");
    setBrand ("");
    setType ("");
    navigate("/")
}



  return (
    <div className="container">
      <form className="add-furn-form" onSubmit={handleSubmit}>
        <br />
        <h1 className="h2">Add Furniture</h1>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Enter name here..."
          className="input-text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter image url here ..."
          className="input-text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="brand"
          placeholder="Enter brand # here ..."
          className="input-text"
          value={brand_id}
          onChange={(e) => setBrand(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="type"
          placeholder="Enter type # here ..."
          className="input-text"
          value={type_id}
          onChange={(e) => setType(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create Furniture"
          className="input-text"
        />
      </form>
    </div>
  );
}

export default FurnForm;