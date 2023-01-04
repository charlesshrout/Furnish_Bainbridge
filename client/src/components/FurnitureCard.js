import React from "react"; 



function FurnitureCard({furniture, handleDeleteFurniture, user}){
const {id, brand, image, name, type,} = furniture

    function handleDelete(){
        fetch(`furnitures/${id}`, {
            method: "DELETE",
        })
        handleDeleteFurniture(id)
    }

    return(
        <>
        {user ? (

            <div className="cards">
                <img className="cardImage" src={image} alt="Error Loading Media" width="250"/>
                <h1>{name}</h1>
                <a href={brand.brand_link}>{brand.name}</a>
                <p>{type.name}</p>
                <br />
        
                <button className="deleteButtons" onClick={handleDelete}>Remove</button>
            </div>
        ) : (
            <div className="cards">
                <img className="cardImage" src={image} alt="Error Loading Media" width="250"/>
                <h1>{name}</h1>
                <a href={brand.brand_link}>{brand.name}</a>
                <p>{type.name}</p>
                <br />
            </div>
        )}
        </>
    )
}

export default FurnitureCard