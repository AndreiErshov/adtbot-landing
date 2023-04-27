import styles from './SliderNav.module.scss';
import {FC} from 'react';
import { sliderNavType } from './types';
import {HiArrowLongLeft, HiArrowLongRight} from 'react-icons/hi2';


const SliderNav:FC<sliderNavType> = ({
    onNext,
    onPrev
}) => {

    return (
        <div className={styles.wrapper}>
            <button 
                onClick={onPrev}
                className={`${styles.item} ${styles.prev}`}><HiArrowLongLeft/></button>
            <button 
                onClick={onNext}
                className={`${styles.item} ${styles.next}`}><HiArrowLongRight/></button>
        </div>
    )
}

export default SliderNav;