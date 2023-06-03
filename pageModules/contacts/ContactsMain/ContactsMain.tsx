import styles from './ContactsMain.module.scss';
import Container from '@/components/Container/Container';
import Input from '@/components/Input/Input';
import {Row, Col} from 'antd';
import Text from '@/components/Text/Text';
import {useState, useEffect} from 'react';
import Button from '@/components/Button/Button';

const ContactsMain = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [theme, setTheme] = useState('')
    const [text, setText] = useState('')

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.descr}>
                        <h2 className={styles.title}>Контакты</h2>
                        <div className={styles.text}>
                            <p>
                            Большинство ответов на вопросы представлено в нашей <a href="" className='def-link'>Базе знаний</a>. Если вы не нашли ответ на свой вопрос, можете связаться с нами способами, представленными ниже.
                            </p>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.info_item}><a href="">@adtbot_support</a></div>
                            <div className={styles.info_item}><a href="">support@adtbot.com</a></div>
                        </div>
                    </div>
                    <div className={styles.main}>
                        <h2 className={styles.title}>Форма обратной связи</h2>
                        <div className={styles.body}>
                            <Row gutter={[20,20]}>
                                <Col span={12}>
                                    <Input
                                        label='Имя'
                                        placeholder='Bessie Cooper'
                                        />
                                </Col>
                                <Col span={12}>
                                    <Input
                                        label='E-mail'
                                        placeholder='E-mail Bessie Cooper'
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        label='Тема'
                                        placeholder='Bessie Cooper'
                                        />
                                </Col>
                                <Col span={24}>
                                    <Text
                                        height={90}
                                        label='Сообщение'
                                        placeholder='Bessie Cooper'
                                        />
                                </Col>
                                <Col span={24}>
                                    <div className={styles.action}>
                                        <div className={styles.captcha}></div>
                                        <Button
                                            text='Отправить'
                                            variant={'blue'}
                                            />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactsMain;