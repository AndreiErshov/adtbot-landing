import { FC } from 'react'
import styles from './GuideModal.module.scss';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import img from '@/public/assets/guide-hero.png';
import Button from '@/components/Button/Button';
import Router from 'next/router';
import {IoCloseSharp} from 'react-icons/io5';
import { useRouter } from 'next/router';

const GuideModal = ({
  open,
  onClose
}: {open?: boolean, onClose?: (...args: any) => any}) => {
  const {pathname} = useRouter()

  
  if(pathname !== '/guide' && open) {
    return (
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.in}>
            <button 
              onClick={onClose}
              className={styles.close}>
              <IoCloseSharp/>
            </button>
            <div className={styles.img}>
              <Image
                src={img}
                alt=''
                />
            </div>
            <div className={styles.main}>
              <div className={styles.text}>
              Скачайте пошаговый гайд по заработку на анонсах листингов криптовалют
              </div>
              <div className={styles.action}>
                <Button
                  onClick={() => Router.push('/guide')}
                  text='Скачать гайд'
                  variant={'blue'}
                  style={{padding: '16px 50px'}}
                  />
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
  return null
  
}

export default GuideModal;