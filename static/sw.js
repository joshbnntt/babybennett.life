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
    "url": "/_nuxt/1.nuxt.bundle.8a7aa354f304cbb607cd.js",
    "revision": "eb435c82de57ec541503f6ede793b03c"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.27c002059397580bd6eb.js",
    "revision": "48039fae5fe29b81367aa7f12fcc7cf9"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.7903e3476481421308dc.js",
    "revision": "ae2dfe8b1db47f8097014bf8e608a99f"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.333221c3a7ff7791b116.js",
    "revision": "654bbc58e253e4c89b8305eef2eb5dca"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.45f8b1458a37db7ace24.js",
    "revision": "01c7cb4e0dde0a0ac1d38cbcc81f3559"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "a605b6ee1db7705ecc0c87a12555c068"
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
    "url": "/_nuxt/manifest.8acb95288f97f6ac6bdc.js",
    "revision": "e7002cbfb79189fccc8f19ddac35e8b7"
  },
  {
    "url": "/_nuxt/nuxt.bundle.0e3becd6b1916d48aec4.js",
    "revision": "f24d5a49995aa8b3384f2339a1bedb79"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "d2853835e4a05faadb8ab61baf687598"
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
