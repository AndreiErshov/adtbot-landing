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
                        Торговый бот для автоматического заработка на <span>анонсах листингов</span> криптовалют
                        </h1>
                        <div className={styles.text}>
                            <p>
                            Бот мониторит анонсы листингов топовых бирж с периодичностью 5 запросов в секунду 24/7 и в случае выхода анонса, покупает анонсируемую монету на другой бирже и тут же продает на установленный TP
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