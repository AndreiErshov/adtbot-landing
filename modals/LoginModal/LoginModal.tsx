import Input from '@/components/Input/Input';
import styles from './LoginModal.module.scss';
import { Modal, ModalFuncProps, Row, Col } from 'antd';
import {useState, FC, useEffect} from 'react';
import Checkbox from '@/components/Checkbox/Checkbox';
import Button from '@/components/Button/Button';
import ApiService from '@/service/apiService';
import Reaptcha from 'reaptcha';

interface I {

}
const service = new ApiService()

const LoginModal:FC<ModalFuncProps & I> = (props) => {
    const [recapRef, setRecapRef] = useState<any>(null)

    const [load, setLoad] = useState(false)
    const [captcha_token, setcaptcha_token] = useState('')
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const [save, setSave] = useState('')
    

    const onSubmit = () => {

    }

    return (
        <Modal
            {...props}
            width={400}
            className={`${styles.wrapper} modal`}
            >
            <h2 className={styles.title}>Вход</h2>
            <div className={styles.body}>
                <Row gutter={[15,15]}>
                    <Col span={24}>
                        <Input
                            label='Email'
                            placeholder='debra.holt@example.com'
                            />
                    </Col>
                    <Col span={24}>
                        <Input
                            label='Пароль'
                            placeholder='*************************'
                            type='password'
                            />
                        <div className={styles.fg}>
                            <div className={styles.save}>
                                <Checkbox
                                    text='Запомнить меня'
                                    id='saveme'
                                    />
                            </div>
                            <div className={styles.lk}>
                                <a href="" className='def-link'>Забыли пароль?</a>
                            </div>
                        </div>
                    </Col>
                    <Col span={24}>
                        <Reaptcha
                            sitekey={'6Ld4-E4lAAAAANg8LEy8oig45CXsovYV9z5Wbxx6'}
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
                    </Col>
                    <Col span={24}>
                        <Button
                            fill
                            text='Войти'
                            />
                    </Col>
                    <Col span={24}>
                        <div className={styles.ex}>
                        У вас нет аккаунта? <a href="#" className='def-link'>Создайте аккаунт</a>
                        </div>
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default LoginModal