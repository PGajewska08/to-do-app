import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import Card from '../Card/Card';
import { Navigate } from 'react-router-dom';

const Favorite = () => {
    const cards = useSelector(state => getFavoriteCards(state));
    console.log(cards);
    if(cards.length <=0) return <Navigate to="/" />
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