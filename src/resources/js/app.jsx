import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import Header from './Pages/Parts/Header';
import Sidebar from './Pages/Parts/Sidebar';

createInertiaApp({
  resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
        <Fragment>
            <div className="horizontalMenuContainer">
                <div className="page">
                    <Header />
                    <Sidebar />
                    <div className="main-content hor-content">
                        <div className="main-container container">
                            <div className="inner-body">
                                <App {...props} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </Fragment>,
      el
    );
  },
});