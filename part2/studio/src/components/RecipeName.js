import recipedata from "./recipe.json";


function RecipeName() {
  const recipeName = recipedata.map((data) => (
    <div key={data.name}>
      <h1>{data.name}</h1>;
      </div>
  ));
  return <div>{recipeName}</div>;
  
}

export default RecipeName;

//import return the name of the recipe as a level 1 header
{/* <p>{recipedata.author}</p>
  <p>{recipedata.description}</p>
  <p>{recipedata.ingredients}</p>
  <p>{recipedata.recipeImage}</p>
  <hr/>
  <p>{recipedata.authorImage}</p>
  <p>{recipedata.website}</p> */}