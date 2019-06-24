/**
 *  Created by pw on 2019-06-24 14:53.
 */

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import BookDetailList from './BookDetailList'
import BookDetailHeader from './BookDetailHeader'

export default class Detail extends Component {
  config = {
    navigationBarTitleText: '详情'
  }

  render() {
    const { bookId } = this.$router.params
    return (
      <View>
        <BookDetailHeader hotStore={{} as any} bookId={bookId} />
        <BookDetailList detailStore={{} as any} />
      </View>
    )
  }
}
