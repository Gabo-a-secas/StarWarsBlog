import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  const { type, uid } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${type}/${uid}`)
      .then(res => res.json())
      .then(data => {
        setItem(data.result);
        setLoading(false);
      })
      .catch(err => console.error("Error al cargar detalles:", err));
  }, [type, uid]);

  if (loading) {
    return (
      <div className="container mt-5">
        <h2>Cargando detalles...</h2>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="container mt-5">
        <h2>No se encontraron datos</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-3">{item.properties.name}</h1>

      <div className="text-center mb-4">
        <img
          src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${type}/${uid}.jpg`}
          className="img-fluid rounded"
          alt={item.properties.name}
          style={{ maxWidth: "400px" }}
        />
      </div>

      <p><strong>Descripción:</strong> {item.description}</p>

      <div className="row">
        {Object.entries(item.properties).map(([key, value]) => (
          <div key={key} className="col-md-4 mb-2">
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>
    </div>
  );
};
