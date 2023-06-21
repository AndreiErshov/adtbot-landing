import styles from './Footer.module.scss';
import {FC} from 'react';
import Container from '../Container/Container';
import Fb from './components/Fb/Fb';
import Link from 'next/link';
import logo from '@/public/assets/logo.svg';
import Image from 'next/image';
import telegram from '@/public/assets/telegram.svg';
import twitter from '@/public/assets/twitter.svg';
import youtube from '@/public/assets/youtube.svg';

const Footer = () => {

    return (
        <>
            <Fb/>
            <footer className={styles.wrapper}>
                <Container>
                    <div className={styles.in}>
                        <div className={styles.main}>
                            <div className={`${styles.pre} ${styles.part}`}>
                                <Link href={'/'} className={styles.logo}>
                                    <Image src={logo} alt='adtbot'/>
                                </Link>
                                <div className={styles.text}>
                                    <p>
                                    ADTBot — мониторинг анонсов листингов 10 топовых бирж с периодичностью 5 запросов в секунду 24/7 и автоматической покупкой на других биржах в момент анонса.
                                    </p>
                                </div>
                                {/* <div className={styles.soc}>
                                    <Link className={styles.item} href={'/'}>
                                        <Image src={telegram} alt=''/>
                                    </Link>
                                    <Link className={styles.item} href={'/'}>
                                        <Image src={twitter} alt=''/>
                                    </Link>
                                    <Link className={styles.item} href={'/'}>
                                        <Image src={youtube} alt=''/>
                                    </Link>
                                </div> */}
                            </div>
                            <div className={`${styles.part} ${styles.nav}`}>
                                <h5 className={styles.head}>Ресурсы</h5>
                                <ul className={styles.list}>
                                    <li className={styles.item}><a target={'_blank'} href={'https://adtbot.com/knowledge-base/'}>База знаний</a></li>
                                    <li className={styles.item}><Link href={'/demo'}>Демо</Link></li>
                                    <li className={styles.item}><Link href={'/pricing'}>Тарифы</Link></li>
                                    {/* <li className={styles.item}><Link href={'/'}>Партнерская программа</Link></li> */}
                                    <li className={styles.item}><Link href={'/contacts'}>Контакты</Link></li>
                                </ul>
                            </div>
                            <div className={`${styles.part} ${styles.nav}`}>
                                <h5 className={styles.head}>Информация</h5>
                                <ul className={styles.list}>
                                    <li className={styles.item}><Link href={'/privacy'}>Политика конфиденциальности</Link></li>
                                    <li className={styles.item}><Link href={'/tos'}>Пользовательское соглашение</Link></li>
                                    <li className={styles.item}><Link href={'/cookie_policy'}>Политика использования Cookie</Link></li>
                                </ul>
                            </div>
                            <div className={`${styles.part} ${styles.nav}`}>
                                <h5 className={styles.head}>Поддержка</h5>
                                <ul className={styles.list}>
                                    <li className={styles.item}><a href={'https://t.me/adtbot_support'} target='_blank'>@adtbot_support</a></li>
                                    <li className={styles.item}><a href={'mailto:support@adtbot.com'}>support@adtbot.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.ex}>
                            <p>
                            © adtbot.com. Все права защищены. 18+
                            </p>
                            <p>
                            На данном сайте предоставляется доступ к программному обеспечению, позволяющему мониторить анонсы листингов криптовалют на биржах и автоматически покупать и продавать данные анонсируемые монеты на других биржах в момент выхода анонсов. Контроль за работой ботов осуществляется исключительно вами.
                            </p>
                            <p>
                            Финансовые продукты сопряжены с высоким уровнем риска и могут привести к потере ваших средств. Вы никогда не должны инвестировать деньги, которые вы не можете позволить себе потерять. Поэтому, пожалуйста, примите во внимание, что мы не несем ответственности за любые понесенные убытки.
                            </p>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
       
    )
}


export default Footer;


