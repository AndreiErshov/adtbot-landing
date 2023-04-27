import styles from './HomeWork.module.scss';
import Container from '@/components/Container/Container';
import Card from './components/Card/Card';
import {Row, Col} from 'antd';
import list from './data/list';


const HomeWork = () => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <h2 className={styles.title}>
                        Как работает бот
                    </h2>
                    <div className={styles.body}>
                        <Row gutter={[25,25]}>
                            {
                                list?.map((item,index) => (
                                    <Col span={6} key={index}>
                                        <Card {...item}/>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default HomeWork;