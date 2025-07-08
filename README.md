# 🎯 Focus Flick

**Focus Flick** is a lightweight Chrome extension that enhances your YouTube watching experience by automatically pausing videos when you switch tabs or windows, and resuming them when you return. Perfect for staying focused and never missing a second of your favorite content.

---

## ✨ Features

- 🔄 **Auto Pause/Resume**  
  Pauses YouTube videos when the tab or window loses focus, and resumes playback when you come back.

- 🧠 **Focus Control Toggle**  
  Quickly enable or disable the extension via a simple popup interface.

- ⚡ **Instant Activation**  
  Works on new YouTube tabs without needing a refresh.

---

## 🛠 Installation

1. **Clone or Download** this repository.
```
git clone https://github.com/anuragparashar26/focus-flick.git/
```  
2. Open Chrome and navigate to: `chrome://extensions/`
3. Enable **Developer mode** (top right toggle).
4. Click **Load unpacked** and select the directory downloaded/cloned directory.
---

## ▶️ Usage

1. Open any [YouTube](https://www.youtube.com) video.
2. Click the **Focus Flick** extension icon in the Chrome toolbar.
3. Use the toggle in the popup to enable or disable auto-pause/resume.

---

## 👨‍💻 File Structure and Overview

```
focus-flick/
├── README.md
├── background.js        -Injects content script into appropriate YouTube tabs
├── content.js           -Handles pause/resume logic on YouTube videos
├── icons/               -Contains icon assets for the extension 
│   ├── icon128.png
│   └── icon48.png
├── manifest.json        -Chrome extension configuration
├── popup.html           -UI for toggle
└── popup.js             -Toggle logic for enabling/disabling the feature
```
---

## 🔐 Permissions Used

- `storage`: Save the extension’s toggle state.
- `activeTab`: Access the current active YouTube tab.
- `scripting`: Inject the content script dynamically.

---

## 📬 Feedback & Contributions

Feel free to open issues or submit pull requests. Contributions are welcome!

