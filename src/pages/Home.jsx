import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_PEOPLE', payload: data.results }))
      .catch(err => console.error("Error cargando people:", err));

    fetch("https://www.swapi.tech/api/planets")
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_PLANETS', payload: data.results }))
      .catch(err => console.error("Error cargando planets:", err));

    fetch("https://www.swapi.tech/api/vehicles")
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_VEHICLES', payload: data.results }))
      .catch(err => console.error("Error cargando vehicles", err));
  }, []);

  const handleAddFavorite = (item) => {
    dispatch({ type: 'ADD_FAVORITE', payload: item });
  };

  return (
    <div className="container">
      <h1 className="mt-5 text-center">Star Wars Blog</h1>

      <h2 className="mt-4">People</h2>
      <div className="d-flex overflow-auto">
        {store.people.map((person, index) => (
          <div key={index} className="card m-2" style={{ minWidth: "200px" }}>
            <img 
              src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${person.uid}.jpg`} 
              className="card-img-top" 
              alt={person.name} 
            />
            <div className="card-body">
              <h5 className="card-title">{person.name}</h5>
              <Link to={`/details/people/${person.uid}`}>
                <button className="btn btn-primary">Detalles</button>
              </Link>
              <button className="btn btn-outline-warning ms-2" onClick={() => handleAddFavorite(person)}>
                <i className="fas fa-heart"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-4">Planets</h2>
      <div className="d-flex overflow-auto">
        {store.planets.map((planet, index) => (
          <div key={index} className="card m-2" style={{ minWidth: "200px" }}>
            <img 
              src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${planet.uid}.jpg`} 
              className="card-img-top" 
              alt={planet.name} 
            />
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <Link to={`/details/planets/${planet.uid}`}>
                <button className="btn btn-primary">Detalles</button>
              </Link>
              <button className="btn btn-outline-warning ms-2" onClick={() => handleAddFavorite(planet)}>
                <i className="fas fa-heart"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-4">Vehicles</h2>
      <div className="d-flex overflow-auto">
        {store.vehicles.map((vehicle, index) => (
          <div key={index} className="card m-2" style={{ minWidth: "200px" }}>
            <img 
              src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${vehicle.uid}.jpg`} 
              className="card-img-top" 
              alt={vehicle.name} 
            />
            <div className="card-body">
              <h5 className="card-title">{vehicle.name}</h5>
              <Link to={`/details/vehicles/${vehicle.uid}`}>
                <button className="btn btn-primary">Detalles</button>
              </Link>
              <button className="btn btn-outline-warning ms-2" onClick={() => handleAddFavorite(vehicle)}>
                <i className="fas fa-heart"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
