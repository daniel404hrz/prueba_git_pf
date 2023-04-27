import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  filterOrigin,
  filterGenres,
  orderByName,
  orderByRating,
} from "../../redux/actions";

const Nav = (setCurrentPage) => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  // const handleClinckReset = ()=>{

  //    dispatch(resetSelect())
  // //para resetear las recetas
  // // r.preventDefault(); //para que no se rompa
  // document.getElementById("1").selectedIndex = 0;
  // document.getElementById("2").selectedIndex = 0;
  // document.getElementById("3").selectedIndex = 0;
  // document.getElementById("4").selectedIndex = 0;

  // }

  const handleFilterOrigin = (e) => {
    e.preventDefault();
    dispatch(filterOrigin(e.target.value));
  };

  const handleFilterGenres = (e) => {
    e.preventDefault();
    dispatch(filterGenres(e.target.value));
    setCurrentPage(1)
  };

  const hadleOrderName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
  };
  const hadleOrderRating = (e) => {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
  };

  return (
    <nav className={style.nav}>
      <div>
        <Link to="/create">
          <button className={style.buttonLink}>CREATED VIDEOGAMES</button>
        </Link>
        <Link to="/about">
          <button className={style.buttonLink}>ABOUT</button>
        </Link>
        <Link to="/">
          <button className={style.buttonLink}>LOGOUT</button>
        </Link>

        <div>
          <SearchBar />
        </div>
      </div>

      <div>
        <button
          className={style.buttonLink}
          onClick={() => {
            window.location.reload();
          }}
        >
          RESET
        </button>

        <select
          onChange={(e) => {
            handleFilterOrigin(e);
          }}
          defaultValue="0"
          className={style.select}
          id="1"
        >
          <option disabled value="0">
            FILTER BY ORIGIN
          </option>
          <option value="All">(ALL)</option>
          <option value="Created">Created</option>
          <option value="API">API</option>
        </select>

        <select
          onChange={handleFilterGenres}
          defaultValue="0"
          className={style.select}
          id="2"
        >
          <option disabled value="0">
            FILTER BY GENRES
          </option>

          {genres.map((genre, index) => {
            return (
              <option key={index} value={genre}>
                {genre}
              </option>
            );
          })}
        </select>

        <select
          onChange={(e) => {
            hadleOrderName(e);
          }}
          defaultValue="0"
          className={style.select}
          id="3"
        >
          <option disabled value="0">
            ORDER BY NAME
          </option>
          <option value="a-z">Name (A-Z)</option>
          <option value="z-a">Name (Z-A)</option>
        </select>

        <select
          onChange={(e) => {
            hadleOrderRating(e);
          }}
          defaultValue="0"
          className={style.select}
          id="4"
        >
          <option disabled value="0">
            ORDER BY RATING
          </option>
          <option value="1-9">Ascending Rating</option>
          <option value="9-1">Descending Rating</option>
        </select>
      </div>
    </nav>
  );
};

export default Nav;
