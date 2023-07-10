import React, { useState, useEffect, useContext } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Store } from "../../store";

const Header = () => {
  const [term, setTerm] = useState("");
  const navigation = useNavigate();
  const { globalState, setGlobalState } = useContext(Store);
  const handleSubmit = (e) => {
    e.preventDefault();
    setGlobalState({ type: "SET_TERM", payload: { term } });
    navigation(`/search?query=${term}`);
  };

  useEffect(() => {
    setTerm(globalState.term);
  }, []);
  return (
    <div>
      <Link to="/">VideoLink</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="検索"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </button>
      </form>
    </div>
  );
};

export default Header;
