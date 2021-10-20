import marked from 'marked';

const Recipe = ({recipe}) => {
  const getMarkdownText = (text) => {
    const formattedText = marked(text); 
    return { __html: formattedText};
  }
return (
  <div className='recipe-card'>
    <a href={recipe.link}><h3>{recipe.name}</h3></a>
    <img src={`http://localhost:1337${recipe.photo[0].url}`} alt={recipe.name} className="recipe-image" />
    <div dangerouslySetInnerHTML={getMarkdownText(recipe.ingredients)}></div>
    <div dangerouslySetInnerHTML={getMarkdownText(recipe.instructions)}></div>

    <span className='type'>{recipe.type.type}</span>
  </div>
)
}

export default Recipe;