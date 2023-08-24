import Container from '@/components/Container/Container';
import styles from './HomeExp.module.scss';
import Image from 'next/image';
import img1 from '@/public/assets/home-exp-1.png'
import img2 from '@/public/assets/home-exp-2.svg'
import img3 from '@/public/assets/home-exp-3.svg'

const HomeExp = () => {


    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.part}>
                        <div className={styles.main}>
                            <div className={styles.img}>
                                <Image 
                                    src={img1}
                                    alt=''/>
                            </div>
                            <h2 className={styles.title}>Почему так происходит</h2>
                            <div className={styles.text}>
                                <p>
                                Боты круглосуточно парсят рубрики анонсов листингов крупных бирж. В момент выхода анонса листинга, боты ищут данную анонсируемую монету на других биржах. Если она там торгуется, происходит автоматическая покупка этой монеты
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.part}>
                        <div className={styles.ex}>
                            
                            <div className={styles.body}>
                                <h2 className={styles.title}>Все происходит автоматически в считанные секунды</h2>
                                <div className={styles.text}>
                                    <p>
                                    О подобных ботах особо нет информации в паблике. Но… Пора покончить с этим! Мы разработали подобного бота и теперь предлагаем и вам начать зарабатывать на анонсах листингов!
                                    </p>
                                </div>
                            </div>
                            <div className={styles.img}>
                                <Image
                                    src={img2}
                                    alt=''
                                    />
                            </div>
                        </div>
                        <div className={styles.ex}>
                           
                            <div className={styles.body}>
                                <h2 className={styles.title}>Как будем зарабатывать</h2>
                                <div className={styles.text}>
                                    <p>
                                    Как правило, в момент анонса листинга на крупных биржах, на других биржах, где эта монета уже торгуется, происходит резкое увеличение ее стоимости.
                                    </p>
                                    <p>
                                    Мы будем первыми, ведь, наш бот делает 5 запросов в секунду 24/7, поэтому, мы купим в самом низу и продадим после вызванного анонсом пампа. И все это — Автоматически!
                                    </p>
                                </div>
                            </div>
                            <div className={styles.img}>
                                <Image 
                                    src={img3}
                                    alt=''
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeExp;