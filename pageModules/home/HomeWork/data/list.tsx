import { homeWorkCardType } from "../types";
import img1 from '@/public/assets/home-work-1.svg'
import img2 from '@/public/assets/home-work-2.svg'
import img3 from '@/public/assets/home-work-3.svg'
import img4 from '@/public/assets/home-work-4.svg'

const list: homeWorkCardType[] = [
    {
        icon: img1,
        text: <>
            <p>
            Мониторинг разделов анонсов листингов топ 10 бирж с периодичностью 5 запросов в секунду 24/7
            </p>
        </>,
    },
    {
        icon: img2,
        text: <>
            <p>
            В момент выхода анонса листинга — мгновенная покупка на одной из бирж, где эта монета уже торгуется
            </p>
        </>
    },
    {
        icon: img3,
        text: <>
            <p>
            Автоматическая продажа на установленный Take Profit или продажа вручную
            </p>
        </>
    },
    {
        icon: img4,
        text: <>
            <p>
            Профит! Теперь вы научились катать палкоросты
            </p>
        </>
    }
]

export default list;