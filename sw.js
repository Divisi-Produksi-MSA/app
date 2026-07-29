self.addEventListener('install', (e) => {
  console.log('[Service Worker] Terpasang');
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Dibiarkan kosong agar data tetap real-time dari Google Apps Script
});
