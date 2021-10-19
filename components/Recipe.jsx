const Recipe = ({recipe}) => {
return (
  <div>
    <a href={recipe.link}><h3>{recipe.name}</h3></a>
    <img src="#"></img>
    <div>{recipe.ingredients}</div>
    <div>{recipe.instructions}</div>
  </div>
)
}

export default Recipe;