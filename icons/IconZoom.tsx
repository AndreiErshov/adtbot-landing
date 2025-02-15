import styles from './icon.module.scss';
import { iconType } from './types';


const IconZoom = ({
    size = 16,
    color = 'var(--black)',
    activeColor = 'var(--blue)',
    isActive
}:iconType) => {
    return (
        <div className={styles.icon} style={{width: size, height: size}}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.03999 7.79001H9.53999" stroke={isActive ? activeColor : color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.78999 9.54001V6.04001" stroke={isActive ? activeColor : color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.65 14.3C11.3227 14.3 14.3 11.3227 14.3 7.65C14.3 3.97731 11.3227 1 7.65 1C3.97731 1 1 3.97731 1 7.65C1 11.3227 3.97731 14.3 7.65 14.3Z" stroke={isActive ? activeColor : color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 15L13.6 13.6" stroke={isActive ? activeColor : color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>


        </div>
    )
}

export default IconZoom;