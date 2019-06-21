/**
 *  Created by pw on 2019-06-21 14:12.
 */
import { observable } from 'mobx'
import testBannerList from '../../test/banner.json'

const hotStore = observable({
  bannerList: [...testBannerList],

  getBannerList() {
    return this.bannerList
  }
})

export default hotStore
