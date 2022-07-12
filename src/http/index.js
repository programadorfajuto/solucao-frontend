import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'
import interceptors from './interceptors'
import constantes from '../constantes'

Vue.use(VueResource)

const http = Vue.http

http.options.root = constantes.url

http.interceptors.push(interceptors)

Object.keys(services).map(service => {
  services[service] = Vue.resource('', {}, services[service])
})

const setBearerToken = token => {
  http.headers.common['Authorization'] = `Bearer ${token}`
}

export default services
export { http, setBearerToken }