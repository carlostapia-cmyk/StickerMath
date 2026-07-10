const CACHE = "math-sticker-v1";

const archivos = [
"index.html"
];


self.addEventListener("install", e=>{

    e.waitUntil(

        caches.open(CACHE)
        .then(cache=>cache.addAll(archivos))

    );

});


self.addEventListener("fetch", e=>{

    e.respondWith(

        caches.match(e.request)
        .then(r=>r || fetch(e.request))

    );

});