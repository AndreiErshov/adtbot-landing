import styles from './GuideHero.module.scss';
import Image from 'next/image';
import Container from '@/components/Container/Container';
import img from '@/public/assets/guide-hero.png';
import Button from '@/components/Button/Button';
import GuideModal from '@/modals/GuideModal/GuideModal';
import { useState } from 'react';
import GuideFormModal from '@/modals/GuideFormModal/GuideFormModa';


const GuideHero = () => {
    const [modal, setModal] = useState(false)

    return (
        <div className={styles.wrapper}>
            <GuideFormModal
                open={modal}
                onCancel={() => setModal(false)}
                />
            <Container>
                <div className={styles.in}>
                    <div className={styles.main}>
                        <h1 className={styles.title}>
                        Увеличьте свой доход на криптовалюте с помощью нашего пошагового алгоритма по заработку на <span>анонсах листингов</span> с профитом более 30% в месяц на дистанции
                        </h1>
                        <div className={styles.text}>
                            <p>
                            Ознакомьтесь с нашим стабильным методом заработка на криптовалюте, который практически на автомате приносит профит вот уже более 2-х лет
                            </p>
                        </div>
                        <div className={styles.action}>
                            <Button
                                onClick={() => setModal(true)}
                                style={{paddingTop: 16, paddingBottom: 16}}
                                text='Пришлите мне руководство'
                                />
                        </div>
                    </div>
                    <div className={styles.img}>
                        <div className={styles.img_el}>
                            <Image  
                                src={img}
                                placeholder={'blur'}
                                // width={450}
                                // height={450}
                                alt=''
                                />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default GuideHero;