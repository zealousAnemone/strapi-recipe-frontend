import marked from 'marked';

const Recipe = ({recipe}) => {
  const getMarkdownText = (text) => {
    const formattedText = marked(text); 
    return { __html: formattedText};
  }
return (
  <div className='recipe-card'>
    <a href={recipe.link}><h3>{recipe.name}</h3></a>
    <img src="#"></img>
    <div dangerouslySetInnerHTML={getMarkdownText(recipe.ingredients)}></div>
    <div>{recipe.instructions}</div>

    <div>{recipe.type.type}</div>
  </div>
)
}

export default Recipe;