// Service worker ?
const registerServiceWorker = async () => {
    try {
        await navigator.serviceWorker.register('/recipe/sw.js', { scope: '/recipe/'});
        console.log('Service worker registered');
    } catch (e) {
        console.log(`Registration failed: ${e}`);
    }
}
  
if (navigator.serviceWorker) {
    registerServiceWorker();
}