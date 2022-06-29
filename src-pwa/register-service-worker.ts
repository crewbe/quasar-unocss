import { register } from 'register-service-worker'
import { Notify } from 'quasar'
import { mdiCloudDownload } from '@quasar/extras/mdi-v5'

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready(/* registration */) {
    // console.log('Service worker is active.')
  },

  registered(/* registration */) {
    // console.log('Service worker has been registered.')
  },

  cached(/* registration */) {
    // console.log('Content has been cached for offline use.')
  },

  updatefound(/* registration */) {
    // console.log('New content is downloading.')
  },

  updated(registration) {
    // console.log('New content is available; please refresh.')
    try {
      registration.update()
      Notify.create({
        color: 'primary',
        icon: mdiCloudDownload,
        message: 'Una nuova versione è disponibile. Si prega di aggiornare la pagina.',
        timeout: 0,
        multiLine: true,
        position: 'top',
        actions: [
          {
            label: 'Aggiorna',
            color: 'white',
            handler: () => {
              window.location.reload()
            },
          },
        ],
      })
    } catch {
      Notify.create({
        type: 'negative',
        caption: 'Non è stato possibile aggiornare la web app.',
        message: 'Si prega di aggiornare la pagina (CTRL + F5)',
      })
    }
  },

  offline() {
    // console.log('No internet connection found. App is running in offline mode.')
  },

  error(/* err */) {
    // console.error('Error during service worker registration:', err)
  },
})
