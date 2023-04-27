import styles from './HomeSec.module.scss';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import img from '@/public/assets/home-sec.png';

const HomeSec = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.img}>
                        <Image src={img} alt=''/>
                    </div>
                    <div className={styles.body}>
                        <h2 className={styles.title}>
                        Зачем мы палим эту тему в паблик, еще и даем такой продвинутый инструмент
                        </h2>
                        <div className={styles.text}>
                            <p>
                            Мы в активной торгашке с 2017, в конце 2019 мы создали этого бота для личного использования, но он был не очень удобен и юзабелен.
                            </p>
                            <p>
                            Когда мы его удобно упаковали, мы решили почему бы не зарабатывать на нем. Ведь, мы так же, как и вы, устали бесконечно красноглазить в графики.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeSec;