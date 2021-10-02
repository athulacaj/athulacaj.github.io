'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9cd599a3523898e6a12e13ec787da50a",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "66f12f5ce9e635e877b7571db29d1f67",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1e7abec58aad6c3009c87eaa55d8c4c3",
".git/logs/refs/heads/master": "1e7abec58aad6c3009c87eaa55d8c4c3",
".git/objects/02/c85dea1588030ca1a1cd1c41a4e7157b706761": "5df0401d86e955d62f4e4558091e7e1a",
".git/objects/05/be01e69f694ade71595c0961cf97872950ed51": "32d0d35a81abe49e5d1936885a38a144",
".git/objects/06/ab5f3b674e36f7c8d31d232181e13c8da9facb": "a0898376108a5b4b9e77be11f035a6b4",
".git/objects/0a/48fa033842d2e158b6443a69f9d49089ff8119": "4b2bf82a5cc0a15c19d82dfe861c5cd3",
".git/objects/18/8912586c820b37d4f1d6c2b438f8cdcc595c30": "7ac7e82bb95c4207822de4ff5c85a509",
".git/objects/1b/b6bf7a1f568c08ed8284ab8aa882aee920c40f": "4642f2ece3f56b63600d5de3616b2d5a",
".git/objects/1f/08c6ec9c4db126949ffe719e4385db0688f3ec": "c9adcbd85b3c3af9117671693dfacf86",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/1598349a263c5b41e685ffd7154b14dbd9ec7f": "753d970736d8204321a7064fe1ec62a7",
".git/objects/25/5635ba6ae92528a747c050993e3a7bb884a748": "768fb9e2cf7e6bc7c95c93d8d1f9262c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3e/0886e455a4374890319826fff8bcf43b3024f0": "be04615cd6b6ee2acc4362ff72f109b6",
".git/objects/3e/bd94f717cbfe744eb0413f31b5157e7901fce8": "609e5bdb81616bcf18426b36d5abb054",
".git/objects/40/9d5c0d4923df1a192adc150c8d6eb77f3c4e31": "9c2b0ab381a4d6a374b8c0c3d5dbc649",
".git/objects/46/a5e6501e75173fff8a8f0ac2ad7f0862052154": "1b60c9d4aa68080fcf8211f6d23d5fcb",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/4d/a749a62290e8b6ddf6073a77873b5c39c87eb5": "e986cfea8b6779812eccb4ed91fd9100",
".git/objects/67/3520b4f24e57a544a82144ad7303fc3b178366": "c2e2bf9ce809b6a64c6387e1788234ea",
".git/objects/67/cb5fc3657c38328ee5197a512951f61a8eafed": "58571338de6d42ed90e1a6a7963d8158",
".git/objects/69/b3c5b88d607da9feea1d0f21f6e34f23952dc3": "b0dfc2116a1263d9b6718d69117556ac",
".git/objects/70/5f45737cc38095382ab49648dd6b2514c20153": "154b975676cb119b00dabc64272588f8",
".git/objects/72/31543b9ae723b26fc83faa9882be28e1def150": "c421ad4143b2d8c0be4915c8df78a2ba",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/64d9682ff223891a9e3e9d4efb4acd3ad20c82": "84394914ba272487b509cdef57ffdba4",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/88/5e00767ed0b7b7969f787abbf987467caa3b89": "fb878eebf9e1828fd11b4c5d78b6b4a4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/154fbabc29b149f63b50b42132ab6cf866f4b5": "59217b6f55188f6ab96434fd3f60f389",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/f3509581453ca0ba1f0c995ec8a1fde8248b09": "30d890ae2eb5a3dd1c377ecb74ff219f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/365a8bd3d75129a9634ba96a0e88c452438f7b": "ef061b837ec0fb4fe955c993d511c3a8",
".git/objects/b0/bdae3af393e8a42a43cdf9ad574d06ce364514": "ed0acfefcae21efbc8a8ee7e182537c4",
".git/objects/b3/70fe6042f855d2452e0dec6788016ab0af93c9": "b211084908c4244f528e0ceae49534a6",
".git/objects/b6/28633e6eeec9f4dffac57996f36531557e5709": "2c2176f3413b1a91db94607670b84116",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/9252e33f25aadc82d82bad46bbcb6bc35735e8": "b469c518f7785f4753c65a729b1e71ca",
".git/objects/c7/485538f0a21b699784aa42a882467100b4e55a": "7d88618f512498c0c851dad961a5956c",
".git/objects/c8/bff7665d49db3cac882b5666f5017b9d13e1bd": "b4f7a8dc91c075622066c5ff4844812f",
".git/objects/d0/5fe885c655bd1ffad0f6741569080f6ab3f330": "b31ce1d4b626fa8cc3efc78aad5cda77",
".git/objects/d3/02095cfebb101476f80b1fa1689b2585cd924a": "dec936f5c6f26f449adf496d54011d92",
".git/objects/d6/f3d51d7595946f1c7f19443c8c3bed4600e1cb": "6e336ff937c2268a673f946bfb648004",
".git/objects/d9/21eee0846e5664afdadbd132c29db03b22efa2": "4a60b3b69df06300cdf26304f7e4901a",
".git/objects/de/e25fa632e5201c32e8c26d78111c8ce90d50dc": "737a8bad94a2d5adbe80be591f90aa07",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e87d7155bd5b526716561f04fa9c2060d31d70": "bd32c47e09de2b902168ff1c4cd70cbb",
".git/objects/ea/70cf04a07f9815afac855913bcb306931b6e39": "1a5fea860edd845f7290b13b53f37c5e",
".git/objects/f0/fecac0b1186d8a4f50def2a11d2af09a38426f": "95501f062e91fbedfa8c8369946f38a9",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f6/73a46373ccc490c3c02ed2b4d5affbc57d650b": "fe2ed95f60e9e071c24025e620297a9d",
".git/objects/ff/8dfcd29d3ba9479ad327d862ee6ada08e22cac": "bb35a415ab1443b7cb2f77372c7dba1e",
".git/refs/heads/master": "c0df1c5f14e81c2c4678e00750f2f6dd",
"assets/AssetManifest.json": "cdb7a816055b5dd10b5526c043ee559d",
"assets/assets/athul_cv.pdf": "b24e86a62eabb02d2dbe981f9457b6c8",
"assets/assets/fonts/BonheurRoyale-Regular.ttf": "377369b905d51497f7a99b3131c03168",
"assets/assets/images/apps/bingo/1.jpg": "1fc7b16ca1eed694d48fd08c01b40e36",
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
"index.html": "caa312bf206e36a4aafdc2027e72e31e",
"/": "caa312bf206e36a4aafdc2027e72e31e",
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
