import React from "react";



function FurnitureCard({id, name, image, type, brand, brand_link, handleDeleteFurniture}){

    function handleDelete(){
        fetch(`furnitures/${id}`, {
            method: "DELETE",
        })
        handleDeleteFurniture(id)
    }

    return(
        <>
            <div className="cards">
                <img className="cardImage" src={image} alt="Error Loading Media" width="250"/>
                <h1>{name}</h1>
                <a href={brand_link}>{brand}</a>
                <p>{type}</p>
                <br />
        
                <button className="deleteButtons" onClick={handleDelete}>Remove Bean</button>
            </div>
        </>
    )
}

export default FurnitureCard