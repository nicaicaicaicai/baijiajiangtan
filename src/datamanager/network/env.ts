/**
 *  Created by pw on 2019-06-25 15:06.
 */
import { getTaro } from './utils'

const Taro = getTaro()

export const isWebLikeEnv = [Taro.ENV_TYPE.WEB, Taro.ENV_TYPE.RN].indexOf(Taro.getEnv()) >= 0
