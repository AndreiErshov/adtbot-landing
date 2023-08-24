import styles from './DemoMain.module.scss';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import img from '@/public/assets/home-demo-1.png';
import {Row, Col} from 'antd';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import Text from '@/components/Text/Text';
import {useState} from 'react';

const DemoMain = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [theme, setTheme] = useState('')
    const [text, setText] = useState('')

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.descr}>
                        <h2 className={styles.title}>Демо-доступ</h2>
                        <h2 className={styles.title}>
                        Хотите рассмотреть админку ADTBot более подробно?
                        </h2>
                        <div className={styles.text}>
                            <p>
                            Посмотрите административную панель более детально, чтобы понять как управлять ботом.
                            </p>
                            <p style={{marginTop: '10px'}}>
                            Введите вам действующий Email и реальное имя — на указанную почту будут отправлены доступы.
                            </p>
                        </div>
                        <form action="https://login.sendpulse.com/forms/simple/u/eyJ1c2VyX2lkIjo4Mjg0MjE4LCJhZGRyZXNzX2Jvb2tfaWQiOjIyODUzOSwibGFuZyI6InJ1In0=" method="post">
                            <Row gutter={[20,20]}>
                                <Col span={24}>
                                    <Input
                                        label='Имя'
                                        placeholder='Имя'
                                        type="text"
                                        name="name"
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        label='Email'
                                        placeholder='Email'
                                        type="email"
                                        name="email"
                                        required
                                        />
                                </Col>
                                <input type="hidden" name="sender" value="909fe860-3170-456a-bdf0-97b97a11794f"/>
                                <Col span={24}>
                                    <div className={styles.action}>
                                        <Button
                                            text='Отправить'
                                            variant={'blue'}
                                            style={{padding: '16px 25px'}}
                                            />
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </div>
                    <div className={styles.img}>
                        <Image src={img} alt='' placeholder='blur'/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default DemoMain;