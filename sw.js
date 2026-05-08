self.addEventListener('fetch', function(event) {
  // This is a basic 'pass-through' worker required for PWA installation
  event.respondWith(fetch(event.request));
});
