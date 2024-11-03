let deferredPrompt;
const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    deferredPrompt = null;
    butInstall.style.display = 'none';
  }
});

// Also add this to handle if app is already installed
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
  butInstall.style.display = 'none';
  
  console.log('Successfully installed!', 'The application has been installed successfully!');
});