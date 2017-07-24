importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/0.nuxt.bundle.98e02aa313dbc7626809.js",
    "revision": "e9e1a55d080ddd108a918c381aa30cb6"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.455c985f492334d07c19.js",
    "revision": "b06e4a845cac7bb9ffeff69d429ca7a4"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.864607908090c9a5c02e.js",
    "revision": "1dd0ed5d3437debdd1636381a10853ae"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.7903e3476481421308dc.js",
    "revision": "ae2dfe8b1db47f8097014bf8e608a99f"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.7acdfe71606ee5d5c413.js",
    "revision": "095ddaad1cfa8d513b651d8d2a7d5650"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.45f8b1458a37db7ace24.js",
    "revision": "01c7cb4e0dde0a0ac1d38cbcc81f3559"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "6b84e0ae4a49c32f023f65315312ccfe"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.5ddfbe1e.json",
    "revision": "23cb5aaa613c16203816d2c8699835ae"
  },
  {
    "url": "/_nuxt/manifest.c9ce55834b69a682941e.js",
    "revision": "435aa883f41f321a1fb7f1825ca2a8a5"
  },
  {
    "url": "/_nuxt/nuxt.bundle.0e3becd6b1916d48aec4.js",
    "revision": "f24d5a49995aa8b3384f2339a1bedb79"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "13f75511bc9899387d5290500f415edb"
  },
  {
    "url": "/_nuxt/vendor.bundle.dc6abf472c66725833ee.js",
    "revision": "b45b57c251f3415d9695696e19cbc7ed"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "babybennett_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
