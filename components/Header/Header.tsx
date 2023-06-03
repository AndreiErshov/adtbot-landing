import Container from "../Container/Container";
import {FC, useState, useEffect} from 'react';
import styles from './Header.module.scss';
import Link from "next/link";
import Image from "next/image";
import logo from '@/public/assets/logo.svg';
import Button from "../Button/Button";
import LoginModal from "@/modals/LoginModal/LoginModal";

const Header:FC = () => {
    const [login, setLogin] = useState(false)
    const [join, setJoin] = useState(false)




    return (
        <header className={styles.wrapper}>


            <Container>
                <div className={styles.in}>
                    <div className={styles.main}>
                        <Link className={styles.logo} href={'/'}>
                            <Image src={logo} width={122} height={30} alt="adtbot"/>
                        </Link>                      
                        <ul className={styles.nav}>
                            <li className={styles.item}>
                                <Link href={'/demo'}>Демо</Link>
                            </li>
                            <li className={styles.item}>
                                <Link href={'/pricing'}>Тарифы</Link>                            
                            </li>
                            <li className={styles.item}>
                                <Link href={'/'}>База знаний</Link>
                            </li>
                            <li className={styles.item}>
                                <Link href={'/contacts'}>Контакты</Link>
                            </li>
                        </ul>  
                        <div className={styles.lang}>
                            EN
                        </div>
                    </div>
                    <div className={styles.action}>
                        <div className={styles.item}>
                            <Button 
                                onClick={() => window.open('https://adtbot-web.netlify.app/', '_blank')}
                                text="Вход" 
                                variant={'simple'} 
                                style={{padding: '16px 25px'}}/>
                        </div>
                        <div className={styles.item}>
                            <Button 
                                onClick={() => window.open('https://adtbot-web.netlify.app/', '_blank')}
                                text="Регистрация" 
                                variant={'blue'} 
                                style={{padding: '16px 25px'}}/>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}


export default Header;