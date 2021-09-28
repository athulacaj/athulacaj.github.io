'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cdb7a816055b5dd10b5526c043ee559d",
"assets/assets/athul_cv.pdf": "b24e86a62eabb02d2dbe981f9457b6c8",
"assets/assets/fonts/BonheurRoyale-Regular.ttf": "377369b905d51497f7a99b3131c03168",
"assets/assets/images/apps/bingo/1.jpg": "234e658b9d282e1ec8c69f9fd5b90f0a",
"assets/assets/images/apps/bingo/2.jpg": "20aa17b582106bc01e087356468458ab",
"assets/assets/images/apps/bingo/3.jpg": "48a961d442fff6c3d2582f2939f52ef4",
"assets/assets/images/apps/bingo/4.jpg": "d4fe35d58ce531727ff3a97302a3d7a4",
"assets/assets/images/apps/bingo/5.jpg": "e54253c142736fc952a655b474cfae4b",
"assets/assets/images/apps/sav/1.jpeg": "eb54daf08ba038917e58e78c462caac4",
"assets/assets/images/apps/sav/2.jpeg": "c9ab4c53b29aa1da3c0533140cf0a314",
"assets/assets/images/apps/team/1.jpg": "b06a1274c653a25dda998d7868311292",
"assets/assets/images/apps/team/2.jpg": "14495c6cf866aaecd34fd8102824baf7",
"assets/assets/images/apps/team/3.jpg": "e3074c46d52664a7128c9585ec3cf06d",
"assets/assets/images/apps/vaccine/1.jpeg": "c9cbecef9a735adb6d2f2eb250b26fa7",
"assets/assets/images/apps/vaccine/2.jpeg": "5810750cfbad6a994f67d974adf05e9c",
"assets/assets/images/apps/vaccine/3.jpeg": "295b325ee9b1fa5c128bb49a255d53b6",
"assets/assets/images/apps/vaccine/4.jpeg": "8a119c6fcbe60965af0385337a102c02",
"assets/assets/images/cover.jpg": "ab61265d046705f45e754b5c02ad67f8",
"assets/assets/images/logos/bingo.png": "dec8f1fee27a75e67a862d3e2a003572",
"assets/assets/images/logos/sav.png": "ffb2a042445dfff2b0edba5e20fb0567",
"assets/assets/images/logos/team_cherupuzha.png": "3eb3f632ce812a2ac035edeeca38d050",
"assets/assets/images/logos/vaccine.png": "8730395e32a39b9d196642381e75ec47",
"assets/assets/images/profile1.jpg": "c97599bb20fdea0f55d26eb249b358dc",
"assets/FontManifest.json": "194e5c5c61164e25d0813ee05450cf0a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "1cd17532cbdf8ecc9b747c463239b57c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b11844b356bfdd4de8cbd75709fc8b79",
"/": "b11844b356bfdd4de8cbd75709fc8b79",
"main.dart.js": "8c8b9269454da2c59d1d878fa47f7f07",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
