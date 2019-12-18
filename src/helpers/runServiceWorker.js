import subscribePush from "./subscribePush";
import urlBase64ToUint8Array from "./urlBase64ToUint8Array";
import loadVersionBrowser from "./loadVersionBrowser";

const applicationServerKey = "BKRlcJ1Y3laM2IXh6erl1N-CV9luHym-g0x0-IwuV0wHSFQGETVHIrnY7hNlo4uJV-9OCEe_t2whjEaR3k_3NC8";

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
