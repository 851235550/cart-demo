import request from '@/utils/request'

/**
 * 获取购物车商品列表
 * @param {object} params
 */
export function getCartProductList (params) {
  const req = request({
    method: 'get',
    url: '/cart/productlist',
    params: params
  })

  return req
}
