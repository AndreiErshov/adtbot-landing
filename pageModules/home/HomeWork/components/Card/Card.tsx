import styles from './Card.module.scss';
import { homeWorkCardType } from '../../types';
import {FC} from 'react';
import Image from 'next/image';

const Card:FC<homeWorkCardType> = ({
    text,
    icon
}) => {


    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                {icon && <Image src={icon} alt=''/>}
            </div>
            <div className={styles.text}>
                {text}
            </div>
            <div className={styles.action}>
        
            </div>
        </div>
    )
}


export default Card;