import styles from './Home.module.scss';
import Hero from '../components/Hero/Hero';
import SearchForm from '../components/SearchForm/SearchForm';
import List from '../components/List/List';

const Home = children => {
    return(
        <>
            <Hero />
            <SearchForm />
            <List />
        </>
    );
}

export default Home;