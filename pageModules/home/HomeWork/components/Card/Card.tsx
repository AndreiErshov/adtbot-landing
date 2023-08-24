import styles from './Card.module.scss';
import { homeWorkCardType } from '../../types';
import {FC} from 'react';
import Image from 'next/image';
import {HiArrowLongRight} from 'react-icons/hi2';

const Card:FC<homeWorkCardType> = ({
    text,
    icon,
    corner_icon = () => <HiArrowLongRight/>,
    reverse_on_mobile = true,
    style
}) => {


    return (
        <div className={styles.wrapper} style={style}>
            <div className={styles.icon}>
                {icon && <Image src={icon} alt=''/>}
            </div>
            <div className={styles.text}>
                {text}
            </div>
            <div className={`${styles.action} ${reverse_on_mobile ? styles.reverse_icon : ''}`}>
                {corner_icon()}
            </div>
        </div>
    )
}


export default Card;