document.addEventListener("mouseup", async (event) => {
  let selectedText = window.getSelection().toString().trim();
  if (selectedText.length > 0) {
    let response = await chrome.runtime.sendMessage({ text: selectedText });
    if (response && response.translation) {
      showPopup(response.translation, event);
    }
  }
});

function showPopup(text, event) {
  let popup = document.createElement("div");
  popup.innerText = text;
  popup.style.position = "absolute";
  popup.style.background = "white";
  popup.style.border = "1px solid black";
  popup.style.padding = "10px";
  popup.style.zIndex = "1000";
  popup.style.top = `${event.clientY + 10}px`;
  popup.style.left = `${event.clientX + 10}px`;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 5000); // حذف بعد از ۵ ثانیه
}
