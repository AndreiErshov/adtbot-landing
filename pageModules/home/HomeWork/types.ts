import { StaticImageData } from "next/image"

export type homeWorkCardType = {
    icon?: StaticImageData,
    text?: React.ReactNode,
    link?: string | URL
}