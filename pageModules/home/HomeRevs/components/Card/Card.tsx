import styles from './Card.module.scss';
import {FC} from 'react';
import { homeRevsType } from '../../types';


const Card:FC<homeRevsType> = ({
    name,
    text
}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>BlessedNik</div>
            <div className={styles.text}>
                <p>
                Давно хотел найти бота для листинга крипты, но боялся, что деньги украдут. Но я нашёл выход – ADTBot. Ещё и халявой на две недели порадовали, рекомендую
                </p>
            </div>
        </div>
    )
}

export default Card;