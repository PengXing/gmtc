/**
 * @file config
 * @author sekiyika(pengxing@baidu.com)
 */

export const API_HOST = process.env.NODE_ENV !== 'production' ? 'http://localhost:8079' : ''

// 获取用户信息
export const GET_USER = '/api/user'
