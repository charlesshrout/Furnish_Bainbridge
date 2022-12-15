import React, {useState, useEffect} from "react";
import FurnitureCard from "./FurnitureCard"

function Collection(){

    const [furniture, setFurniture] = useState([])

    useEffect(() => {
        fetch('/furnitures')
            .then((r) => r.json())
            .then(furniture => setFurniture(furniture))
    }, [])

    function handleAdd(newFurniture) {
        setFurniture([...furniture, newFurniture]);
    }

    function handleDeleteFurniture(id) {
        const newFurnitureList = furniture.filter((oneFurniture) => 
        oneFurniture.id !== id)
        setFurniture(newFurnitureList)
    }

    const furnitureCard = furniture.map(() => (
        <FurnitureCard
            key={furniture.id}
            id = {furniture.id}
            name = {furniture.name}
            image = {furniture.image}
            type = {furniture.type.name}
            brand = {furniture.brand.name}
            brand_link = {furniture.brand.brand_link}

            onAddFurniture={handleAdd}
            handleDeleteFurniture={handleDeleteFurniture}
        />
    ))


    return(
        <>
            <ul>{furnitureCard}</ul>
        </>    
    )
}

export default Collection