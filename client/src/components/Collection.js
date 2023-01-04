import React, {useState, useEffect} from "react";
import FurnitureCard from "./FurnitureCard"

function Collection({user}){

    const [furnitures, setFurniture] = useState([])

    useEffect(() => {
        fetch('/furnitures')
            .then((r) => r.json())
            .then(furnitures => setFurniture(furnitures))
    }, [])

    function handleAdd(newFurniture) {
        setFurniture([...furnitures, newFurniture]);
    }

    function handleDeleteFurniture(id) {
        const newFurnitureList = furnitures.filter((oneFurniture) => 
        oneFurniture.id !== id)
        setFurniture(newFurnitureList)
    }

    const furnitureCards = furnitures.map((furniture) => (
        <FurnitureCard
            key={furniture.id}
           furniture= {furniture}
           user={user}

            onAddFurniture={handleAdd}
            handleDeleteFurniture={handleDeleteFurniture}
        />
    ))


    return(
        <div style={{paddingTop: "5vh", paddingBottom: "5vh", paddingLeft: "5vw", paddingRight: "5vw"}}>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between",}}>{furnitureCards}</div>
        </div>    
    )
}

export default Collection