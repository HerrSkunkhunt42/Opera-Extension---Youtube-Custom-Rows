# YouTube Custom Rows Extension

The **YouTube Custom Rows** extension allows users to customize the number of rows displayed in the YouTube grid layout. It dynamically injects custom CSS into YouTube's active tab, enabling users to control how many items are displayed per row.

## Features
- **Adjustable Row Display**: Choose between 1 and 20 rows to customize how YouTube content is displayed in the grid layout.
- **Local Storage**: The extension stores your chosen settings locally on your browser, so your preferences are retained even after restarting the browser.
- **Simple UI**: Use the up/down buttons to increase or decrease the number of rows instantly.

## Permissions
- **Active Tab Permission**: This is required to inject CSS into the currently active YouTube tab to adjust the display grid.
- **Storage Permission**: This permission is used to save the number of rows chosen by the user so that the settings persist across sessions.

## How It Works
When you adjust the number of rows using the extension's interface, it dynamically injects CSS into the YouTube page to modify the display of content. The value you choose is stored in the browser using the `chrome.storage` API, ensuring the extension remembers your preferences the next time you use YouTube.

This extension does not collect, store, or share any personal data. All data (like the number of rows) is stored locally in the browser.


# - Support

If you encounter any issues, have questions, or would like to request features for the **YouTube Custom Rows** extension, please feel free to use the GitHub Issues page to report them.

## How to Get Support
1. Go to the [GitHub Issues Page](https://github.com/HerrSkunkhunt42/Opera-Extension---Youtube-Custom-Rows/issues).
2. Create a new issue if you have found a bug, need help, or have a feature request.
3. Provide as much detail as possible to help improve the extension.

Alternatively, you can contact the developer via email at **fckcod69@gmail.com** for additional support.

We aim to address issues promptly and improve the extension based on your feedback!
