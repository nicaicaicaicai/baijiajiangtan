/**
 *  Created by pw on 2019-06-21 14:44.
 */

import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { BannerInterface } from '../../../interface/BannerInterface'
import './Banner.less'

type BannerType = {
  hotStore: {
    bannerList: BannerInterface[]
    getBannerList: Function
  }
}

interface BannerProps {
  hotStore: BannerType
}

@inject('hotStore')
@observer
export default class Banner extends Component<BannerProps> {
  componentDidMount() {
    this.props.hotStore.getBannerList()
  }

  render() {
    return (
      <View>
        <Swiper
          className="banner_swiper"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          vertical={false}
          circular
          indicatorDots
          autoplay
        >
          {this.props.hotStore.bannerList.map((banner: BannerInterface) => {
            return (
              <SwiperItem key={banner.TopicID} className="banner_swiper_item" style={{ width: '100%' }}>
                <Image className="slide_image" src={banner.TopicIconUrl} />
              </SwiperItem>
            )
          })}
        </Swiper>
      </View>
    )
  }
}
