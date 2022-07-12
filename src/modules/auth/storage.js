import { setBearerToken } from '@/http'

export const setHeaderToken = token => setBearerToken(token)
export const getLocalToken = () => localStorage.getItem('token')
export const deleteLocalToken = () => localStorage.removeItem('token')
export const deleteLocalId = () => localStorage.removeItem('id')
export const setLocalToken = token => localStorage.setItem('token', token)
export const getLocalEmail = () => localStorage.getItem('email')
export const getLocalId = () => localStorage.getItem('id')
export const deleteLocalEmail = () => localStorage.removeItem('email')
export const setLocalEmail = email => localStorage.setItem('email', email)
export const setLocalId = id => localStorage.setItem('id', id)
