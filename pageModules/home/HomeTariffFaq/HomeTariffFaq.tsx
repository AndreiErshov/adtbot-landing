import styles from './HomeTariffFaq.module.scss';
import Container from '@/components/Container/Container';
import Item from '@/components/FaqItem/FaqItem';
import { faqItemPropsType } from '@/components/FaqItem/types';
import {FC, useState, useEffect} from 'react';

const list = [
    {
        id: 1,
        head: 'Как выбрать оптимальный тариф?',
        body: <>
            <p>Тарифы отличаются количеством бирж для мониторинга анонсов листингов. От 1 до 10 бирж на мониторинге.</p>
            <p>Анонсы листингов на каждой бирже выходят не часто, поэтому, чем больше бирж вы подключите, тем больше ботов отработает и, соответственно, ваш профит будет выше.</p>
        </>
    },
    {
        id: 2,
        head: 'Как перейти на другой тариф?',
        body: <>
            <p>
                Чтобы сменить тариф, определите необходимый вам набор бирж для мониторинга, а затем выполните следующие шаги:
            </p>
            <p>
                В личном кабинете выберите вкладку «Баланс / Тарифы» и переключитесь на подходящий тариф нажатием на кнопку «Выбрать тариф».
            </p>
        </>
    },
    {
        id: 3,
        head: 'Как производится оплата?',
        body: <>
            <p>
            Оплата производится в USDT (через TRC20 и ERC20 на выбор). В личном кабинете при пополнении баланса, вам будет предложен наш кошелек. Переведете на него средства и внесите хеш транзакции. После подтверждения в блокчейн, ваш баланс будет пополнен.
            </p>
        </>
    },
    {
        id: 4,
        head: 'Как производятся списания?',
        body: <>
            <p>
            Списания с вашего внутреннего баланса производятся ежедневно. Сумма списания соответствует текущему тарифу.
            </p>
        </>
    },
    {
        id: 5,
        head: 'Что, если я передумаю?',
        body: <>
            <p>
            Вы можете остановить автосписания и активировать их снова, когда решите вернуться к работе с ADTBot. Это осуществляется через соответствующий запрос в службу поддержки.
            </p>
        </>
    },
    {
        id: 6,
        head: 'Можно ли вывести средства с внутреннего баланса?',
        body: <>
            <p>
            Нет. Средства с внутреннего баланса платформы вывести нельзя.
            </p>
        </>
    }
]

const HomeTariffFaq = () => {
    const [activeId, setActiveId] = useState<number>(0)

    useEffect(() => {
        console.log(activeId)
    }, [activeId])
    

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <h2 className={styles.title}>Часто задаваемые вопросы</h2>
                    <div className={styles.body}>
                        {
                            list?.map((item, index) => (
                                <Item 
                                    {...item}
                                    activeId={activeId}
                                    setActiveId={setActiveId}
                                    isActive={item.id === activeId} 
                                    key={item.id}/>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeTariffFaq;