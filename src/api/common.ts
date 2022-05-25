/**
 * 公共基础接口
 */
import request from '@/utils/request'
import type{ ICaptchaInfo } from './types/common'
export const getCaptcha = () => {
  return request<ICaptchaInfo>({
    method: 'GET',
    url: '/captcha',
    responseType: 'json'

  })
}
