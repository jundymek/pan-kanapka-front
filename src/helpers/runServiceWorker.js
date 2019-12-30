import subscribePush from "./subscribePush";
import urlBase64ToUint8Array from "./urlBase64ToUint8Array";
import loadVersionBrowser from "./loadVersionBrowser";
require('dotenv').config()

const applicationServerKey = process.env.REACT_APP_APPLICATION_SERVER_KEY;

export default function runServiceWorker(token, username) {
  if ("serviceWorker" in navigator) {
    // The service worker has to store in the root of the app
    // http://stackoverflow.com/questions/29874068/navigator-serviceworker-is-never-ready
    var browser = loadVersionBrowser(navigator.userAgent);
    navigator.serviceWorker
      .register("navigatorPush.service.js?version=1.0.0")
      .then(function(reg) {
        reg.pushManager
          .subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(applicationServerKey)
          })
          .then(function(sub) {
            var endpointParts = sub.endpoint.split("/");
            var registration_id = endpointParts[endpointParts.length - 1];
            var data = {
              browser: browser.name.toUpperCase(),
              p256dh: btoa(String.fromCharCode.apply(null, new Uint8Array(sub.getKey("p256dh")))),
              auth: btoa(String.fromCharCode.apply(null, new Uint8Array(sub.getKey("auth")))),
              name: username,
              registration_id: registration_id
            };
            console.log(data);
            subscribePush(data, token);
          });
      })
      .catch(function(err) {
        console.log(":^(", err);
      });
  } else {
    console.log("no service worker");
  }
}
