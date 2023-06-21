import Container from "../Container/Container";
import {FC, useState, useEffect} from 'react';
import styles from './Header.module.scss';
import Link from "next/link";
import Image from "next/image";
import logo from '@/public/assets/logo.svg';
import Button from "../Button/Button";
import Sidebar from "../Sidebar/Sidebar";
import { useRouter } from "next/router";


const Header:FC = () => {
    const router = useRouter()
    const [shadow, setShadow] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)


    useEffect(() => {
        setSidebarOpen(false)
    }, [router])

    const toggleHeader = () => {
        if(document.documentElement.scrollTop > 10) {
            setShadow(true)
        } else {
            setShadow(false)
        }
    }
    useEffect(() => {
        document.addEventListener('scroll', toggleHeader)

        return () => {
            document.removeEventListener('scroll', toggleHeader)
        }
    }, [])

    return (
        <>
              <Sidebar open={sidebarOpen}/>
              <header className={`${styles.wrapper} ${shadow ? styles.shadow : ''}`}>
          

          <Container>
              <div className={styles.in}>
                  <div className={styles.top}>
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
                              <a href={'https://adtbot.com/knowledge-base/'} target="_blank">База знаний</a>
                          </li>
                          <li className={styles.item}>
                              <Link href={'/contacts'}>Контакты</Link>
                          </li>
                      </ul>  
                      {/* <div className={styles.lang}>
                          EN
                      </div> */}
                  </div>
                  <div className={styles.action}>
                      <div className={styles.item}>
                          <Button 
                              onClick={() => window.open('https://adtbot-web.netlify.app/auth/login', '_blank')}
                              text="Вход" 
                              variant={'simple'} 
                              style={{padding: '16px 25px', border: 'none'}}/>
                      </div>
                      <div className={styles.item}>
                          <Button 
                              onClick={() => window.open('https://adtbot-web.netlify.app/', '_blank')}
                              text="Регистрация" 
                              variant={'blue'} 
                              style={{padding: '16px 25px'}}/>
                      </div>
                      <button 
                        onClick={() => setSidebarOpen(s => !s)}
                        className={`${styles.item} ${styles.burger} ${sidebarOpen ? styles.active : ''}`}>
                          <span></span>
                          <span></span>
                          <span></span>
                      </button>
                  </div>
                  </div>


                  <div className={styles.bottom}>
                      {/* <div className={styles.main}>
                          <div className={styles.lang}>
                              EN
                          </div>
                      </div> */}
                      <div className={styles.action}>
                          <div className={styles.item}>
                              <Button 
                                  onClick={() => window.open('https://adtbot-web.netlify.app/', '_blank')}
                                  text="Вход" 
                                  variant={'simple'} 
                                  style={{padding: '16px 25px', border: 'none'}}/>
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
                  
              </div>
          </Container>
      </header>
        </>
      
    )
}


export default Header;