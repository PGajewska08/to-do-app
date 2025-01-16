import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { getCardById } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';

const Card = props => {
    const dispatch = useDispatch();
    const card = useSelector(state => getCardById(state,props.cardId));
    const toggle = () => {
        dispatch(toggleCardFavorite( card.id ));
        console.log('toggle: '+ card.isFavorite);
    }
    const remove = () => {
        dispatch(removeCard( card.id ));
    }
    return (
        <li className={styles.card}>
            {props.title} 
            <div>
                <button className={styles.iconButton}><span className={clsx(styles.icon+ ' fa fa-star-o', card.isFavorite&&styles.active)} onClick= {toggle}></span></button>
                <button className={styles.iconButton}><span className={styles.icon+ ' fa fa-solid fa-trash'} onClick= {remove}></span></button>
            </div>
        </li>
    );
};

export default Card;