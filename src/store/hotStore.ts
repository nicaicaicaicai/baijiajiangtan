/**
 *  Created by pw on 2019-06-21 14:12.
 */
import { observable, action } from 'mobx'

export default class HotStore {
  @observable
  bannerList: []

  @action
  getBannerList = () => {
    return this.bannerList
  }
}
