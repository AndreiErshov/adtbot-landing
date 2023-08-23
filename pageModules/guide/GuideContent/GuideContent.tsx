import styles from './GuideContent.module.scss';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import img from '@/public/assets/guide-content.png';
import { useState } from 'react';

const GuideContent = () => {


    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.descr}>
                        <h2 className={styles.title}>Что внутри нашего руководства по заработку на анонсах листингов</h2>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <span>1</span>Как и почему мы пришли к этому методу
                            </li>
                            <li className={styles.item}>
                                <span>2</span>Полное описание метода
                            </li>
                            <li className={styles.item}>
                                <span>3</span>Сколько можно зарабатывать
                            </li>
                            <li className={styles.item}>
                                <span>4</span>Пошаговый план внедрения для вас
                            </li>
                        </ul>
                    </div>
                    <div className={styles.img}>
                        <Image
                            alt=''
                            src={img}
                            placeholder='blur'
                            />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default GuideContent;