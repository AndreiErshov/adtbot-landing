import styles from './TrialPanel.module.scss';


const TrialPanel = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <p>
                Для всех новых пользователей первые 14 дней тариф PREMIUM — бесплатно. Кредитная карта не требуются
                </p>
            </div>
        </div>
    )
}

export default TrialPanel;