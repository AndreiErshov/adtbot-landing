import styles from './HomeDemo.module.scss';
import Container from '@/components/Container/Container';
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import img1 from '@/public/assets/home-demo-1.png';
import IconButton from '@/components/IconButton/IconButton';
import SliderNav from '@/components/SliderNav/SliderNav';
import { useRef, useState } from 'react';
import { SwiperOptions } from 'swiper';


const HomeDemo = () => {
    const [swiper, setSwiper] = useState<any>(null)

    return (        
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.main}>
                        <h2 className={styles.title}>
                            Как выглядит бот
                        </h2>
                        <div className={styles.text}>
                            <p>
                            Мы разработали максимально удобную и простую в использовании платформу для создания и управления ботами
                            </p>
                        </div>
                        <div className={styles.action}>
                            <div className={styles.pop}>
                                Видеопрезентация бота
                            </div>
                            <div className={styles.demo}>
                                <div className={styles.head}>Демо-доступ</div>
                                <div className={styles.text}>
                                Хотите рассмотреть более подробно? <br/>
                                Пожалуйста!
                                </div>
                            </div>
                        </div>
                        <div className={styles.nav}>
                            <SliderNav  
                                onNext={() => swiper && swiper.slideNext()}
                                onPrev={() => swiper && swiper?.slidePrev()}
                                />
                        </div>
                    </div>
                    <div className={styles.body}>
                        <Swiper 
                            loop
                            spaceBetween={20}
                            onSwiper={setSwiper}
                            className={styles.slider}>
                            <SwiperSlide className={styles.slide}>
                                <Image src={img1} alt=''/>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <Image src={img1} alt=''/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default HomeDemo;