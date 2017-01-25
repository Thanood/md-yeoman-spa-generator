import { Aurelia } from 'aurelia-framework';
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'materialize-css';
declare const IS_DEV_BUILD: boolean; // The value is supplied by Webpack during the build

function waitForMaterialize() {
  return new Promise((resolve, reject) => {
    let iterations = 0;
    const handler = window.setInterval(() => {
      iterations++;
      let ma = (window as any).Materialize;
      if (
          ma &&
        ma.elementOrParentIsFixed &&
        ma.escapeHash &&
        ma.fadeInImage &&
        ma.guid &&
        ma.scrollFire &&
        ma.showStaggeredList &&
        ma.toast &&
        ma.updateTextFields
      ) {
        console.log(`waited ${iterations} iterations for Materialize to finish loading`);
        window.clearInterval(handler);
        resolve();
      }
    }, 1);
  });
}

export function configure(aurelia: Aurelia) {
    // return waitForMaterialize().then(() => {
        aurelia.use.standardConfiguration();

        if (IS_DEV_BUILD) {
            aurelia.use.developmentLogging();
        }

        aurelia.use.plugin('aurelia-materialize-bridge', b => b.useAll());

        return aurelia.start().then(() => aurelia.setRoot('app/components/app/app'));
    // });
}
