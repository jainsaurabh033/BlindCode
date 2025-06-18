# LeetCode Difficulty Hider 🔒

**LeetCode Difficulty Hider** is a simple, lightweight Chrome extension that helps you practice coding problems on [LeetCode](https://leetcode.com) without the bias of difficulty labels like **Easy**, **Medium**, or **Hard**.

---

## ✅ Features

- 🚫 Hides all difficulty tags (Easy / Medium / Hard) across LeetCode
- 📄 Works on problem list and problem detail pages
- 🌀 Auto-updates as you scroll — thanks to MutationObserver
- 🧠 Helps reduce cognitive bias while solving problems
- 🔒 Zero tracking, zero permissions

---

## 📦 How It Works

This extension uses a small content script that observes the DOM and hides any visible text nodes that match "Easy", "Medium", or "Hard".

```js
if (["Easy", "Medium", "Hard"].includes(el.textContent.trim())) {
  el.style.display = "none";
}
