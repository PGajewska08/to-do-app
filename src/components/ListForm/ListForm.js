import styles from './ListForm.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { addList } from '../../redux/listsRedux';
import shortid from 'shortid';

const ListForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList(  {id: shortid(), title, description}));
        console.log("listId: " , props.listId);
        setTitle('');
        setDescription('');
    };
    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span>Title:</span> <TextInput value={title} onChange={e=>setTitle(e.target.value)} />
            <span>Description:</span> <TextInput value={description} onChange={e=>setDescription(e.target.value)} />
            <Button>Add List</Button>
        </form>
    );
};

export default ListForm;