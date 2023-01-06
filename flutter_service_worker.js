'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0c2826c7aed086df4b2efb9629ff2ca3",
".git/config": "bf507db373ac77d1dc479964abe0a988",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "66c1628fd3bdbb417cdb73bc01209963",
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
".git/index": "5adfc4258906b1063247cb5e7945c2bc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8cdc2f146af752484d23f2103792b0d4",
".git/logs/refs/heads/main": "8cdc2f146af752484d23f2103792b0d4",
".git/logs/refs/remotes/origin/main": "c557492f902801628edd6a4574b7bba1",
".git/objects/01/05a4a58cb8f10158ec27c0fd01df6433e80e16": "6e6944a5d8ca54d09af69f780c37e228",
".git/objects/01/778892c916b3c85275225f7be2a12403284841": "0df7eb3ec56adc6e803f3aa3b25f00cd",
".git/objects/04/011e202a9a6a2e57fd77fb97b682367d76b5c2": "974ef7a0f2f245c1a93f012c9e19a2c3",
".git/objects/08/df7c1b9a9386e982f0145bdd8c336e488bc8b6": "1b9d318760b28f9770e39446d4443d65",
".git/objects/0a/e9b1d5acd1744ec3cb0c3f7fc897e29ba57a93": "6728368e713f65ab0cea5beea73ce161",
".git/objects/0b/83cdb9b55f9187de3751d27cba492e65cc8cca": "c9382d7996d6163eddbfa659a40512a0",
".git/objects/0b/a20064169fe33910b379a46accc490edb25446": "5e7dbd9d328fd1b2fa376436156f4023",
".git/objects/0d/567058906a0ef48166e7193fa55351f1eafc77": "78f4f5de2e78584e3d9b6e4ebca221c6",
".git/objects/10/80dbcf421743107b479f64a30ecc5b0c59b64e": "bb861862b7da985f4a7045212b6d3e88",
".git/objects/11/04caf062d4e58239ddd842fd75908627aa464d": "2a7e91f124b0dce3a93ec07a009c2153",
".git/objects/12/518012fd8688f04be84616e26110372b0c51a3": "53012bcab294a3ff4f481aab0ec3c1c0",
".git/objects/13/1d0c2189ca8dccb19045889684a4f491b92b55": "bef5f6937f7b76ee37dc4cbe7120de26",
".git/objects/14/3b234f8623d6a657c16dac693201159498b37f": "e7e29548be8af4cf5ca9c2bcfd2d13f4",
".git/objects/16/9d1399abacef8f005d59be3d4d0fa200e494dc": "14be5d287f0403a51af9c0ea4c3d9689",
".git/objects/18/ea56b77580b9dedda8f5a665ae842b424386c3": "b3a063b337cb68038fad56bfe3a19389",
".git/objects/19/1eb3afb9e545af2f4a07e3bdf723f49aa25b14": "aba55014d619c621aebadfc167d21d65",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/5b8e07dd69efeb933b53dc65f3958efd7cdc1e": "ab0b5b9d6e8b73bdf22b182cb54307cf",
".git/objects/1c/89d32aa9c62bb872d5da45b10af4b36f278c9b": "8c70bc12cc76b66a4b7debfacbdfaaad",
".git/objects/1c/c97f4fd35c826a17a0a574f28a049d76e4cad7": "e433944e38c9632d901278764cd26226",
".git/objects/1d/84286a9a6361b1f25780c0f1c2062d86e838e2": "48f0eb69867615a56a546f927b1964a1",
".git/objects/1f/34750835dd5c0a523e929e7286064cd152b87d": "27a4f5af6acc863a68432587a0d2c91f",
".git/objects/1f/7623d1fa696db18e2a8e06ad00b8099139ce04": "a6676ad2189c97f9e36b4481279a5b7b",
".git/objects/20/0ea2fda9dfc3e67c24ae6624296e0427880ff3": "71083d18c12f6002c848ec519130f0e3",
".git/objects/26/8f4292543c1e9a83f90084777f92299c0c6bdf": "07ade27e93abce29b898a4f828b5c1ef",
".git/objects/29/334a3ef6e02be0b74deb80d86fb2075efa2ce2": "37618cb333d44ba732b7e98747ed8714",
".git/objects/2a/8c1e96770ca3ee4776708caf687e8ea0a9ec2c": "3530e1ecab17302bd44abb7adbd52926",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/4047f80bba573e633c8050dec8d02132c014e3": "417efd27aa1c289b6127aca5a31057fa",
".git/objects/2b/865cd07572e323380c8bb0e971012fba8c21da": "d093c39eddca6fc853ad4c90790b76ff",
".git/objects/2d/0182f2d815078d8ee333f220a50e75c5652b71": "4d3229606e3db491c600fc04692c89d9",
".git/objects/2d/3c0b5ff6c962ba3c32b266adb0df4edcf45972": "ae15728bff481bc7849b4ca69aca4b1f",
".git/objects/2d/a1417bc0270ef0a2c3f74e724aa8cf279b565d": "a6581115c99caf8d57706f046769d044",
".git/objects/2d/feb669d736347ab2a633b25a84c0fc6b019ff6": "8f683b2c8191f91795a0fe4a8aa9f60f",
".git/objects/2f/032bb562d486721840897a2a627a28c37bc2b7": "7c16a5269536d89827a5998ab0d49905",
".git/objects/2f/ede68225560d46a526f50668d9aa1b2067f498": "6fc0741990c89aafd2e6efc5d1a7b1a7",
".git/objects/30/8a1aa3bc44c27d1b0b1855333ddb2c9f423351": "8b8a50433f4c47fb0bd37e1e22e091c1",
".git/objects/31/4cddcbc4a04370aa05ff1f29060246252dd3c9": "2c4407bcef8736dfd53c25317b2c73bc",
".git/objects/32/cb97c6a2b2eba18c63c02ab1a35980c7d954f3": "12c7ac6256fd64ccbd4d94ced7b22aaa",
".git/objects/33/3b51f3f697ce02505b53cc351be4d711666943": "33f322119fcaa61dcc7257332d7b35c0",
".git/objects/35/27e06a1f27401e719a3ed37552f45808ca0da5": "92eaafede0a63df870364a8b4a263798",
".git/objects/35/5bdb7f75b082da8e77e4cc23dd8a5f921c5bb2": "937078bd8f5fec247bb1455cf5f07fe2",
".git/objects/36/76f0f00ac8cc50ff8d7149ece576b3e2c54bc0": "39416d35b4775659a025f9cbcc26caca",
".git/objects/36/b4a0071ded8f32c459085cf3d9a994d6268fae": "fe1083c9cbf594dc2935a830088e9140",
".git/objects/38/d29dd5ed69e7cf5df7ddbecc073d7693d09c47": "71ebaa2a005695f48e6d11f577359ad9",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/45/966c0255d61c8d8113c5557f75b81ed3aac8c4": "171c792611b7bc823731c4737f84c46c",
".git/objects/47/48b5f965f0d8bdbbe9440bcf0110a92e4c79f8": "cf06690a5ddedd3b84afd2e42894ffa2",
".git/objects/48/dc343e55540292b557748cea9c4cd715ccebe9": "e8a2c5b6f9b61a6754582c7a40d485f3",
".git/objects/51/0a0b4bb4c47bfe40c1cfa0e7e9b88e63f871dd": "c344e38114a07361910c3dc72e1f805d",
".git/objects/54/42f56149c6ffe96155bc5202297c3078fc1f9f": "3b2b94443f374c733a1ba61bf90fa017",
".git/objects/5c/e19519ddd3ee81d1dd148b3e7421b99f360465": "a4e6b2d00b19186a0d12e3f41795a62f",
".git/objects/5d/778d831fb184692c7f7dcc2bb2bd86f92ae066": "d7919aa398c71ecf58b2cadec7d40246",
".git/objects/5d/7817ec5d1afead6d112f5825d5879c879073f4": "5fc693a435c96762a8b61ae2632bcadd",
".git/objects/5e/1ac91cf36c05736f8966d8b8c638579c5d9eb2": "e15447f9ee9e94af6098d616dc3cb5a7",
".git/objects/5e/c925f0b12f26fd10a334ff07458624efb9471e": "ab2e7fc5461c7c69d9a4d4e016ece29d",
".git/objects/5f/cd7d3cde36653391b6f90c9fc081667d420541": "99a3f9dabc7683bfeb81b8e314f2affc",
".git/objects/64/2b3c4a22936f032ec9dbe5ea81483896009e28": "c64107da64dd9573a349c73f8eea6425",
".git/objects/64/9cd74519026148ffd2e20b76dd6a41f03e548b": "eb902676d06980f69d8c4d610b270b79",
".git/objects/66/8edfac79643e534ca84a9c5c626d04a5ef671c": "c150c449fd5a9986cec64dc7fcf90371",
".git/objects/67/f6f5ce243e60227266ab6271ece7dbccf5c7aa": "294d8a2740ff2419a7c34806680588cc",
".git/objects/68/108e316c9ec53603a709f5caa98345fd1e35df": "87e8fa58acbf78040aa23268fbd1eb61",
".git/objects/6a/b00621a379b09bb048e23cb23a97e085aa422c": "311d4d5d1926cdaf4b043dfc0bac5220",
".git/objects/6c/9d8c2de41765d1078430035fe885932a801d97": "c5432a96f235d974f54ae74a36b41876",
".git/objects/70/6fbdbade83472deab6ac2c4f8bbc8bd217e486": "e48295fb906b068174d3cd05856b5305",
".git/objects/74/5514abb0295821ee4d33564477e519aa736e6d": "75615f4dd467d8007e631a50849549eb",
".git/objects/78/0184ccaca09c45fd6ee463a2e6d9f133d40aba": "61e1a2b60ddfa272a249d4920bc81e37",
".git/objects/78/2da6ba0d24c1789559045dabe6521539d249a1": "717d076a6fc7af53cabbac2d6b301ce7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/219b37b1e5c20a69a03904b34e2ca34b3d0401": "8a708dfac21d801c9e3e7971fb31b3e7",
".git/objects/7a/af42694578bb94cffaa6492af4cacd47200e44": "18dd9efbc0526443e6d13dc0cfd51726",
".git/objects/7a/e44f61133cbc36c22fd41f6769cec96a2c4531": "4da73e24f39c52f20a5170e08b89c9ea",
".git/objects/7c/a18c90f2a83cb1041570cb31503280f811ca9e": "f8c9087a9eefcc9eb00fb26f59a4b3f4",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/4086659e6d2e54f5b0d736d1f6e2d6a228959d": "e8a5a8731790dd6e10202ccfca7a8249",
".git/objects/80/1eda00ff5090310357950e0c94eed4a308c8f2": "ff585163532c5c0a9b39b944fcd05a51",
".git/objects/81/257ba5797c43183436010a1b098b0f6e81ef6b": "e4a80e20edc147f2a21c08639be923dd",
".git/objects/81/bd9bc208cf1a3b78f50ab686cf1fe7352805fe": "f9a9e048b0d116c3037c68e47c486503",
".git/objects/85/e2f43a9c5984ab3fdd21f226bb3509b2ac5f9d": "017271b4f0bee5b4201b121db4e248d5",
".git/objects/86/3221b22419660f80cc5adb2e73c5d9f520deba": "94d3a89a25f9164aaf10aa6552fb1dc0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/87d800613f02363aa9fe6b59596642e25bca7d": "ff37c144fe9a1afa1189ab3e021558b2",
".git/objects/89/9133a0827f1f0807347a838106ede8d11a59f2": "206f9f6a34593abaf2bea2e2784d9a42",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c3d37b060fea053bf91a778bd2e61f8fa56664": "36a1be3da1194572d1f303509c7d5230",
".git/objects/8e/82c70d1081e2857ada1b73395d4f42c2e8adc9": "26623a433e72cc0c70229cb55963874c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/683a49d21276a3d84568fd782b0b0afde12705": "61b09e0306e1afcdd007fad1173f6125",
".git/objects/9d/9c6c4d4bf951f263f7e0ea99607776c68069f2": "7a853978b788b719f95d9f18f1bbe2d5",
".git/objects/9e/04e6cd7e30029a4cd6edb5f64901f267e3dd41": "6c2ab8880343ca48d1ba2fdf5bf1a419",
".git/objects/a0/e1966ae76f0eea659e056487354b63b2addc73": "1224ff55ef93c8a17b0c6c9f73a471a5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/af2daddb5d3f74b81360ade6ef0a93f7bbf0e1": "3feb087c432d44d774a13cd0c3c238d3",
".git/objects/a6/f37b51524a5f1b0824a26b348062664760a889": "6958ba118b64aaff9199eae17ed1545c",
".git/objects/a8/71e97ca44b745fbade7b50fc948d542dce569e": "b1853a3b49d3dbec9a3a9d1c9d3358f9",
".git/objects/a9/43609ee5c3c06a8a5efb2ebc88858a786eea73": "e8543e5a53877e44038f15cba62a68ba",
".git/objects/a9/8b52b2f6287fb6c1148db80cde81653c625a8b": "8968de038714ef3cd47536b4c84957e1",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/62bc3c562e698062c6ab4c9cb1c7a2c8fafc34": "7824173c4ef9e9c8ff1daf3fc5dbccac",
".git/objects/ac/db5c999c65bea9d5af6dd6abd6f8da38d8ce17": "0998dfbbf2b5f1c460d92d7a97ac09b4",
".git/objects/ae/a9d77381446c533027cc66bc646673b86414af": "5ccac7eafb03b504794168f29f677596",
".git/objects/ae/d78b53b1c61bc63a1a6c3504ab8f414ab94aab": "097beb7a6bf1b59eb9425db332ce2cb2",
".git/objects/b0/b7fe0a88ca33bd0935399a040e947d5fdd2313": "c2ca9669f6f9d4729169c28a5149bc82",
".git/objects/b3/d4985a0139cf9cc71ef293bbafd9dea5a9ae78": "45cc9e5ca418e3bfaba57307c88046ee",
".git/objects/b4/791ec91f68cc0e8c4d5cfebfff34eb887bf7d4": "7196da3e7c6339470710217f3dfc336e",
".git/objects/b5/66b1678da813db73491437e63ceea163d274bb": "ef28cb69db3b2a7a57eab7809f39a788",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/a6998d8bcb45a9c963fd8d5c0d39e59107e94c": "67b7924b0f34344802edb31e8bdddf3c",
".git/objects/b9/226334f8afeb1c7128a3b5f7a129019e21bec3": "6999d30e6aa0e15e2d3e38964a64fd60",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e9fa2e3bda205954a9a9b466df62c6c3407297": "2fe8b70e9d88941f723cfc251da3dc16",
".git/objects/ba/051e5e5f597f07b87e53ab611a6f869e1d3c45": "147ec2d37d2883f026cd85e1431b0db1",
".git/objects/bc/e20a549a911bb3ce64a054064cd5f948a81c5f": "140d3d621c62910f7a938364fcfe888f",
".git/objects/bf/7fa042b372a64743aa9d122fe31451363046a1": "0a6c20d72ec2c7f9f87be6aad28044e7",
".git/objects/bf/e4026c57056d3c5189b95fb7ad04fc86e98297": "95d925e60cd28ff05bc03c4948c605a7",
".git/objects/c1/22f4f787318f823be9ecea24d21b2b67bf14b5": "3f508500e05f7deb4c02d6a0fafb7c05",
".git/objects/c2/a1799e62564dfafd7274bf9758497b1fb9409c": "692041e3d7089337f6f8481e629e2f8a",
".git/objects/c3/be640dbb1ad36e7d48c6487a3a0db310eeeeb5": "1142b3098cc86047fd7cb98db56c2a0b",
".git/objects/cb/4b8217fc2bc3840eb21d7e8795cc05bf83614c": "d9ed8d1d3a00257f2711e26ca913ca73",
".git/objects/cb/868467ee044b87e632e4c4289f5dc77b2a181a": "74d366feda50d927643fae0c0cbcd4ab",
".git/objects/cc/4b11e243760e61e612f21c0562dc08ad9081bf": "d0dba419a400f12d9e5d4e404511b5ac",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/2708d84a14fbc2760b16b53424974c1373afd7": "a86b2e742a88595f5c7459fce4473ecd",
".git/objects/ce/be4ba127b3cd4f19441edb94a1652de09b6609": "9e181177a55035f39ed220b8fe77a26a",
".git/objects/cf/3838564c78ff3f1407bb82563db383149fdf6d": "110c3ff680c25b22297e82ebc0d7a952",
".git/objects/d0/6080c941f3dbd8302c9cae1a050f79feeb0b2f": "fdbcac0ae2daeb84127c6a8d8dec8e94",
".git/objects/d3/76d8a3afd75e8ae43f89d47bc74c7f4af69374": "f8f963038e890b1233af39498b50551a",
".git/objects/d4/365bff36cecaafb3133ced7fd4da69606eb204": "2d8bf6ca2703bc2a750f0d435d0267d0",
".git/objects/d6/9258cfdbcbce58fff1464658b4be9cf6dd8011": "d43f58562fef92ce93641e8aefcb81de",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/b151d31b3e770cf3eae772cd2764355fe5a917": "1d715edacf25651e6c54f6ba39c073f4",
".git/objects/da/26df194d73879e356eb69d402ffe1fb87a898f": "c0480da162d8d76f31ed7f55a210ac87",
".git/objects/db/d580041271a4ef8c13d87e3c98c54427b4e18e": "2e813bf9d4846137a2aa4551c250eedf",
".git/objects/dd/fbc0677311d1e1c9abab23408336cfa5dd3f04": "d0fce05ed1394d658a79ea3c44ad9010",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/4eabdec1ba5e3a2f54cfc53ed68c86bc6878e5": "10c06474966270a24e716201f8a8afe5",
".git/objects/e0/e6e5479fd114dbdd37909289a9d9fa2669cfef": "57127b9d3615c2cd56ed8c6faa286dc9",
".git/objects/e0/fedc55358a5127e9637f8707f66c5f9bb8aaf0": "3025ac20541ee7899a06532a0a85871e",
".git/objects/e1/4a8b74abf7454d1e79bb1a194883201fba5783": "02f2d571167e7875b33a392d0a559b15",
".git/objects/e4/b6424cd6d44a22f5a6a1c704f0e75478495bc6": "b41bd88302aa7821fcc837ef0b3fe36e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/def95d3f44c82086f6e74d93fc0aadac7c454a": "28a34a73fd3e94b3fd53733dfaf2ed0e",
".git/objects/e9/371aa7fc472ed4e78dab41a3654643b1f0169b": "a7c5f7b2ffc72163d82c09818fc18375",
".git/objects/ea/ae2e72bdb54eed2973b220fe6e6d87036b73c8": "d9c75f756ffe75571eb10b7a2d956c28",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/34216474f4d06c98f530699ddf8fcbe558eb69": "6c9a0707d1d15b462fa9ff393470a87e",
".git/objects/ee/7b8daa17f5bc339a6a5edc2032542bdaa85ae7": "bf47780be862097707cc3f04f236346e",
".git/objects/f1/39d9c4d94d7634009e727e8c76beae3e8b7a11": "5b5bf7fdd772a59cce2a10141e91048d",
".git/objects/f2/1e5230baa983295876c699ecf5951141f524ec": "ddf352f5d485833621f3efbdcf1bf672",
".git/objects/f3/8e41a3766171a6bb047f5e5985775c3af47c09": "51961fa88dd227cbee0cc33d80f8fd48",
".git/objects/f8/aaa5db8ab385ccddb290a26f1ae5267c017a95": "3883a8b896ee87ca8c65f1ea48a3571c",
".git/objects/f9/618c214c02dde5a92627eda31dd0404b274ccc": "2fcba1c330e1b568eb6518dffc001a8c",
".git/objects/fb/03c9773a8a44382cd65ba76c7e78ffae15f692": "4370903078d9a614cfa61534e48dab88",
".git/objects/fb/b3e68b08e6b5d819bbe3fdd855a258774d1ad9": "7b65a15dac5b0224ec021dc580108fe8",
".git/objects/fe/94acec1a4a43f1a4bc381f584f02fe75c1a927": "dc989acf20bbf69daa2e9f6ddb03f0b7",
".git/objects/ff/32643fb771a36c5f8606b5249822e3f03a151a": "b9fc8461b7ab55727555dc320ed75488",
".git/objects/ff/8a3b28cb4d691560c01790643ca1029a7b483d": "06fa00bfb08054e9f3a8b28c68f4558a",
".git/objects/ff/a262fbfac20e303c60ff415e3585382e0dd98b": "68e7176f94da486522c58078d292bba3",
".git/ORIG_HEAD": "e08a4a822429201b7aaf8550f92b1514",
".git/refs/heads/main": "8bb667b5849be40d9bb7f8bacb0f605d",
".git/refs/remotes/origin/main": "8bb667b5849be40d9bb7f8bacb0f605d",
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
"assets/NOTICES": "6ab4fbd863f3d56992cc50687a44474a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6394d9c9d96834cf8b8cf516f84556b4",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"CNAME": "21d0f53ae716858f59e1f486bb257ac9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "b3070383e7ae35832279bddcd3b7c9e8",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "412298ff9d496299ce26f90e6c901ea2",
"/": "412298ff9d496299ce26f90e6c901ea2",
"main.dart.js": "510aadd922989c40dca377e9c851f290",
"manifest.json": "cefdae1a56d0d8b41057453a1bf12848",
"styles.css": "6e7384b627d2d1930ef9523b8c642382",
"tucan.png": "9c7d7964b911c8fe93408c6261d23334",
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
