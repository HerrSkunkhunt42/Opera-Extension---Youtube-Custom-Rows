document.addEventListener('DOMContentLoaded', function() {
  const entryField = document.getElementById('entryField');
  const upButton = document.getElementById('upButton');
  const downButton = document.getElementById('downButton');

  // Retrieve and set the saved value from storage
  chrome.storage.sync.get(['savedValue'], function(result) {
    if (result.savedValue !== undefined) {
      entryField.value = result.savedValue;
    } else {
      entryField.value = 5; // Default value
    }
    injectCSS(entryField.value);
  });

  // Up Button Click Event
  upButton.addEventListener('click', function() {
    let currentValue = parseInt(entryField.value, 10);
    if (currentValue < 20) {
      entryField.value = currentValue + 1;
      saveValue(entryField.value); // Save new value to storage
      injectCSS(currentValue + 1);
    }
  });

  // Down Button Click Event
  downButton.addEventListener('click', function() {
    let currentValue = parseInt(entryField.value, 10);
    if (currentValue > 1) {
      entryField.value = currentValue - 1;
      saveValue(entryField.value); // Save new value to storage
      injectCSS(currentValue - 1);
    }
  });

  // Restrict Input Between 1 and 20 and inject CSS accordingly
  entryField.addEventListener('input', function() {
    let currentValue = parseInt(entryField.value, 10);
    if (currentValue < 1) {
      entryField.value = 1;
    } else if (currentValue > 20) {
      entryField.value = 20;
    }
    saveValue(entryField.value); // Save new value to storage
    injectCSS(entryField.value);
  });

  // Function to save the value in storage
  function saveValue(value) {
    chrome.storage.sync.set({ savedValue: value }, function() {
      console.log('Value saved: ' + value);
    });
  }

  // Function to inject CSS into the YouTube page via JavaScript
  function injectCSS(value) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      let tab = tabs[0];
      if (tab && tab.url.includes("youtube.com")) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: (itemsPerRow) => {
            const styleId = 'custom-youtube-grid-style';

            // Attempt to remove any existing style element to start fresh
            try {
              let oldStyleElement = document.getElementById(styleId);
              if (oldStyleElement) {
                oldStyleElement.remove();
              }
            } catch (e) {
              console.error("Failed to remove existing style element: ", e);
            }

            // Create a new style element and append it to the document head
            try {
              let styleElement = document.createElement('style');
              styleElement.id = styleId;
              styleElement.textContent = `
                .ytd-two-column-browse-results-renderer {
                  --ytd-rich-grid-items-per-row: ${itemsPerRow} !important;
                }
              `;
              document.head.appendChild(styleElement);
            } catch (e) {
              console.error("Failed to create and append style element: ", e);
            }
          },
          args: [value]
        });
      }
    });
  }
});
