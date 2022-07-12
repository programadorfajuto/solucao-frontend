import { services as auth } from '@/modules/auth'
import { services as usuarios } from '@/modules/usuarios'
import { services as dashboard } from '@/pages/dashboard'
import { services as socios } from '@/modules/socios'
import { services as ocorrencias } from '@/modules/ocorrencias'
import { services as envioDeSms } from '@/modules/envio-de-sms'

export default {
    auth,
    usuarios,
    dashboard,
    socios,
    ocorrencias,
    envioDeSms
}