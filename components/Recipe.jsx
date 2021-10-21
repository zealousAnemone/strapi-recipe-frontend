const Recipe = ({recipe}) => {
return (
  <div className='recipe-card'>
    <a href={`http://localhost:3000/recipe/${recipe.id}`}><h3>{recipe.name}</h3></a>
    <img src={`http://localhost:1337${recipe.photo[0].url}`} alt={recipe.name} className="recipe-image" />
    
    <span className='type'>{recipe.type.type}</span>
  </div>
)
}

export default Recipe;