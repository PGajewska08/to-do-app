import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateSearchString } from '../../redux/store';
const SearchForm = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateSearchString( '' ));
      }, []);
    
    const [initialSearchString, setinitialSearchString] = useState("Search...");
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString( e.target[0].value ));
        
        setinitialSearchString("Search...");
    }
    
    return (
        <form className={styles.searchForm} onSubmit={(e) => handleSubmit(e)}>
            <TextInput placeholder={initialSearchString} />
            <Button> <span className="fa fa-search" /></Button>
        </form>
        
    );
};

export default SearchForm;
