/**
 *  Created by pw on 2019-06-21 14:18.
 */
import { observable, action } from 'mobx'

export default class HotStore {
  @observable
  categoryList: []

  @action
  getCategoryList = () => {
    return this.categoryList
  }
}
