
export type buttonVariants = 'default' | 'blue' | 'simple' | 'danger' | 'footer'

export type buttonPropsTypes = {
    text?: string,
    beforeIcon?: React.ReactNode,
    afterIcon?: React.ReactNode,
    onClick?: React.ReactEventHandler | undefined,
    disabled?: boolean,
    variant?: buttonVariants,
    style?: React.CSSProperties,
    fill?: boolean,
    load?: boolean,
    rounded?: boolean,
    className?: string
}