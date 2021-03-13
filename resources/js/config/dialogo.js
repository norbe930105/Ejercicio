import { Dialog } from 'quasar'

export function showDialog (message, title = 'Confirmar', cancel = true) {
  return Dialog.create({
    title: title,
    message: message,
    cancel: cancel,
    persistent: true
  })
}
