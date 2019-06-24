/**
 *  Created by pw on 2019-06-21 14:44.
 */

import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, Image, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { BannerInterface, HotStoreIF } from '../../../interface/BannerInterface'
import './Banner.less'

interface BannerProps {
  hotStore: HotStoreIF
}

@inject('hotStore')
@observer
export default class Banner extends Component<BannerProps> {
  componentDidMount() {
    this.props.hotStore.getBannerList()
  }

  handleItemClick = (banner: BannerInterface) => {
    console.log(banner)
  }

  render() {
    return (
      <Swiper className="banner_swiper" vertical={false} autoplay>
        {this.props.hotStore.bannerList.map((banner: BannerInterface) => {
          return (
            <SwiperItem
              key={banner.TopicID}
              className="banner_swiper_item"
              onClick={() => this.handleItemClick(banner)}
            >
              <Image className="slide_image" src={banner.TopicIconUrl} />
              <Text className="title">{banner.TopicName}</Text>
            </SwiperItem>
          )
        })}
      </Swiper>
    )
  }
}
