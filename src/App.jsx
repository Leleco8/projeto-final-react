import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';

const filmes = [
  {
    id: 1,
    title: 'teste 1',
    poster_path: '/xq4dYEB8nizSYOVVPGDNnGZpyt.jpg',
    vote_average: 7.5,
  },
  {
    id: 2,
    title: 'teste 2',
    poster_path: '/xq4dYEB8nizSYOVVPGDNnGZpyt.jpg',
    vote_average: 7.8,
  },
  {
    id: 3,
    title: 'teste 3',
    poster_path: '/xq4dYEB8nizSYOVVPGDNnGZpyt.jpg',
    vote_average: 6.5,
  },
];

const App = () => {
  return (
    <>
      <NavBar />

      <main>
        <div className="container">

          <h2 className="title">Filmes Populares:</h2>

          <div className="movies-container">
            {filmes.map((filme) => (
              <Card key={filme.id} filme={filme} />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;
