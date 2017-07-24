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
    "url": "/_nuxt/0.nuxt.bundle.ab824fb3f4d28bfd07a8.js",
    "revision": "3d6a5e5db7213d4548aa4f386e4fceea"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.760636e6d1a8a985a111.js",
    "revision": "8561149435cf40ee6051e382100ec953"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.ddb904c6b8b55635e14b.js",
    "revision": "a109664d356b38269852a34808d44244"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.b2ee5161046dcd79353c.js",
    "revision": "fab40137eaa8dd6a4115285660c930f6"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.adc3cd14a3f203235bd7.js",
    "revision": "f8251e662824fabdc8f73814fed55cb8"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.76c8c93844950c15d9ca.js",
    "revision": "97ddb8d796751c43810013ba5cb4d559"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.93ff21fec50b9b37d481.js",
    "revision": "929819d0b6f676d588b7cf263f38fbe2"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "b730a2bc26978586ee3d8cb760ec8b25"
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
    "url": "/_nuxt/manifest.bfd9cad1ed41b18c9ac4.js",
    "revision": "cf2f689d2d705fd16d6710f159ea0d14"
  },
  {
    "url": "/_nuxt/nuxt.bundle.d27837301affba2cc429.js",
    "revision": "3bd2dc0c8a143e762b0c6b39f815c233"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "f803281ff32db330191998005b7d6518"
  },
  {
    "url": "/_nuxt/vendor.bundle.2ed0653833ede2bb0478.js",
    "revision": "6170e1e1531d6f85acab12d86563b871"
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
