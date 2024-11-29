window.googletag = window.googletag || { cmd: [] };

const ADS_TO_LOAD = [
  "div-gpt-ad-1732541591461-0",
  "div-gpt-ad-1732541591461-1",
  "div-gpt-ad-1732541591461-2",
  "div-gpt-ad-1732541591461-3",
  "div-gpt-ad-1732541591461-4",
  "div-gpt-ad-1732541591461-5",
];

const BOTTOM_AD = "div-gpt-ad-1732541990608-0";

window.googletag.cmd.push(function () {
  // banner slots
  ADS_TO_LOAD.forEach((adId) => {
    window.googletag
      .defineSlot("/23128577529/inshorten.com_Display", [300, 250], adId)
      .addService(window.googletag.pubads());
  });

  //  bottom slot
  window.googletag
    .defineSlot(
      "/23128577529/inshorten.com_Anchor",
      [[300, 50], [320, 100], [320, 50], "fluid", [300, 100]],
      BOTTOM_AD
    )
    .addService(googletag.pubads());

  window.googletag.pubads().enableSingleRequest();
  window.googletag.enableServices();
});

localStorage.setItem("prefixIds", "div-gpt-ad-1732541591461");