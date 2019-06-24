/**
 *  Created by pw on 2019-06-24 14:53.
 */

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import BookDetailList from './BookDetailList'
import BookDetailHeader from './BookDetailHeader'

export default class Detail extends Component {
  render() {
    return (
      <View>
        <BookDetailHeader hotStore={{} as any} />
        <BookDetailList detailStore={{} as any} />
      </View>
    )
  }
}
