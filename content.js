let video = null;
let wasPlaying = false;
let isEnabled = true;

chrome.storage.local.get(['isEnabled'], (result) => {
  isEnabled = result.isEnabled !== false; 
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.hasOwnProperty('isEnabled')) {
    isEnabled = message.isEnabled;
    sendResponse({ success: true });
  }
});

function findVideo() {
  video = document.querySelector('video');
  if (!video) {
    setTimeout(findVideo, 500);
  }
}
findVideo();

function handleVisibilityOrFocus() {
  if (!video || !isEnabled) return;
  if (document.hidden || document.visibilityState === 'hidden' || !document.hasFocus()) {
    if (!video.paused) {
      wasPlaying = true;
      video.pause();
    }
  } else if (wasPlaying) {
    video.play().catch(() => {});
    wasPlaying = false;
  }
}

document.addEventListener('visibilitychange', handleVisibilityOrFocus);
window.addEventListener('blur', handleVisibilityOrFocus);
window.addEventListener('focus', handleVisibilityOrFocus);

let lastUrl = location.href;
new MutationObserver(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    setTimeout(findVideo, 1000);
  }
}).observe(document, {subtree: true, childList: true});