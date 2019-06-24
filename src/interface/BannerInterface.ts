/**
 *  Created by pw on 2019-06-21 16:40.
 */
export interface BannerInterface {
  TopicID: number
  TopicName: string
  TopicIconUrl: string
  TopicDescription: string
  BookIDs: string
  TopicType: string
}

export interface HotCardInterface {
  BookID: number
  BookName: string
  BookDescription: string
  BookIconOtherURL: string
  BookIconSelfURL: string
  BookAuthor: string
  BookCreationDate: string
  BookUpdateDate: string
  BookUpdateSection: string
  BookExceptUpdateDate?: any
  FistIndex: string
  BookState: number
  BookStateName: string
  BookColor: number
  BookColorName?: any
  BookClickCount: number
  BookDownCount: number
  BookLinkURL: string
  CatalogID: number
  CatalogName: string
  SiteID: number
  SiteName: string
}

export interface HotStoreIF {
  bannerList: BannerInterface[]
  getBannerList: Function
  hotList: HotCardInterface[]
  getHotList: Function
  getDetailById: Function
}
