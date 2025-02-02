import React, {useState, useContext} from "react";
import "./styles.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { MyContext } from "../../context"
import axios from "axios"

function MyJumbotron() {
  const [searchInput, setsearchInput] = useState("");
  const {count} = useContext(MyContext);
  const {setRecipes} = useContext(MyContext)
  function handleSearch(search){
      axios
      .get("https://tasty.p.rapidapi.com/recipes/auto-complete=${search}")
      .then((({data})=> setRecipes(data.recipes)))
  }

  return (
  <div className="my-jumbotron">
    <h1>Welcome</h1>
    <h2>Find the best recipes here!</h2>
    <div className="button-input">
       <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for a Recipe"
          aria-label="Recipe Searcher"
          aria-describedby="recipe-finder"
          value={searchInput}
          onChange={(e) => setsearchInput(e.target.value)}
        />
        <Button variant="danger" id="recipe-finder" onClick={handleSearch}>
          Get to Cooking!
        </Button>
      </InputGroup>
    </div>
  </div>
  );
  
}

export default MyJumbotron;