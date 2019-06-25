/**
 *  Created by pw on 2019-06-25 14:50.
 */
import { FileData } from './FileData'
import { isObject } from '../utils'

export class PostData<T extends Record<string, any>> {
  constructor(private postData: T) {}

  getParsedPostData() {
    const postData = this.postData
    const parsedPostData: Record<'normalData' | 'fileData', T> = {
      normalData: {} as any,
      fileData: {} as any
    }
    if (isObject(postData)) {
      Object.keys(postData).forEach(key => {
        if (postData[key] && postData[key] instanceof FileData) {
          // @ts-ignore
          parsedPostData.fileData[key] = (postData[key] as FileData).getFileContent()
        } else {
          // @ts-ignore
          parsedPostData.normalData[key] = postData[key]
        }
      })
    }
    return parsedPostData
  }
}
