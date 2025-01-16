import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';

const Favorite = () => {
    const cards = useSelector(state => getFavoriteCards(state));
    return(
        <div className={styles.container}>
            <PageTitle>FAVORITE</PageTitle>
            <div className={styles.column}>
                <ul>
                    {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} cardId={card.id}/>)}
                </ul>
            </div>
        </div>
    );
}

export default Favorite;