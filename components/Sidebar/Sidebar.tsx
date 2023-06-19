import styles from './Sidebar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {useEffect} from 'react';


const Sidebar = ({open}: {open: boolean}) => {
    const {asPath} = useRouter()
    
    useEffect(() => {
        console.log(asPath)
    }, [asPath])


    return (
        <div className={`${styles.wrapper} ${open ? styles.active : ''}`}>
            <div className={styles.in}>
                <ul className={styles.menu}>
                    <li className={styles.item}><Link href={'/demo'}>Демо</Link></li>
                    <li className={styles.item}><Link href={'/pricing'}>Тарифы</Link></li>
                    <li className={styles.item}><a href={'#'} target={'_blank'}>База знаний</a></li>
                    <li className={styles.item}><Link href={'/contacts'}>Контакты</Link></li>
                </ul>
            </div>
        </div>
    )
}


export default Sidebar;