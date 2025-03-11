document.getElementById("save").addEventListener("click", () => {
  let lang = document.getElementById("language").value;
  chrome.storage.sync.set({ targetLanguage: lang }, () => {
    alert("زبان ذخیره شد!");
  });
});
