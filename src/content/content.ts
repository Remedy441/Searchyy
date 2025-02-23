import { useSpotSearch } from "./state/spot-search";

console.log("content script");

(async () => {
  // const response = await chrome.runtime.sendMessage({
  //   type: "index",
  //   url: window.location.href,
  //   content: document.body.innerText.toLowerCase(),
  // });
  // do something with response here, not outside the function
  // console.log(response);
  chrome.runtime.onMessage.addListener(function (
    request,
    _sender,
    sendResponse
  ) {
    switch (request.type) {
      case "OPEN_SEARCH_BAR":
        console.log("OPEN_SEARCH_BAR");
        useSpotSearch.setState({
          visible: true,
        });
        sendResponse("done");
    }
  });
})();
