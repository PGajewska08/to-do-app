import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List'
import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import Home from './Home/Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound/NotFound';

const App = () => {
  return (
    <div>
      <main>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </main>
    </div>
  );
 };
 export default App;