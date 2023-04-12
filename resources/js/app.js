import './bootstrap';
import '../css/app.css';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { createI18n } from "vue-i18n";
import en from '../../lang/en/en.json' assert { type: "json" };
import nl from '../../lang/nl/nl.json' assert { type: "json" };


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'StudyMate';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const i18n = createI18n({
          locale: "nl", // user locale by props
          fallbackLocale: "en", // set fallback locale
          legacy: false, // use vue-i18n 8.x
          messages: {
            en: en,
            nl: nl
          }
        });

        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(i18n)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
