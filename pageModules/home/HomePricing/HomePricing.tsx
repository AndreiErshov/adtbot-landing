import styles from './HomePricing.module.scss';
import Container from '@/components/Container/Container';
import list from './data/list';
import BillingList from './components/BillingList/BillingList';

const HomePricing = () => {


    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <h2 className={styles.title}>
                    Сколько стоит бот
                    </h2>
                    <div className={styles.body}>
                        <BillingList/>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default HomePricing;