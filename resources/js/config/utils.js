import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
const urlApi = 'api/'
const urlDownloadFile = '/storage'

Vue.prototype.$urlApi = urlApi
Vue.prototype.$urlDownloadFile = urlDownloadFile
