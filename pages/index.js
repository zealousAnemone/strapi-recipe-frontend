import Head from 'next/head';
import Header from '../components/Header';
import Recipe from '../components/Recipe';
import styles from '../styles/Home.module.css';

export default function Home({ recipes }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recipe Book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:1337/recipes');
  const recipes = await response.json();
  return {
    props: {
      recipes,
    },
  };
}
