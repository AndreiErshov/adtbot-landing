import styles from './FaqItem.module.scss';
import {FC, useRef, useEffect, useState} from 'react';
import { faqItemPropsType } from './types';
import {FiChevronDown} from 'react-icons/fi';

const FaqItem:FC<faqItemPropsType> = ({
    isActive,
    setActiveId,
    activeId,
    id,
    head,
    body
}) => {
    const bodyRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState<number>(0)

    useEffect(() => {
        (bodyRef && bodyRef?.current) && setHeight(bodyRef?.current?.scrollHeight)
    }, [bodyRef])


    return (
        <div className={`${styles.wrapper} ${isActive ? styles.active : ''}`} >
            <div className={styles.head} onClick={() => {
                // console.log(activeId)
                if(activeId === 0) {
                    setActiveId(id)
                }
                if(activeId === id) {
                    setActiveId(0)
                } else {
                    setActiveId(id)
                }
                
            }}>
                <div className={styles.label}>{head}</div>
                <div className={styles.icon}><FiChevronDown/></div>
            </div>
            <div className={styles.body} ref={bodyRef} style={{height: isActive ? height : 0}}>
                <div className={styles.in}>
                    {body}
                </div>
            </div>
        </div>
    )
}

export default FaqItem;