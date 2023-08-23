import styles from './GuideStart.module.scss';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import img from '@/public/assets/guide-start.png';
import Button from '@/components/Button/Button';
import GuideFormModal from '@/modals/GuideFormModal/GuideFormModa';
import { useState } from 'react';

const GuideStart = () => {
    const [modal, setModal] = useState(false)

    return (
        <div className={styles.wrapper}>
            <GuideFormModal
                open={modal}
                onCancel={() => setModal(false)}
                />
            <Container>
                <div className={styles.in}>
                    <div className={styles.img}>
                        <Image
                            alt=''
                            src={img}
                            />
                    </div>
                    <div className={styles.descr}>
                        <h2 className={styles.title}>
                            Готовы начать зарабатывать на анонсах листингов криптовалют?
                        </h2>
                        <div className={styles.text}>
                            <p>
                            Скачайте руководство сейчас и поднимите свой заработок на криптовалюте на новый уровень.
                            </p>
                        </div>
                        <div className={styles.action}>
                            <Button
                                onClick={() => setModal(true)}
                                variant={'blue'}
                                style={{paddingTop: 16, paddingBottom: 16}}
                                text='Пришлите мне руководство'
                                />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default GuideStart;