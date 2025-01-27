import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addCard } from '../../redux/cardsRedux';

const CardForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({  id: shortid(), columnId: props.columnId, title, }));
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e=>setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
    );
};

export default CardForm;