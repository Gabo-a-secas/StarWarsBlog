import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();

    const handleRemove = (item) => {
        dispatch({ type: 'REMOVE_FAVORITE', payload: item });
    };

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">Star Wars Blog</span>
                </Link>

                <div className="ml-auto dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Favoritos ({store.favorites.length})
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        {store.favorites.length === 0 ? (
                            <li className="dropdown-item">No hay favoritos</li>
                        ) : (
                            store.favorites.map((item, index) => (
                                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                    <Link to={`/details/${item.url.split("/")[5]}/${item.uid}`} className="text-decoration-none text-dark">
                                        {item.name}
                                    </Link>
                                    <button className="btn btn-sm btn-danger ms-2" onClick={() => handleRemove(item)}>
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
