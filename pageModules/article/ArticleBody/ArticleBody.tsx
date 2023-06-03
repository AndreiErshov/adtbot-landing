import styles from './ArticleBody.module.scss';
import {FC} from 'react';
import Container from '@/components/Container/Container';

interface IArticle {
    children?: React.ReactNode,
    title?: string
}

const ArticleBody:FC<IArticle> = ({
    title,
    children
}) => {

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.body}>
                        {children}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ArticleBody;