import styles from './ContactsMain.module.scss';
import Container from '@/components/Container/Container';
import Input from '@/components/Input/Input';
import {Row, Col} from 'antd';
import Text from '@/components/Text/Text';
import {useState, useEffect} from 'react';
import Button from '@/components/Button/Button';
import Reaptcha from 'reaptcha';

const ContactsMain = () => {
    const [recapRef, setRecapRef] = useState<any>(null)
    const [captcha_token, setcaptcha_token] = useState('')

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
                            Большинство ответов на вопросы представлено в нашей <a href="https://adtbot.com/knowledge-base/" className='def-link'>Базе знаний</a>. Если вы не нашли ответ на свой вопрос, можете связаться с нами способами, представленными ниже.
                            </p>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.info_item}><a href="https://t.me/adtbot_support">@adtbot_support</a></div>
                            <div className={styles.info_item}><a href="mailto:support@adtbot.com">support@adtbot.com</a></div>
                        </div>
                    </div>
                    <div className={styles.main}>
                        <h2 className={styles.title}>Форма обратной связи</h2>
                        <div className={styles.body}>
                            <Row gutter={[20,20]}>
                                <Col md={12} span={24}>
                                    <Input
                                        label='Имя'
                                        placeholder='Имя'
                                        />
                                </Col>
                                <Col md={12} span={24}>
                                    <Input
                                        label='Email'
                                        placeholder='Email'
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        label='Тема'
                                        placeholder='Тема'
                                        />
                                </Col>
                                <Col span={24}>
                                    <Text
                                        height={90}
                                        label='Сообщение'
                                        placeholder='Напишите ваше сообщение сюда'
                                        resize={true}
                                        />
                                </Col>
                                <Col span={24}>
                                    <div className={styles.action}>
                                        <div className={styles.captcha}>
                                            <Reaptcha
                                                sitekey={'6Lc3HDcnAAAAAClnzGiSkhZ3xfY-FPTzBhjzH8pK'}
                                                size={'normal'}
                                                className="custom-recap"
                                                ref={e => setRecapRef(e)}
                                                onVerify={e => {
                                                    if(e) {
                                                        setcaptcha_token(e)
                                                    }
                                                }}
                                                onExpire={() => console.log('expired')}
                                            />
                                        </div>
                                        <Button
                                            text='Отправить'
                                            variant={'blue'}
                                            style={{padding: '16px 25px'}}
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