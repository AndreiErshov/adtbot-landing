import styles from './HomeDb.module.scss';
import Container from '@/components/Container/Container';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import img1 from '@/public/assets/db-1.png';
import img2 from '@/public/assets/db-2.png';
import img3 from '@/public/assets/db-3.png';
import IconButton from '@/components/IconButton/IconButton';
import {AiOutlineZoomIn} from 'react-icons/ai';


const HomeDb = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <h2 className={styles.title}>
                    Все еще сомневаетесь?<br/>
                    Посмотрите еще на эти монеты:
                    </h2>
                    <div className={styles.body}>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={25}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 3
                                },
                                768: {
                                    slidesPerView: 2
                                }
                            }}
                            className={styles.slider}
                            >
                            <SwiperSlide className={styles.slide}>
                                <div className={styles.action}>
                                    <button className={styles.item}>
                                    <IconButton
                                        icon={<AiOutlineZoomIn size={20}/>}
                                        />
                                    </button>
                                </div>
                                <Image
                                    src={img1}
                                    alt=''
                                    placeholder='blur'
                                    />
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <div className={styles.action}>
                                    <button className={styles.item}>
                                    <IconButton
                                        icon={<AiOutlineZoomIn size={20}/>}
                                        />
                                    </button>
                                </div>
                                <Image
                                    src={img2}
                                    alt=''
                                    placeholder='blur'
                                    />
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <div className={styles.action}>
                                    <button className={styles.item}>
                                    <IconButton
                                        icon={<AiOutlineZoomIn size={20}/>}
                                        />
                                    </button>
                                </div>
                                <Image
                                    src={img3}
                                    alt=''
                                    placeholder='blur'
                                    />
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <div className={styles.action}>
                                    <button className={styles.item}>
                                    <IconButton
                                        icon={<AiOutlineZoomIn size={20}/>}
                                        />
                                    </button>
                                </div>
                                <Image
                                    src={img1}
                                    alt=''
                                    placeholder='blur'
                                    />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default HomeDb;