import styles from './PageLayout.module.scss';
import {FC} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const PageLayout:FC<{children?: React.ReactNode}> = ({
    children
}) => {

    return (
        <div className={styles.wrapper}>
            <Header/>
            <main className={styles.main}>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default PageLayout;