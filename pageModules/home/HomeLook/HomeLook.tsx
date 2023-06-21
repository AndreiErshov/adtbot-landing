import styles from './HomeLook.module.scss';
import Container from '@/components/Container/Container';
import {Swiper, SwiperSlide} from 'swiper/react';
import img1 from '@/public/assets/home-look-1.jpg';
import img2 from '@/public/assets/home-look-2.jpg';
import img3 from '@/public/assets/home-look-3.jpg';
import img4 from '@/public/assets/home-look-4.jpg';
import img5 from '@/public/assets/home-look-5.jpg';
import img6 from '@/public/assets/home-look-6.jpg';
import img7 from '@/public/assets/home-look-7.jpg';
import img8 from '@/public/assets/home-look-8.jpg';
import img9 from '@/public/assets/home-look-9.jpg';
import img10 from '@/public/assets/home-look-10.jpg';
import Image from 'next/image';
import {FC, useState} from 'react';
import {HiArrowLongRight, HiArrowLongLeft} from 'react-icons/hi2';
import IconZoom from '@/icons/IconZoom';
import IconExport from '@/icons/IconExport';
import FancyboxWrapper from '@/components/FancyboxWrapper/FancyboxWrapper';

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
                            Вот какие потрясающие изменения происходят с монетой при анонсе ее листинга. На другой бирже, где это монета уже давно торгуется, происходит резкий рост ее стоимости. 
                            </p>
                            <p>
                            Поразительно, не так ли?
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
                            slidesPerView={1}
                            slidesPerGroup={2}
                            breakpoints={{ 
                                1200: {
                                    slidesPerView: 2
                                }
                            }}
                            
                            className={styles.slider}>
                            <SwiperSlide className={styles.slide}>
                                <Image src={img1} alt=''/>
                                <div className={styles.action}>
                                    <button className={styles.zoom}><IconZoom color='var(--yellow)'/></button>
                                    <a href='https://www.binance.com/en/support/announcement/binance-will-list-gmx-gmx-in-the-innovation-zone-766022428cf94796914209b44261d3a8' target={'_blank'} className={styles.blank}><IconExport color="#fff"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <Image src={img2} alt=''/>
                                <div className={styles.action}>
                                <button className={styles.zoom}><IconZoom color='var(--yellow)'/></button>
                                <a href='https://www.binance.com/en/support/announcement/binance-will-list-gmx-gmx-in-the-innovation-zone-766022428cf94796914209b44261d3a8' target={'_blank'} className={styles.blank}><IconExport color="#fff"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <Image src={img3} alt=''/>
                                <div className={styles.action}>
                                    <button className={styles.zoom}><IconZoom color='var(--yellow)'/></button>
                                    <a href='https://www.binance.com/en/support/announcement/binance-will-list-gmx-gmx-in-the-innovation-zone-766022428cf94796914209b44261d3a8' target={'_blank'} className={styles.blank}><IconExport color="#fff"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <Image src={img4} alt=''/>
                                <div className={styles.action}>
                                    <button className={styles.zoom}><IconZoom color='var(--yellow)'/></button>
                                    <a href='https://www.binance.com/en/support/announcement/binance-will-list-gmx-gmx-in-the-innovation-zone-766022428cf94796914209b44261d3a8' target={'_blank'} className={styles.blank}><IconExport color="#fff"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <Image src={img5} alt=''/>
                                <div className={styles.action}>
                                    <button className={styles.zoom}><IconZoom color='var(--yellow)'/></button>
                                    <a href='https://www.binance.com/en/support/announcement/binance-will-list-gmx-gmx-in-the-innovation-zone-766022428cf94796914209b44261d3a8' target={'_blank'} className={styles.blank}><IconExport color="#fff"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <Image src={img6} alt=''/>
                                <div className={styles.action}>
                                    <button className={styles.zoom}><IconZoom color='var(--yellow)'/></button>
                                    <a href='https://www.binance.com/en/support/announcement/binance-will-list-gmx-gmx-in-the-innovation-zone-766022428cf94796914209b44261d3a8' target={'_blank'} className={styles.blank}><IconExport color="#fff"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <Image src={img7} alt=''/>
                                <div className={styles.action}>
                                    <button className={styles.zoom}><IconZoom color='var(--yellow)'/></button>
                                    <a href='https://www.binance.com/en/support/announcement/binance-will-list-gmx-gmx-in-the-innovation-zone-766022428cf94796914209b44261d3a8' target={'_blank'} className={styles.blank}><IconExport color="#fff"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <Image src={img8} alt=''/>
                                <div className={styles.action}>
                                    <button className={styles.zoom}><IconZoom color='var(--yellow)'/></button>
                                    <a href='https://www.binance.com/en/support/announcement/binance-will-list-gmx-gmx-in-the-innovation-zone-766022428cf94796914209b44261d3a8' target={'_blank'} className={styles.blank}><IconExport color="#fff"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <Image src={img9} alt=''/>
                                <div className={styles.action}>
                                    <button className={styles.zoom}><IconZoom color='var(--yellow)'/></button>
                                    <a href='https://www.binance.com/en/support/announcement/binance-will-list-gmx-gmx-in-the-innovation-zone-766022428cf94796914209b44261d3a8' target={'_blank'} className={styles.blank}><IconExport color="#fff"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <Image src={img10} alt=''/>
                                <div className={styles.action}>
                                    <button className={styles.zoom}><IconZoom color='var(--yellow)'/></button>
                                    <button className={styles.blank}><IconExport color="#fff"/></button>
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