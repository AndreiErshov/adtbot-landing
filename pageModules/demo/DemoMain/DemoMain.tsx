import styles from './DemoMain.module.scss';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import img from '@/public/assets/home-demo-1.png';



const DemoMain = () => {


    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.descr}>
                        <h2 className={styles.title}>Демо-доступ</h2>
                        <h2 className={styles.title}>
                        Хотите рассмотреть админку ADTBot более подробно?
                        </h2>
                        <div className={styles.text}>
                            <p>
                            Посмотрите административную панель более детально, чтобы понять как управлять ботом.
                            </p>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.item}>Админка: <a className='def-link' href="https://adtbot.com/admin_demo" target='_blank'>https://adtbot.com/admin_demo</a></div>
                            <div className={styles.item}>Логин: <strong>adtbotdemo</strong></div>
                            <div className={styles.item}>Пароль: <strong>adtbotdemo</strong></div>
                        </div>
                    </div>
                    <div className={styles.img}>
                        <Image src={img} alt='' placeholder='blur'/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default DemoMain;