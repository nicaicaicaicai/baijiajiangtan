/**
 *  Created by pw on 2019-06-21 14:12.
 */
import { observable } from 'mobx'
import { HotCardInterface } from '../interface/BannerInterface'
import testBannerList from '../../test/banner.json'
import testHotList from '../../test/hot.json'

const hotStore = observable({
  bannerList: [...testBannerList],
  hotList: [...testHotList],

  getBannerList() {
    return this.bannerList
  },

  getHotList() {
    return this.hotList
  },
  getDetailById(bookId: string): HotCardInterface {
    const detail = this.hotList.find((item: HotCardInterface) => item.BookID === Number(bookId))
    return detail || {}
  }
})

export default hotStore
