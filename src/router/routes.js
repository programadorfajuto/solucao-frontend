import { routes as auth } from '../modules/auth'
import { routes as dashboard } from '../pages/dashboard'
import { routes as usuarios } from '../modules/usuarios'
import { routes as socios } from '../modules/socios'
import { routes as ocorrencias } from '../modules/ocorrencias'
import { routes as recibos } from '../modules/recibos'
import { routes as envioDeSms } from '../modules/envio-de-sms'

export default [
    ...auth,
    ...dashboard,
    ...usuarios,
    ...socios,
    ...ocorrencias,
    ...recibos,
    ...envioDeSms
]