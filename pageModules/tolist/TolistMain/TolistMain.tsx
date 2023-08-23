import styles from './TolistMain.module.scss';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import img from '@/public/assets/guide-hero.png';

const TolistMain = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.img}>
                        <Image
                            src={img}
                            alt=''
                            />
                    </div>
                    <h1 className={styles.title}>Руководство отправлено в ваш почтовый ящик</h1>
                    <div className={styles.text}>
                        <p>Добавьте наш адрес в избранное, чтобы ничего не пропустить.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default TolistMain;