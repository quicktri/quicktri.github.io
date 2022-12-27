'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "da963a69ae32c0ecb58da69d3f5a73f2",
".git/config": "bf507db373ac77d1dc479964abe0a988",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "b59c0796ff0d9d84a1a4909361b4d6e3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a3481465c0e19442a785783037aba839",
".git/logs/refs/heads/main": "a3481465c0e19442a785783037aba839",
".git/logs/refs/remotes/origin/main": "598731a51d855cea070b90f6d0b599cb",
".git/objects/01/05a4a58cb8f10158ec27c0fd01df6433e80e16": "6e6944a5d8ca54d09af69f780c37e228",
".git/objects/0b/a20064169fe33910b379a46accc490edb25446": "5e7dbd9d328fd1b2fa376436156f4023",
".git/objects/0d/567058906a0ef48166e7193fa55351f1eafc77": "78f4f5de2e78584e3d9b6e4ebca221c6",
".git/objects/10/80dbcf421743107b479f64a30ecc5b0c59b64e": "bb861862b7da985f4a7045212b6d3e88",
".git/objects/11/04caf062d4e58239ddd842fd75908627aa464d": "2a7e91f124b0dce3a93ec07a009c2153",
".git/objects/14/3b234f8623d6a657c16dac693201159498b37f": "e7e29548be8af4cf5ca9c2bcfd2d13f4",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1f/34750835dd5c0a523e929e7286064cd152b87d": "27a4f5af6acc863a68432587a0d2c91f",
".git/objects/20/0ea2fda9dfc3e67c24ae6624296e0427880ff3": "71083d18c12f6002c848ec519130f0e3",
".git/objects/26/8f4292543c1e9a83f90084777f92299c0c6bdf": "07ade27e93abce29b898a4f828b5c1ef",
".git/objects/2a/8c1e96770ca3ee4776708caf687e8ea0a9ec2c": "3530e1ecab17302bd44abb7adbd52926",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/0182f2d815078d8ee333f220a50e75c5652b71": "4d3229606e3db491c600fc04692c89d9",
".git/objects/2d/3c0b5ff6c962ba3c32b266adb0df4edcf45972": "ae15728bff481bc7849b4ca69aca4b1f",
".git/objects/2d/a1417bc0270ef0a2c3f74e724aa8cf279b565d": "a6581115c99caf8d57706f046769d044",
".git/objects/2d/feb669d736347ab2a633b25a84c0fc6b019ff6": "8f683b2c8191f91795a0fe4a8aa9f60f",
".git/objects/2f/ede68225560d46a526f50668d9aa1b2067f498": "6fc0741990c89aafd2e6efc5d1a7b1a7",
".git/objects/33/3b51f3f697ce02505b53cc351be4d711666943": "33f322119fcaa61dcc7257332d7b35c0",
".git/objects/36/b4a0071ded8f32c459085cf3d9a994d6268fae": "fe1083c9cbf594dc2935a830088e9140",
".git/objects/38/d29dd5ed69e7cf5df7ddbecc073d7693d09c47": "71ebaa2a005695f48e6d11f577359ad9",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/45/966c0255d61c8d8113c5557f75b81ed3aac8c4": "171c792611b7bc823731c4737f84c46c",
".git/objects/5c/e19519ddd3ee81d1dd148b3e7421b99f360465": "a4e6b2d00b19186a0d12e3f41795a62f",
".git/objects/5f/cd7d3cde36653391b6f90c9fc081667d420541": "99a3f9dabc7683bfeb81b8e314f2affc",
".git/objects/67/f6f5ce243e60227266ab6271ece7dbccf5c7aa": "294d8a2740ff2419a7c34806680588cc",
".git/objects/6a/b00621a379b09bb048e23cb23a97e085aa422c": "311d4d5d1926cdaf4b043dfc0bac5220",
".git/objects/6c/9d8c2de41765d1078430035fe885932a801d97": "c5432a96f235d974f54ae74a36b41876",
".git/objects/70/6fbdbade83472deab6ac2c4f8bbc8bd217e486": "e48295fb906b068174d3cd05856b5305",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/af42694578bb94cffaa6492af4cacd47200e44": "18dd9efbc0526443e6d13dc0cfd51726",
".git/objects/7a/e44f61133cbc36c22fd41f6769cec96a2c4531": "4da73e24f39c52f20a5170e08b89c9ea",
".git/objects/7c/a18c90f2a83cb1041570cb31503280f811ca9e": "f8c9087a9eefcc9eb00fb26f59a4b3f4",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/4086659e6d2e54f5b0d736d1f6e2d6a228959d": "e8a5a8731790dd6e10202ccfca7a8249",
".git/objects/81/bd9bc208cf1a3b78f50ab686cf1fe7352805fe": "f9a9e048b0d116c3037c68e47c486503",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/87d800613f02363aa9fe6b59596642e25bca7d": "ff37c144fe9a1afa1189ab3e021558b2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c3d37b060fea053bf91a778bd2e61f8fa56664": "36a1be3da1194572d1f303509c7d5230",
".git/objects/8e/82c70d1081e2857ada1b73395d4f42c2e8adc9": "26623a433e72cc0c70229cb55963874c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/683a49d21276a3d84568fd782b0b0afde12705": "61b09e0306e1afcdd007fad1173f6125",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/71e97ca44b745fbade7b50fc948d542dce569e": "b1853a3b49d3dbec9a3a9d1c9d3358f9",
".git/objects/a9/43609ee5c3c06a8a5efb2ebc88858a786eea73": "e8543e5a53877e44038f15cba62a68ba",
".git/objects/a9/8b52b2f6287fb6c1148db80cde81653c625a8b": "8968de038714ef3cd47536b4c84957e1",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/a9d77381446c533027cc66bc646673b86414af": "5ccac7eafb03b504794168f29f677596",
".git/objects/ae/d78b53b1c61bc63a1a6c3504ab8f414ab94aab": "097beb7a6bf1b59eb9425db332ce2cb2",
".git/objects/b4/791ec91f68cc0e8c4d5cfebfff34eb887bf7d4": "7196da3e7c6339470710217f3dfc336e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/a6998d8bcb45a9c963fd8d5c0d39e59107e94c": "67b7924b0f34344802edb31e8bdddf3c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/051e5e5f597f07b87e53ab611a6f869e1d3c45": "147ec2d37d2883f026cd85e1431b0db1",
".git/objects/c1/22f4f787318f823be9ecea24d21b2b67bf14b5": "3f508500e05f7deb4c02d6a0fafb7c05",
".git/objects/cb/4b8217fc2bc3840eb21d7e8795cc05bf83614c": "d9ed8d1d3a00257f2711e26ca913ca73",
".git/objects/cb/868467ee044b87e632e4c4289f5dc77b2a181a": "74d366feda50d927643fae0c0cbcd4ab",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/2708d84a14fbc2760b16b53424974c1373afd7": "a86b2e742a88595f5c7459fce4473ecd",
".git/objects/ce/be4ba127b3cd4f19441edb94a1652de09b6609": "9e181177a55035f39ed220b8fe77a26a",
".git/objects/cf/3838564c78ff3f1407bb82563db383149fdf6d": "110c3ff680c25b22297e82ebc0d7a952",
".git/objects/d0/6080c941f3dbd8302c9cae1a050f79feeb0b2f": "fdbcac0ae2daeb84127c6a8d8dec8e94",
".git/objects/d4/365bff36cecaafb3133ced7fd4da69606eb204": "2d8bf6ca2703bc2a750f0d435d0267d0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/e6e5479fd114dbdd37909289a9d9fa2669cfef": "57127b9d3615c2cd56ed8c6faa286dc9",
".git/objects/e4/b6424cd6d44a22f5a6a1c704f0e75478495bc6": "b41bd88302aa7821fcc837ef0b3fe36e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/def95d3f44c82086f6e74d93fc0aadac7c454a": "28a34a73fd3e94b3fd53733dfaf2ed0e",
".git/objects/ea/ae2e72bdb54eed2973b220fe6e6d87036b73c8": "d9c75f756ffe75571eb10b7a2d956c28",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/34216474f4d06c98f530699ddf8fcbe558eb69": "6c9a0707d1d15b462fa9ff393470a87e",
".git/objects/f2/1e5230baa983295876c699ecf5951141f524ec": "ddf352f5d485833621f3efbdcf1bf672",
".git/objects/fb/b3e68b08e6b5d819bbe3fdd855a258774d1ad9": "7b65a15dac5b0224ec021dc580108fe8",
".git/objects/fe/94acec1a4a43f1a4bc381f584f02fe75c1a927": "dc989acf20bbf69daa2e9f6ddb03f0b7",
".git/objects/ff/8a3b28cb4d691560c01790643ca1029a7b483d": "06fa00bfb08054e9f3a8b28c68f4558a",
".git/refs/heads/main": "4707ab6e6fbf1dbc754982423b81524d",
".git/refs/remotes/origin/main": "4707ab6e6fbf1dbc754982423b81524d",
"assets/AssetManifest.json": "36001cf44210fadd44ea9cc35c5667a1",
"assets/assets/airplane.png": "9fd87c492aa9ee95f2ae8e29935dc5c7",
"assets/assets/background.jpg": "cc8a6bf4afb611b9d78734949033bbea",
"assets/assets/background_cut.jpg": "0e5746e49c8867995d617539fb132df7",
"assets/assets/baloon.jpg": "6deeb4cd44eba1e608f9d19916dc1959",
"assets/assets/Calibri/Calibri-Regular.ttf": "5d7c31b284ddb01fc1cbae0edc9ec210",
"assets/assets/cities/amsterdam.jpg": "9320613d7816863ae5373a89212c298a",
"assets/assets/cities/athens.jpg": "e52192c295e0d9f6d40acdc44a39c843",
"assets/assets/cities/barcelona.jpg": "3fc833e3ce0e5b1c8ed9be124d7e0883",
"assets/assets/cities/berlin.jpg": "ef76d1a9da9954fbb79d39fc4a830447",
"assets/assets/cities/brussels.jpg": "008618ea00ea4d7ba12bcfdb342da2f2",
"assets/assets/cities/dublin.jpg": "afae5b2549e0090890cb6dce4ba08c46",
"assets/assets/cities/florence.jpg": "e6af6fa287c894a2d3c55fa2acaf9d82",
"assets/assets/cities/istanbul.jpg": "7639a561b0ff566db828ff8f14c02216",
"assets/assets/cities/lisbon.jpg": "94d741cdd2f9e1dca05e14ecaaca4f66",
"assets/assets/cities/london.jpg": "b25f914814525521a38ada838301a8fe",
"assets/assets/cities/madrid.jpg": "029c70ef011b8d773b3430db4616ffec",
"assets/assets/cities/milan.jpg": "ae613ece2ef54f1ea182a75732b659a9",
"assets/assets/cities/paris.jpg": "1373cfb318eab773780cecb9d7211152",
"assets/assets/cities/prague.jpg": "89fec3d3024bfe53deae6dce7267f0f9",
"assets/assets/cities/venice.jpg": "be950ed68d35fdb6e28d736a7b8def82",
"assets/assets/cities/vienna.jpg": "e3aeb399be55da018148ae884245ac92",
"assets/assets/friends.png": "66bb5efa16715565f94273542c6d23af",
"assets/assets/home_page_background.jpg": "0b9d5f9d4de6bde16b2c4a5600fe8e37",
"assets/assets/Inter/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/Inter/Inter-ExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/assets/Pacifico/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assets/Poppins/Poppins-Bold.ttf": "2f55e0d4b3f9eb3ffaefdac379fa3f8b",
"assets/assets/Poppins/Poppins-SemiBold.ttf": "f018d93c4bd9b0bbdfb82ae61ebf8da4",
"assets/FontManifest.json": "6728982633b6d76ae69742fe46725723",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ea2813745ab78258edd2d95461266ab9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6394d9c9d96834cf8b8cf516f84556b4",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "b3070383e7ae35832279bddcd3b7c9e8",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ddb717b8e3809fce7ac11b517347be2c",
"/": "ddb717b8e3809fce7ac11b517347be2c",
"main.dart.js": "c9b365588841b3672d34821ecdc1a90c",
"manifest.json": "cefdae1a56d0d8b41057453a1bf12848",
"version.json": "3c47c624bbd2cd41f3cef8daa03fc1cb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
