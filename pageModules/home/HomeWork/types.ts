import { StaticImageData } from "next/image"

export type homeWorkCardType = {
    icon?: StaticImageData,
    text?: React.ReactNode,
    link?: string | URL,
    corner_icon?: () => React.ReactNode,
    reverse_on_mobile?: boolean,
    style?: React.CSSProperties
}