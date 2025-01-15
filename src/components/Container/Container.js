import styles from './Container.module.scss'

const Container = params => {
    return (
        <div className={styles.container}>{params.children}</div>
    )
}

export default Container;