window.addEventListener("load", (tab) => {
  const gettitle = document.querySelector("#title");
  getCurrentTab().then((data) => (gettitle.innerHTML = data));
});

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab.title;
}
