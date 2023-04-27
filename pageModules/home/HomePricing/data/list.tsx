import { billingItemPropsTypes } from "../types"
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
                    {link: '/', label: 'Binance', icon: binance}
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    {link: '/', label: 'Gate', icon: gate},
                    {link: '/', label: 'MEXC', icon: mexc},
                    {link: '/', label: 'KuCoin', icon: kucoin},
                    {link: '/', label: 'Huobi', icon: huobi},
                ]
            }
        ],
    },
    {
        id: 2,
        isTop: false,
        title: 'Standart',
        isCurrent: false,
        price: 10,
        list: [
            {
                head: 'Мониторинг анонсов листингов на 3 биржах:',
                ul: [
                    {link: '/', label: 'Binance', icon: binance},
                    {link: '/', label: 'Coinbase', icon: coinbase},
                    {link: '/', label: 'Huobi', icon: huobi},
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    {link: '/', label: 'Gate', icon: gate},
                    {link: '/', label: 'MEXC', icon: mexc},
                    {link: '/', label: 'KuCoin', icon: kucoin},
                    {link: '/', label: 'Huobi', icon: huobi},
                ]
            }
        ]
    },
    {
        id: 3,
        isTop: true,
        title: 'Pro',
        isCurrent: false,
        price: 20,
        list: [
            {
                head: 'Мониторинг анонсов листингов на 5 биржах:',
                ul: [
                    {link: '/', label: 'Binance', icon: binance},
                    {link: '/', label: 'Coinbase', icon: coinbase},
                    {link: '/', label: 'Huobi', icon: huobi},
                    {link: '/', label: 'KuCoin', icon: kucoin},
                    {link: '/', label: 'OKX', icon: okx},
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    {link: '/', label: 'Gate', icon: gate},
                    {link: '/', label: 'MEXC', icon: mexc},
                    {link: '/', label: 'KuCoin', icon: kucoin},
                    {link: '/', label: 'Huobi', icon: huobi},
                ]
            }
        ]
    },
    {
        id: 4,
        isTop: false,
        title: 'Premium',
        isCurrent: false,
        price: 30,
        list: [
            {
                head: 'Мониторинг анонсов листингов на 10 биржах:',
                ul: [
                    {link: '/', label: 'Binance', icon: binance},
                    {link: '/', label: 'Coinbase', icon: coinbase},
                    {link: '/', label: 'Huobi', icon: huobi},
                    {link: '/', label: 'KuCoin', icon: kucoin},
                    {link: '/', label: 'OKX', icon: okx},
                    {link: '/', label: 'Kraken', icon: kraken},
                    {link: '/', label: 'Bitstamp', icon: bitstamp},
                    {link: '/', label: 'Bitfinex', icon: bitfinex},
                    {link: '/', label: 'Bybit', icon: bybit},
                    {link: '/', label: 'Upbit', icon: upbit},
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    {link: '/', label: 'Gate', icon: gate},
                    {link: '/', label: 'MEXC', icon: mexc},
                    {link: '/', label: 'KuCoin', icon: kucoin},
                    {link: '/', label: 'Huobi', icon: huobi},
                ]
            }
        ]
    }
]

export default list;