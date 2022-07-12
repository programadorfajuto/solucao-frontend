import { store as auth } from '@/modules/auth'
import { store as usuarios } from '@/modules/usuarios'
import { store as socios } from '@/modules/socios'
import { store as dashboard } from '@/pages/dashboard'
import { store as ocorrencias } from '@/modules/ocorrencias'
import { store as envioDeSms } from '@/modules/envio-de-sms'

export default {
    auth,
    usuarios,
    socios,
    dashboard,
    ocorrencias,
    envioDeSms
}