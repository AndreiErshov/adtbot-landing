import styles from './UpBtn.module.scss';
import {BsChevronUp} from 'react-icons/bs';
import {motion} from 'framer-motion';

const UpBtn = () => {

    const onClick = () => {
        process?.browser && document.documentElement.scrollTo(0,0)
    }


    return (
        <motion.div 
            initial={{scale: 0, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            exit={{scale: 0, opacity: 0}}
            transition={{type: 'spring', damping: 17, stiffness: 400}}
            className={styles.wrapper}>
            <button onClick={onClick} className={styles.btn}>
                <BsChevronUp/>
            </button>
        </motion.div>
    )
}

export default UpBtn;