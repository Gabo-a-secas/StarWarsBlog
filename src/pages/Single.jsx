import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Single = () => {
    const { type, id } =useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/${id}`)
            .then(res => res.json())
            .then(data => setItem(data.result))
            .catch(err => console.error("Error cargando detalles:"));
    
    }, [type, id]);

    if (!item) {
        return <div>Cargando...</div>
    }

    return (
        <div className="container mt-5">
            <h1>{item.properties.name}</h1>
            <p>ID: {item.uid}</p>
            <p>Descripcion: {item.description}</p>
        </div>
    );
};