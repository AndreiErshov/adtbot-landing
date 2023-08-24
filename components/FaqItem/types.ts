export type faqItemPropsType = {
    isActive?: boolean,
    setActiveId: (...args: any[]) => any
    id: number,
    activeId?: number,
    
    head?: string,
    body?: React.ReactNode
}
