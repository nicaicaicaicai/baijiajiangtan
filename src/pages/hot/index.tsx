/**
 *  Created by pw on 2019-06-21 14:05.
 */

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import Banner from './elements/Banner'
import HotCardRecommend from './elements/HotCardRecommend'

export default class Hot extends Component {
  render() {
    return (
      <View>
        {/*<Banner hotStore={{} as any} />*/}
        <HotCardRecommend hotStore={{} as any} />
      </View>
    )
  }
}
