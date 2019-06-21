/**
 *  Created by pw on 2019-06-21 14:17.
 */
import { observable, action } from 'mobx'

export default class HotStore {
  @observable
  dailyList: []

  @action
  getDailyList = () => {
    return this.dailyList
  }
}
