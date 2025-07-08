chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === 'complete' &&
    tab.url &&
    tab.url.match(/^https:\/\/www\.youtube\.com\/watch/)
  ) {
    chrome.scripting.executeScript({
      target: { tabId },
      files: ['content.js']
    });
  }
});

chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab.url && tab.url.match(/^https:\/\/www\.youtube\.com\/watch/)) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
      });
    }
  });
});
