import styles from './BillingList.module.scss';
import { billingItemPropsTypes } from '../../types';
import BillingItem from '../BillingItem/BillingItem';
import {FC} from 'react';

import binance from '@/public/assets/binance.png';
import coinbase from '@/public/assets/coinbase.png';
import kraken from '@/public/assets/kraken.png';
import kucoin from '@/public/assets/kucoin.png';
import bitstamp from '@/public/assets/bitstamp.png';
import bitfinex from '@/public/assets/bitfinex.png';
import okx from '@/public/assets/okx.png';
import bybit from '@/public/assets/bybit.png';
import upbit from '@/public/assets/upbit.png';
import huobi from '@/public/assets/huobi.png';
import gate from '@/public/assets/gate.png';
import mexc from '@/public/assets/mexc.png';





const list: billingItemPropsTypes[] = [
    {
        id: 1,
        isTop: false,
        title: 'Free',
        isCurrent: true,
        price: 0,
        list: [
            {
                head: 'Мониторинг анонсов листингов на 1 бирже:',
                ul: [
                    {link: 'http://adtbot.com/binance', label: 'Binance', icon: binance}
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    {link: 'http://adtbot.com/gate', label: 'Gate', icon: gate},
                    {link: 'http://adtbot.com/mexc', label: 'MEXC', icon: mexc},
                    {link: 'http://adtbot.com/kucoin', label: 'KuCoin', icon: kucoin},
                    {link: 'http://adtbot.com/huobi', label: 'Huobi', icon: huobi},
                ]
            }
        ],
    },
    {
        id: 2,
        isTop: false,
        title: 'Standart',
        isCurrent: false,
        price: 9,
        list: [
            {
                head: 'Мониторинг анонсов листингов на 3 биржах:',
                ul: [
                    {link: 'http://adtbot.com/binance', label: 'Binance', icon: binance},
                    {link: 'https://coinbase.com/', label: 'Coinbase', icon: coinbase},
                    {link: 'http://adtbot.com/huobi', label: 'Huobi', icon: huobi},
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    {link: 'http://adtbot.com/gate', label: 'Gate', icon: gate},
                    {link: 'http://adtbot.com/mexc', label: 'MEXC', icon: mexc},
                    {link: 'http://adtbot.com/kucoin', label: 'KuCoin', icon: kucoin},
                    {link: 'http://adtbot.com/huobi', label: 'Huobi', icon: huobi},
                ]
            }
        ]
    },
    {
        id: 3,
        isTop: true,
        title: 'Pro',
        isCurrent: false,
        price: 19,
        list: [
            {
                head: 'Мониторинг анонсов листингов на 5 биржах:',
                ul: [
                    {link: 'http://adtbot.com/binance', label: 'Binance', icon: binance},
                    {link: 'https://coinbase.com/', label: 'Coinbase', icon: coinbase},
                    {link: 'http://adtbot.com/huobi', label: 'Huobi', icon: huobi},
                    {link: 'http://adtbot.com/kucoin', label: 'KuCoin', icon: kucoin},
                    {link: 'http://adtbot.com/okx', label: 'OKX', icon: okx},
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    {link: 'http://adtbot.com/gate', label: 'Gate', icon: gate},
                    {link: 'http://adtbot.com/mexc', label: 'MEXC', icon: mexc},
                    {link: 'http://adtbot.com/kucoin', label: 'KuCoin', icon: kucoin},
                    {link: 'http://adtbot.com/huobi', label: 'Huobi', icon: huobi},
                ]
            }
        ]
    },
    {
        id: 4,
        isTop: false,
        title: 'Premium',
        isCurrent: false,
        price: 29,
        list: [
            {
                head: 'Мониторинг анонсов листингов на 10 биржах:',
                ul: [
                    {link: 'http://adtbot.com/binance', label: 'Binance', icon: binance},
                    {link: 'https://coinbase.com/', label: 'Coinbase', icon: coinbase},
                    {link: 'http://adtbot.com/huobi', label: 'Huobi', icon: huobi},
                    {link: 'http://adtbot.com/kucoin', label: 'KuCoin', icon: kucoin},
                    {link: 'http://adtbot.com/okx', label: 'OKX', icon: okx},
                    {link: 'https://www.kraken.com/', label: 'Kraken', icon: kraken},
                    {link: 'https://www.bitstamp.net/', label: 'Bitstamp', icon: bitstamp},
                    {link: 'http://adtbot.com/bitfinex', label: 'Bitfinex', icon: bitfinex},
                    {link: 'http://adtbot.com/bybit', label: 'Bybit', icon: bybit},
                    {link: 'https://upbit.com/', label: 'Upbit', icon: upbit},
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    {link: 'http://adtbot.com/gate', label: 'Gate', icon: gate},
                    {link: 'http://adtbot.com/mexc', label: 'MEXC', icon: mexc},
                    {link: 'http://adtbot.com/kucoin', label: 'KuCoin', icon: kucoin},
                    {link: 'http://adtbot.com/huobi', label: 'Huobi', icon: huobi},
                ]
            }
        ]
    }
]


const BillingList:FC<{
    active?: number,
    onChange?: (id: number) => any,
    load?: boolean
}> = ({
    active,
    onChange,
    load
}) => {


    return (
        <div className={styles.wrapper}>
        
            <div className={`${styles.list} custom-scroll-horizontal`}>
                {
                    list?.map((item,index) => (
                        <div className={styles.item} key={index}>
                            <BillingItem
                                {...item}
                                load={load}
                                isCurrent={active === item.id}
                                onSelect={(id) => onChange && onChange(id)}
                                />
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default BillingList;