/**
 *  Created by pw on 2019-06-24 15:51.
 */
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import { DetailIF, DetailStore } from '../../interface/DetailInterface'

interface Props {
  detailStore: DetailStore
}

@inject('detailStore')
@observer
export default class BookDetailList extends Component<Props> {
  componentDidMount() {
    this.props.detailStore.getDetailItemList()
  }

  handleClick = (item: DetailIF) => {
    return Taro.navigateTo({
      url: `/pages/detail/PlayAudio?bookId=${item.BookID}&sectionId=${item.SectionID}`
    })
  }

  render() {
    return (
      <View>
        <AtList>
          {this.props.detailStore.detailItems.map((item: DetailIF) => {
            return <AtListItem key={item.SectionID} title={item.SectionName} onClick={() => this.handleClick(item)} />
          })}
        </AtList>
      </View>
    )
  }
}
