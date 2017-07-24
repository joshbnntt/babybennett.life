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
    "url": "/_nuxt/0.nuxt.bundle.7b5104dead409613f27f.js",
    "revision": "dbafef331572185eba13da6beb96749b"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.455c985f492334d07c19.js",
    "revision": "b06e4a845cac7bb9ffeff69d429ca7a4"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.2a449a77f71b4fd4a113.js",
    "revision": "a009793af669b8d25ba0ea2cf3ef1a32"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.bfd9dba5afe58c19a349.js",
    "revision": "dc978d6e85990376dc05a0f1be7151db"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.b65638dee3e75f39b8bc.js",
    "revision": "2f67a76ace005785e8c4bb7fcaf436e4"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.fb4a68d5de0914e5a8b9.js",
    "revision": "d5c902798f8607d2354863a357328553"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "9fe5df9c23e60eaff20d52c4b71e131a"
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
    "url": "/_nuxt/manifest.eed79bd72441958868d8.js",
    "revision": "bb8b179b3b88038c2556473e791800bf"
  },
  {
    "url": "/_nuxt/nuxt.bundle.76fd4354283446a38d9c.js",
    "revision": "af604ea9c5b58f30a0f677d92d2fa839"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "075f0ef318862d5bb8a6ec743fc212ba"
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
