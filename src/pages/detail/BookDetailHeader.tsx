/**
 *  Created by pw on 2019-06-24 16:30.
 */

import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, RichText } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { HotStoreIF, HotCardInterface } from '../../interface/BannerInterface'
import './BookDetailHeader.less'

interface Props {
  hotStore: HotStoreIF
  bookId: string
}

@inject('hotStore')
@observer
export default class BookDetailHeader extends Component<Props> {
  render() {
    const { bookId } = this.props
    const bookDetail: HotCardInterface = this.props.hotStore.getDetailById(bookId)
    return (
      <View className="book_detail_header">
        <View className="header">
          <Image className="image" src={bookDetail.BookIconOtherURL} />
          <View className="description_container">
            <Text className="description">{`作者：${bookDetail.BookAuthor}`}</Text>
            <Text className="description">{`时间：${bookDetail.BookCreationDate}`}</Text>
            <Text className="description">{`状态：${bookDetail.BookStateName}，共${bookDetail.BookUpdateSection}`}</Text>
            <Text className="description">{`类别：${bookDetail.CatalogName}`}</Text>
            <Text className="description">{`点击量：${bookDetail.BookClickCount}次`}</Text>
          </View>
        </View>
        <RichText className="detail" nodes={bookDetail.BookDescription} />
      </View>
    )
  }
}
