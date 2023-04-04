import Container from "../Container/Container";
import {FC} from 'react';
import styles from './Header.module.scss';
import Link from "next/link";
import Image from "next/image";
import logo from '@/public/assets/logo.svg';
import Button from "../Button/Button";


const Header:FC = () => {

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
                                <Link href={'/'}>Демо</Link>
                            </li>
                            <li className={styles.item}>
                                <Link href={'/'}>Тарифы</Link>                            
                            </li>
                            <li className={styles.item}>
                                <Link href={'/'}>База знаний</Link>
                            </li>
                            <li className={styles.item}>
                                <Link href={'/'}>Контакты</Link>
                            </li>
                        </ul>  
                        <div className={styles.lang}>
                            EN
                        </div>
                    </div>
                    <div className={styles.action}>
                        <div className={styles.item}>
                            <Button text="Регистрация" variant={'simple'} style={{padding: '16px 25px'}}/>
                        </div>
                        <div className={styles.item}>
                            <Button text="Регистрация" variant={'blue'} style={{padding: '16px 25px'}}/>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}


export default Header;