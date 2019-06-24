export interface DetailIF {
  SectionUrllist?: any
  SectionID: number
  SectionName: string
  SectionLinkURL: string
  BookID: number
  BookName: string
  PicCount: number
  Sort: number
  PictureClassName: string
}

export interface DetailStore {
  detailItems: DetailIF[]
  getDetailItemList: Function
  getDetailById: Function
}
