import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import styles from './HomeDb.module.scss';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import img1 from '@/public/assets/home-look-7.jpg';
import img2 from '@/public/assets/home-look-8.jpg';
import img3 from '@/public/assets/home-look-9.jpg';
import img4 from '@/public/assets/home-look-10.jpg';
import IconButton from '@/components/IconButton/IconButton';
import {AiOutlineZoomIn} from 'react-icons/ai';
import { Fancybox as NativeFancybox } from "@fancyapps/ui";


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
                            modules={[Pagination]}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
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
                                    <div className={styles.item}>
                                    <IconButton
                                        icon={<AiOutlineZoomIn size={20}/>}
                                        onClick={() => NativeFancybox.show([{src: img1.src}])}
                                        />
                                    </div>
                                </div>
                                <Image
                                    src={img1}
                                    alt=''
                                    placeholder='blur'
                                    />
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <div className={styles.action}>
                                    <div className={styles.item}>
                                    <IconButton
                                        icon={<AiOutlineZoomIn size={20}/>}
                                        onClick={() => NativeFancybox.show([{src: img2.src}])}
                                        />
                                    </div>
                                </div>
                                <Image
                                    src={img2}
                                    alt=''
                                    placeholder='blur'
                                    />
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <div className={styles.action}>
                                    <div className={styles.item}>
                                    <IconButton
                                        icon={<AiOutlineZoomIn size={20}/>}
                                        onClick={() => NativeFancybox.show([{src: img3.src}])}
                                        />
                                    </div>
                                </div>
                                <Image
                                    src={img3}
                                    alt=''
                                    placeholder='blur'
                                    />
                            </SwiperSlide>
                            <SwiperSlide className={styles.slide}>
                                <div className={styles.action}>
                                    <div className={styles.item}>
                                    <IconButton
                                        icon={<AiOutlineZoomIn size={20}/>}
                                        onClick={() => NativeFancybox.show([{src: img4.src}])}
                                        />
                                    </div>
                                </div>
                                <Image
                                    src={img4}
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