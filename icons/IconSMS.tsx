import styles from './icon.module.scss';
import { iconType } from './types';


const IconSMS = ({
    size = 16,
    color = 'var(--white)',
    activeColor = 'var(--blue)',
    isActive
}:iconType) => {
    return (
        <div className={styles.icon} style={{width: size, height: size}}>
            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.25 13.5H4.75003C2.50004 13.5 1.00005 12.375 1.00005 9.74997V4.49999C1.00005 1.875 2.50004 0.75 4.75003 0.75H12.25C14.5 0.75 16 1.875 16 4.49999V9.74997C16 12.375 14.5 13.5 12.25 13.5Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.25 4.875L9.90251 6.74999C9.13001 7.36499 7.86252 7.36499 7.09002 6.74999L4.75003 4.875" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

export default IconSMS;