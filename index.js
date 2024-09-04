// ==UserScript==
// @name         Restore Default Ctrl+F in Notion
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Prevent Notion from overriding Ctrl+F to restore the default browser search functionality.
// @author       Your Name
// @match        https://www.notion.so/*
// @grant        none
// ==/UserScript==

document.addEventListener('keydown', e => {
  if (e.metaKey && e.key === 'f') {
    e.stopImmediatePropagation();
  }
}, true);
