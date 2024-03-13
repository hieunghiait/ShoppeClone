/**
 * Khai báo một interface phản hồi API
 */
export interface ResponseApi<Data> {
  message: string
  data?: Data
}
