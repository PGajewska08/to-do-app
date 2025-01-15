import styles from './Home.module.scss';
import Hero from '../components/Hero/Hero';
import SearchForm from '../components/SearchForm/SearchForm';
import Lists from '../components/Lists/Lists';

const Home = children => {
    return(
        <>
            <Hero />
            <Lists />
        </>
    );
}

export default Home;