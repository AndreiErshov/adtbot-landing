import styles from './HomeHero.module.scss';
import {FC} from 'react';
import Container from '@/components/Container/Container';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import img from '@/public/assets/hero-img.png';

const HomeHero:FC = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={`${styles.body} ${styles.part}`}>
                        <h1 className={styles.title}>
                        Превратите <span>анонсы листингов</span> криптовалют в источник дохода с нашим инновационным торговым ботом
                        </h1>
                        <div className={styles.text}>
                            <p>
                            Увеличьте вашу прибыльность минимум до +30% в месяц с помощью бота, который мониторит анонсы листингов на топовых биржах криптовалют с частотой 5 запросов в секунду в режиме 24/7, моментально осуществляет покупку анонсируемых монет на другой бирже и продает их с прибылью!
                            </p>
                        </div>
                        <div className={styles.action}>
                            <div className={styles.item}><Button onClick={() => window.open('https://adtbot-web.netlify.app/', '_blank')} text='Бесплатный доступ' variant={'default'}/></div>
                            <div className={styles.item}><Button text='Посмотреть демо' variant='simple'/></div>
                        </div>
                    </div>
                    <div className={`${styles.img} ${styles.part}`}>
                        <Image src={img} alt='chart'/>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default HomeHero;