import Head from 'next/head';
import Header from '../components/Header';
import Recipe from '../components/Recipe';

export default function Home({ recipes, types }) {
  return (
    <div>
      <Head>
        <title>Recipe Book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header types={types} />
      <div id="recipe-container">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const recipeRes = await fetch('http://localhost:1337/recipes');
  const typeRes = await fetch('http://localhost:1337/types');

  const recipes = await recipeRes.json();
  const types = await typeRes.json();

  return {
    props: {
      recipes,
      types,
    },
  };
}
