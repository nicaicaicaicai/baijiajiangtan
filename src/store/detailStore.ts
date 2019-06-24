import { observable } from 'mobx'
import orderBy from 'lodash/orderBy'
import { DetailIF } from '../interface/DetailInterface'
import testDetailItems from '../../test/detail.json'

const detailStore = observable({
  detailItems: [],

  getDetailItemList() {
    this.detailItems = orderBy(testDetailItems, 'Sort', 'asc')
    return this.detailItems
  },

  getDetailById(sectionId: string): DetailIF {
    this.detailItems = orderBy(testDetailItems, 'Sort', 'asc')
    return this.detailItems.find((item: DetailIF) => item.SectionID === Number(sectionId))
  }
})

export default detailStore
