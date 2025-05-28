chrome.action.onClicked.addListener(async (tab) => {

  const { enabled } = await chrome.storage.local.get("enabled");
  const newState = !enabled;

  await chrome.storage.local.set({ enabled: newState });

  if (newState) {
    await chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ["main.css"]
    });

    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['switcher.js']
    });
  } else {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const elems = document.querySelectorAll('div, p, span, h1, h2, h3, h4, h5, h6, a, pre, label, header, aside, section, dialog, form, button');
        elems.forEach(el => el.classList.remove('my-dark-theme'));
        document.body.classList.remove('my-dark-theme');
      }
    });
  }
});
