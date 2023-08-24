import styles from './Fb.module.scss';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import img from '@/public/assets/fb.svg';
import Button from '@/components/Button/Button';

const Fb = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.img}>
                        <Image
                            src={img}
                            alt=''
                            placeholder='blur'
                            blurDataURL={img.src}
                            />
                    </div>
                    <div className={styles.body}>
                        <h2 className={styles.title}>
                        Получите бесплатный доступ к полному функционалу на 14 дней
                        </h2>
                        <div className={styles.text}>
                            <p>
                            Никаких карт не требуется (мы вообще против карт) - просто зарегистрируйтесь, рассмотрите функционал, заработайте на паре-тройке листингов и только потом примите решение о продлении подписки
                            </p>
                        </div>
                        <div className={styles.action}>
                            <Button
                                onClick={() => window.open('https://console.adtbot.com/', '_blank')}
                                text='Попробовать бесплатно'
                                variant={'footer'}
                                />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Fb;