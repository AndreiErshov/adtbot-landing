import styles from './GuideFormModal.module.scss';

import { ChangeEvent, FC, useState } from 'react'
import {Modal, ModalFuncProps, Row, Col} from 'antd';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';

const GuideFormModal:FC<ModalFuncProps> = (props) => {
    const {onCancel} = props
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [load, setLoad] = useState(false)

    const onSubmit = () => {
        if(email && name) {
            // setLoad(true)
        }
    }
    const onClose = () => {
        setEmail('')
        setName('')
        onCancel && onCancel()   
    }

  return (
    <Modal
        {...props}
        onCancel={onClose}
        className={`${styles.wrapper} modal`}
        >
        <Row gutter={[20,20]}>
            <Col span={24}>
                <h2 className={styles.title}>Куда нам отправить руководство?</h2>
            </Col>
            <Col span={24}>
                <Row gutter={[15,15]}>
                    <Col span={24}>
                        <Input
                            placeholder='Andriy'
                            label='Ваше реальное имя'
                            value={name}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                            />
                    </Col>
                    <Col span={24}>
                        <Input
                            value={email}
                            onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            type='email'
                            placeholder='debra.holt@example.com'
                            label='Email'
                            />
                    </Col>
                    <Col span={24}>
                        <Button
                            text='Пришлите мне руководство'
                            fill
                            disabled={!(email && name)}
                            onClick={onSubmit}
                            load={load}
                            style={{padding: 16}}
                            />
                    </Col>
                    <Col span={24}>
                        <div className={styles.ex}>
                        Политика конфиденциальности: Мы ненавидим спам и обещаем хранить ваш адрес электронной почты в безопасности.
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Modal>
  )
}

export default GuideFormModal;