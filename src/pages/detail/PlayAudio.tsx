/**
 *  Created by pw on 2019-06-24 17:50.
 */

import Taro, { Component } from '@tarojs/taro'
import { View, Audio } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { DetailStore } from '../../interface/DetailInterface'
import { HotStoreIF } from '../../interface/BannerInterface'
import { DetailIF } from '../../interface/DetailInterface'
import { HotCardInterface } from '../../interface/BannerInterface'

interface Props {
  detailStore: DetailStore
  hotStore: HotStoreIF
}

@inject('detailStore')
@inject('hotStore')
@observer
export default class PlayAudio extends Component<Props> {
  render() {
    const { sectionId, bookId } = this.$router.params
    const detail: DetailIF = this.props.detailStore.getDetailById(sectionId)
    const bookDetail: HotCardInterface = this.props.hotStore.getDetailById(bookId)
    return (
      <View>
        <Audio
          id={detail.SectionID + ''}
          src={detail.SectionLinkURL}
          name={detail.SectionName}
          author={detail.BookName}
          controls={true}
          loop={false}
          poster={bookDetail.BookIconOtherURL}
        />
      </View>
    )
  }
}
