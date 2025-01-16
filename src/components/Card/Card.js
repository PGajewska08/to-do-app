import styles from './Card.module.scss';
import Button from '../Button/Button';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import { getCardById } from '../../redux/store';


const Card = props => {
    const dispatch = useDispatch();
    const card = useSelector(state => getCardById(state,props.cardId));
    const toggle = () => {
        dispatch(toggleCardFavorite( card.id ));
        console.log('toggle: '+ card.isFavorite);
    }
    return (
        <li className={styles.card}>
            {props.title} 
            <button className={styles.favoriteButton}><span className={clsx(styles.icon+ ' fa fa-star-o', card.isFavorite&&styles.active)} onClick= {toggle}></span></button>
        </li>
    );
};

export default Card;