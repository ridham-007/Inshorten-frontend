window.googletag = window.googletag || { cmd: [] };

const ADS_TO_LOAD = [
  "div-gpt-ad-1732541591461-0",
  "div-gpt-ad-1732541591461-1",
  "div-gpt-ad-1732541591461-2",
  "div-gpt-ad-1732541591461-3",
  "div-gpt-ad-1732541591461-4",
  "div-gpt-ad-1732541591461-5",
  "div-gpt-ad-1732541591461-6",
  "div-gpt-ad-1732541591461-7",
];

window.googletag.cmd.push(function () {
  ADS_TO_LOAD.forEach((adId) => {
    window.googletag
      .defineSlot("/23128577529/inshorten.com_Display", [300, 250], adId)
      .addService(window.googletag.pubads());
  });
  window.googletag.pubads().enableSingleRequest();
  window.googletag.enableServices();
});
