let deferredPrompt;

const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});




installButton.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    
    const result = await deferredPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    
    deferredPrompt = null;
    // Hide the install button here
    installButton.style.display = 'none';
});

// Also add this to handle if app is already installed
window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    // Hide the install button
    installButton.style.display = 'none';
});





// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
