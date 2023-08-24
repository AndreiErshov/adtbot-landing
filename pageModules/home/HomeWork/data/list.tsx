import { homeWorkCardType } from "../types";
import img1 from '@/public/assets/home-work-1.svg'
import img2 from '@/public/assets/home-work-2.svg'
import img3 from '@/public/assets/home-work-3.svg'
import img4 from '@/public/assets/home-work-4.svg'
import bg_img1 from '@/public/assets/home-work-bg1.svg'
import bg_img2 from '@/public/assets/home-work-bg2.svg'
import bg_img3 from '@/public/assets/home-work-bg3.svg'
import bg_img4 from '@/public/assets/home-work-bg4.svg'
import {BiLike} from 'react-icons/bi';
// BiLike

const list: homeWorkCardType[] = [
    {
        icon: img1,
        style: {backgroundImage: `url(${bg_img1.src})`, backgroundPosition: 'right 5px top 5px !important'},
        text: <>
            <p>
            Мониторинг разделов анонсов листингов топ 10 бирж с периодичностью 5 запросов в секунду 24/7
            </p>
        </>,
    },
    {
        icon: img2,
        style: {backgroundImage: `url(${bg_img2.src})`},
        text: <>
            <p>
            В момент выхода анонса листинга — мгновенная покупка на одной из бирж, где эта монета уже торгуется
            </p>
        </>
    },
    {
        icon: img3,
        style: {backgroundImage: `url(${bg_img3.src})`, backgroundPosition: 'right 15px top 15px !important'},
        text: <>
            <p>
            Автоматическая продажа на установленный Take Profit или продажа вручную
            </p>
        </>
    },
    {
        icon: img4,
        style: {backgroundImage: `url(${bg_img4.src})`},
        corner_icon: () => <BiLike/>,
        reverse_on_mobile: false,
        text: <>
            <p>
            Профит! Теперь вы научились катать палкоросты
            </p>
        </>
    }
]

export default list;