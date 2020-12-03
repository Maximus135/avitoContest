export type NewsType = {
    id: number
    title: string
    rating: number
    author: string
    date: number
    type: string
}

export type NewsItemType = {
    id: number
    link: string
    title: string
    date: number
    author: string
    commentsCounter: number
    subCommentsId: Array<number>
}