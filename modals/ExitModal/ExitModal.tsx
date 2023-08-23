import { FC } from 'react'
import {Modal, ModalFuncProps} from 'antd';
import styles from './ExitModal.module.scss';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import img from '@/public/assets/exit-modal0img.svg';
import {FaTelegramPlane} from 'react-icons/fa';


const ExitModal:FC<ModalFuncProps> = (props) => {
  return (
    <Modal
        {...props}
        width={1160}
        className={`${styles.wrapper} modal blue`}
        >
        <div className={styles.in}>
            <div className={styles.img}>
                <Image
                    src={img}
                    alt=''
                    />
            </div>
            <div className={styles.main}>
                <h2 className={styles.title}>Уже уходите?</h2>
                <div className={styles.text}>
                    <p>
                    Подпишитесь на наш телеграм-канал, в котором мы бесплатно публикуем самые быстрые в мире оповещения об анонсах листингов криптовалют
                    </p>
                </div>
                <div className={styles.action}>
                    <Button 
                        beforeIcon={<FaTelegramPlane/>}
                        onClick={() => window.open('https://t.me/FastCryptoAnnouncements')}
                        text='Перейти в телеграм'
                        style={{backgroundColor: '#73B7EE', paddingTop: 16, paddingBottom: 16}}
                        />
                </div>
            </div>
        </div>
    </Modal>
  )
}

export default ExitModal;