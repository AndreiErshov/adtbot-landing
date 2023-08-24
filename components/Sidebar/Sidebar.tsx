import styles from './Sidebar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {useEffect} from 'react';
import { getCookie } from 'typescript-cookie'


const Sidebar = ({open}: {open: boolean}) => {
    const {asPath} = useRouter()
    let isAuthorized = false
    
    useEffect(() => {
        console.log(asPath)
        isAuthorized = typeof window === "undefined" ? false : getCookie('adtbot-console-access-token') !== undefined
    }, [asPath])


    return (
        <div className={`${styles.wrapper} ${open ? styles.active : ''}`}>
            <div className={styles.in}>
                <ul className={styles.menu}>
                    <li className={styles.item}><Link href={'/demo'}>Демо</Link></li>
                    <li className={styles.item}><Link href={'/pricing'}>Тарифы</Link></li>
                    <li className={styles.item}><a href={'https://adtbot.com/knowledge-base/'} target={'_blank'}>База знаний</a></li>
                    <li className={styles.item}><Link href={'/contacts'}>Контакты</Link></li>
                    <li className={styles.item}>
                        <Link href={isAuthorized ? 'https://console.adtbot.com/auth/logout' : 'https://console.adtbot.com/auth/login'}>{isAuthorized ? "Выйти" : "Вход"} </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href={'https://console.adtbot.com'}>{isAuthorized ? "Личный кабинет" : "Регистрация"} </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Sidebar;