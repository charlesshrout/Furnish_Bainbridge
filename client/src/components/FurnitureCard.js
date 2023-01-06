import React from "react";

function FurnitureCard({ furniture, handleDeleteFurniture, user }) {
  const { id, brand, image, name, type } = furniture;

  function handleDelete() {
    fetch(`furnitures/${id}`, {
      method: "DELETE",
    });
    handleDeleteFurniture(id);
  }

  return (
    <>
      {user ? (
        <div
          className="card w-96 bg-base-100 shadow-xl"
          style={{ width: "25vw", marginBottom: "5vh" }}
        >
          {/* <img className="image" src={image} alt="Error Loading Media" width="250"/> */}
          <figure>
            <img src={image} alt="Error Loading Media" width="500" />
          </figure>
          <div style={{ height: "5vh", padding: "1vh" }}>
            <h1 class="card-title">{name}</h1>
            <a href={brand.brand_link}>{brand.name}</a>
            <p>{type.name}</p>
          </div>
          <br />

          <button
            className="btn btn-outline btn-warning self-end"
            onClick={handleDelete}
          >
            Remove
          </button>
        </div>
      ) : (
        <div style={{ padding: "3vh" }}>
          <div
            className="card bg-base-100 shadow-xl"
            style={{
              width: "25vw",
              borderRadius: "25px",
              overflow: "hidden",
            }}
          >
            <img
              className="card-image"
              src={image}
              alt="Error Loading Media"
              style={{
                width: "25vw",
                height: "25vh",
                objectFit: "cover",
                borderRadius: "25px",
              }}
            />
          </div>
          <div
            className="collapse"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "25vw",
            }}
          >
            {/* <input type="checkbox" className="peer" /> */}
            <div>
              <h1
                className="collapse-title text-xl font-medium justify-start"
                style={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  width: "fit-content",
                }}
              >
                {name}
              </h1>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <a
                style={{
                  fontSize: "12px",
                  marginRight: "1vw",
                  borderRadius: "5px",
                }}
                className="btn btn-outline btn-xs justify-center"
                href={brand.brand_link}
              >
                {brand.name}
              </a>
              <p
                style={{ fontSize: "12px", borderRadius: "5px" }}
                className="btn btn-outline btn-xs justify-end"
              >
                {type.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FurnitureCard;
