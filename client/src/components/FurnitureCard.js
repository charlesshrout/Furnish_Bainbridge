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

            <div className="card w-96 bg-base-100 shadow-xl">
                {/* <img className="image" src={image} alt="Error Loading Media" width="250"/> */}
                <figure><img src={image} alt="Error Loading Media" width="500" /></figure>
                <div style={{height: "5vh", padding: "1vh"}}>
                <h1 class= "card-title">{name}</h1>
                <a href={brand.brand_link}>{brand.name}</a>
                <p>{type.name}</p>
                </div>
                <br />
        
                <button className="deleteButtons" onClick={handleDelete}>Remove</button>
            </div>
        ) : (
            <div className="card bg-base-100 shadow-xl" style={{width: "25vw"}}>
                <figure><img src={image} alt="Error Loading Media" style={{width: "25vw", height: "25vh", objectFit: "cover"}} /></figure>
                <div style={{height: "5vh", padding: "1vh"}}>
                <h1 style={{fontWeight: "bold", fontSize: "24px"}}>{name}</h1>
                <div className= "card-actions justify-end" style= {{}}>
                <a style= {{fontSize: "18px"}}className= "badge badge-outline btn btn-outline btn-xs"href={brand.brand_link}>{brand.name}</a>
                <p style= {{fontSize: "18px"}} className= "badge badge-outline">{type.name}</p>
                </div>
                </div>
                <br />
            </div>
        )}
        </>
    )
}

export default FurnitureCard