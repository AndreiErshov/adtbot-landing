import styles from './HomeExchange.module.scss';
import Container from '@/components/Container/Container';
import {Row, Col} from 'antd';
import Image from 'next/image';

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


const HomeExchange = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <h2 className={styles.title}>
                    С какими биржами работает бот
                    </h2>
                    <div className={styles.body}>
                        <div className={styles.part}>
                            <div className={styles.head}>
                            Мониторинг анонсов листингов:
                            </div>
                            <div className={styles.list}>
                                <Row gutter={[15,15]}>
                                    <Col span={12}>
                                        <a href="" className={styles.item}>
                                            <div className={styles.icon}><Image src={binance} alt=''/></div>
                                            <div className={styles.label}>Binance</div>
                                        </a>
                                    </Col>
                                    <Col span={12}>
                                        <a href="" className={styles.item}>
                                            <div className={styles.icon}><Image src={bitfinex} alt=''/></div>
                                            <div className={styles.label}>Bitfinex</div>
                                        </a>
                                    </Col>
                                    <Col span={12}>
                                        <a href="" className={styles.item}>
                                            <div className={styles.icon}><Image src={coinbase} alt=''/></div>
                                            <div className={styles.label}>Coinbase</div>
                                        </a>
                                    </Col>
                                    <Col span={12}>
                                        <a href="" className={styles.item}>
                                            <div className={styles.icon}><Image src={okx} alt=''/></div>
                                            <div className={styles.label}>OKX</div>
                                        </a>
                                    </Col>
                                    <Col span={12}>
                                        <a href="" className={styles.item}>
                                            <div className={styles.icon}><Image src={kraken} alt=''/></div>
                                            <div className={styles.label}>Kraken</div>
                                        </a>
                                    </Col>
                                    <Col span={12}>
                                        <a href="" className={styles.item}>
                                            <div className={styles.icon}><Image src={bybit} alt=''/></div>
                                            <div className={styles.label}>Bybit</div>
                                        </a>
                                    </Col>
                                    <Col span={12}>
                                        <a href="" className={styles.item}>
                                            <div className={styles.icon}><Image src={kucoin} alt=''/></div>
                                            <div className={styles.label}>KuCoin</div>
                                        </a>
                                    </Col>
                                    <Col span={12}>
                                        <a href="" className={styles.item}>
                                            <div className={styles.icon}><Image src={upbit} alt=''/></div>
                                            <div className={styles.label}>Upbit</div>
                                        </a>
                                    </Col>
                                    <Col span={12}>
                                        <a href="" className={styles.item}>
                                            <div className={styles.icon}><Image src={bitstamp} alt=''/></div>
                                            <div className={styles.label}>Bitstamp</div>
                                        </a>
                                    </Col>
                                    <Col span={12}>
                                        <a href="" className={styles.item}>
                                            <div className={styles.icon}><Image src={huobi} alt=''/></div>
                                            <div className={styles.label}>Huobi</div>
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className={styles.part}>
                            <div className={styles.head}>Автоматическая покупка в момент анонса:</div>
                            <div className={styles.list}>
                                <Row gutter={[15,15]}>
                                    <Col span={24}>
                                        <a href="" className={styles.item}>
                                            <div className={styles.icon}><Image src={gate} alt=''/></div>
                                            <div className={styles.label}>Gate</div>
                                        </a>
                                    </Col>
                                    <Col span={24}>
                                        <a href="" className={styles.item}>
                                            <div className={styles.icon}><Image src={mexc} alt=''/></div>
                                            <div className={styles.label}>MEXC</div>
                                        </a>
                                    </Col>
                                    <Col span={24}>
                                        <a href="" className={styles.item}>
                                            <div className={styles.icon}><Image src={kucoin} alt=''/></div>
                                            <div className={styles.label}>KuCoin</div>
                                        </a>
                                    </Col>
                                    <Col span={24}>
                                        <a href="" className={styles.item}>
                                            <div className={styles.icon}><Image src={huobi} alt=''/></div>
                                            <div className={styles.label}>Huobi</div>
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default HomeExchange;