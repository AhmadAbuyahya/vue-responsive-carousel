import './style.css';

import { App } from 'vue';

// export individual components
import Carousel from './components/Carousel.vue';

export { Carousel };

// export the entire library as a plugin, so it can be installed via app.use()
// comment this out if you don't want to install the entire library

export default {
  install: (app: App) => {
    app.component('Carousel', Carousel);
  },
};