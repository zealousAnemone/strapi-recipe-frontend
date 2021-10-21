import marked from 'marked';

const fullRecipe = ({ recipe }) => {
  const getMarkdownText = (text) => {
    const formattedText = marked(text);
    return { __html: formattedText };
  };
  return (
    <div>
      <h1>{recipe.name}</h1>
      <img
        src={`http://localhost:1337${recipe.photo[0].url}`}
        alt={recipe.name}
        width={400}
      />

      <div dangerouslySetInnerHTML={getMarkdownText(recipe.ingredients)}></div>
      <div dangerouslySetInnerHTML={getMarkdownText(recipe.instructions)}></div>
    </div>
  );
};

export default fullRecipe;

export async function getStaticPaths() {
  const response = await fetch('http://localhost:1337/recipes');
  const recipes = await response.json();
  return {
    paths: recipes.map((recipe) => ({
      params: {
        id: recipe.id.toString(),
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const response = await fetch(`http://localhost:1337/recipes?id=${params.id}`);
  const recipes = await response.json();
  return {
    props: { recipe: recipes[0] },
    revalidate: 1,
  };
}
