import styles from './HomeRevs.module.scss';
import Container from '@/components/Container/Container';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import list from './data/list';
import Card from './components/Card/Card';


const HomeRevs = () => {


    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <h2 className={styles.title}>Что говорят пользователи бота</h2>
                    <div className={styles.body}>
                        <Swiper 
                            spaceBetween={25}
                            slidesPerView={3}
                            className={styles.slider}>
                            {
                                list?.map((item,index) => (
                                    <SwiperSlide className={styles.slide} key={index}>
                                        <Card {...item}/>
                                    </SwiperSlide>
                                ))
                            }
                            
                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default HomeRevs;