import React, {useState, useEffect} from "react";
import FurnitureCard from "./FurnitureCard"

function Collection(){

    const [furnitures, setFurniture] = useState([])

    useEffect(() => {
        fetch('/furnitures')
            .then((r) => r.json())
            .then(furnitures => setFurniture(furnitures))
    }, [])
console.log(furnitures)
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

            onAddFurniture={handleAdd}
            handleDeleteFurniture={handleDeleteFurniture}
        />
    ))


    return(
        <>
            <ul>{furnitureCards}</ul>
        </>    
    )
}

export default Collection