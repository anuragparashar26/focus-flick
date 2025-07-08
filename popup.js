document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleBtn');
  const errorDiv = document.getElementById('error');

  chrome.storage.local.get(['isEnabled'], (result) => {
    const isEnabled = result.isEnabled !== false;
    updateButton(isEnabled);
  });

  toggleBtn.addEventListener('click', () => {
    chrome.storage.local.get(['isEnabled'], (result) => {
      const newState = !result.isEnabled;
      chrome.storage.local.set({ isEnabled: newState }, () => {
        updateButton(newState);
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs[0] && tabs[0].url.includes('youtube.com')) {
            chrome.tabs.sendMessage(tabs[0].id, { isEnabled: newState }, (response) => {
              if (chrome.runtime.lastError) {
                errorDiv.textContent = 'Could not communicate with the page. Try toggling again or check if you are on a supported page.';
              } else {
                errorDiv.textContent = '';
              }
            });
          } else {
            errorDiv.textContent = 'Go to a YouTube video tab to toggle.';
          }
        });
      });
    });
  });

  function updateButton(isEnabled) {
    toggleBtn.textContent = isEnabled ? 'Disable' : 'Enable';
    toggleBtn.disabled = false;
  }
});