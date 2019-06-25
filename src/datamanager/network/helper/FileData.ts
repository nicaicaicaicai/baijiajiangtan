/**
 *  Created by pw on 2019-06-25 14:50.
 */
export class FileData<T = any> {
  constructor(private fileContent: T) {}

  getFileContent(): T {
    return this.fileContent
  }
}
