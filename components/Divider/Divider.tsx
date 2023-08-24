import styles from './Divider.module.scss';

const Divider = () => {

    return (
       <div
            className={styles.wrapper}
        >
            <hr
                style={{
                    color: "#6F91EE",
                    backgroundColor: "#6F91EE",
                    height: 3,
                }}
            />
        </div>
    )
}

export default Divider;