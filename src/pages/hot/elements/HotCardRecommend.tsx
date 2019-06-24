/**
 *  Created by pw on 2019-06-24 12:02.
 */

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import './HotCardRecommend.less'
import Card from '../../../components/Card'
import { HotStoreIF, HotCardInterface } from '../../../interface/BannerInterface'

const EVERY_ROW_COUNT = 3

interface Props {
  hotStore: HotStoreIF
}

interface State {
  dataSource: Array<HotCardInterface[]>
}

@inject('hotStore')
@observer
export default class HotCardRecommend extends Component<Props, State> {
  state = { dataSource: [] }

  componentDidMount() {
    this.props.hotStore.getHotList()
    const list = this.props.hotStore.hotList
    let dataSource = new Array<HotCardInterface[]>()
    for (let index = 0; index < list.length; index = index + EVERY_ROW_COUNT) {
      const row = list.slice(index, index + EVERY_ROW_COUNT)
      dataSource.push(row)
    }
    this.setState({ dataSource })
  }

  handleCardClick = (card: HotCardInterface) => {
    return Taro.navigateTo({
      url: `/pages/detail/index?bookId=${card.BookID}`
    })
  }

  render() {
    const { dataSource } = this.state
    return (
      <View className="hot_card_recommend">
        {dataSource.map((cardList: HotCardInterface[], index: number) => {
          return (
            <View key={index} className="hot_row">
              {cardList.map((card: HotCardInterface) => {
                return (
                  <Card key={card.BookID} card={card} className={'card'} onClick={() => this.handleCardClick(card)} />
                )
              })}
            </View>
          )
        })}
      </View>
    )
  }
}
