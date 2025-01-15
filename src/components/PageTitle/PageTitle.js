import styles from './PageTitle.module.scss';

const PageTitle = params => {
    return(
        <div className={styles.pageTitle}>
            <h2>{params.children}</h2>
            <p>Lorem ipsum.</p>
        </div>
    );
}

export default PageTitle;