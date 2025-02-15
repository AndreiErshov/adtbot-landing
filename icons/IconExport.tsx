import styles from './icon.module.scss';
import { iconType } from './types';


const IconExport = ({
    size = 16,
    color = 'var(--black)',
    activeColor = 'var(--blue)',
    isActive
}:iconType) => {
    return (
        <div className={styles.icon} style={{width: size, height: size}}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1C4.136 1 1 4.136 1 8C1 11.864 4.136 15 8 15C11.864 15 15 11.864 15 8" stroke={isActive ? activeColor : color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.7 7.29999L14.44 1.56003" stroke={isActive ? activeColor : color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.9999 4.381V1H11.6189" stroke={isActive ? activeColor : color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

        </div>
    )
}

export default IconExport;