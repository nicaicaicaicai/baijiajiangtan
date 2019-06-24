/**
 *  Created by pw on 2019-06-24 11:38.
 */

import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './Card.less'
import { HotCardInterface } from '../interface/BannerInterface'

interface CardIF {
  card: HotCardInterface
  className?: string
  onClick?: Function
}

export default class Card extends Component<CardIF> {
  render() {
    const { card, className = '', onClick } = this.props
    return (
      <View className={`bjjt_card ${className}`} onClick={() => onClick && onClick(card)}>
        <Image className="image" src={card.BookIconOtherURL} />
        <Text className="text">{card.BookName}</Text>
      </View>
    )
  }
}
