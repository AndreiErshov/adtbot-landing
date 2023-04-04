import styles from './HomeLook.module.scss';
import Container from '@/components/Container/Container';
import {Swiper, SwiperSlide} from 'swiper/react';
import img1 from '@/public/assets/look-1.png';
import img2 from '@/public/assets/look-2.png';
import Image from 'next/image';
import {FC, useRef, useState} from 'react';
import {HiArrowLongRight, HiArrowLongLeft} from 'react-icons/hi2';
import IconZoom from '@/icons/IconZoom';

const HomeLook:FC = () => {
    const [swiper, setSwiper] = useState<any>(null)



    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.descr}>
                        <h2 className={styles.title}>Только посмотрите на это</h2>
                        <div className={styles.text}>
                            <p>
                            Вот, что происходит с монетой в момент анонса ее листинга на другой крупной бирже. Впечатляет?
                            </p>
                        </div>
                        <div className={styles.nav}>
                            <button 
                                onClick={() => {
                                    swiper && swiper?.slidePrev()
                                }}
                                className={`${styles.item} ${styles.prev}`}><HiArrowLongLeft/></button>
                            <button 
                                onClick={() => {
                                    swiper && swiper?.slideNext()
                                }}
                                className={`${styles.item} ${styles.next}`}><HiArrowLongRight/></button>
                        </div>
                    </div>
                    <div className={styles.body}>
                        <Swiper 
                            onSwiper={setSwiper}
                            slidesPerView={2}
                            className={styles.slider}>
                            <SwiperSlide className={styles.slide}>
                                <Image src={img1} alt=''/>
                                <div className={styles.action}>
                                    <button className={styles.zoom}><IconZoom color='var(--yellow)'/></button>
                                    <button className={styles.blank}></button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <Image src={img2} alt=''/>
                                <div className={styles.action}>
                                    <button className={styles.zoom}></button>
                                    <button className={styles.blank}></button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <Image src={img2} alt=''/>
                                <div className={styles.action}>
                                    <button className={styles.zoom}></button>
                                    <button className={styles.blank}></button>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default HomeLook;