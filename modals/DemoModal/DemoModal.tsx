import {Modal, ModalFuncProps} from 'antd'
import {FC} from 'react'
import styles from './DemoModal.module.scss';

const DemoModal:FC<ModalFuncProps> = (props) => {

    return (
        <Modal
            {...props}
            open
            className={`modal ${styles.wrapper}`}
            >
            <div className={styles.body}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oznr-1-poSU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </Modal>
    )
}


export default DemoModal;