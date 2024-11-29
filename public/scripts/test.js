class SmoothScrollInteract {
  constructor() {
    this.lastPushMoneTagClickTime = null;
    this.scrollHeight = document.body.scrollHeight;
    this.windowHeight = window.innerHeight;
    this.scrollStep = 1; // Pixels to scroll each step
    this.currentScrollPosition = 0;
    this.direction = 1; // 1 for scrolling down, -1 for scrolling up
    this.scrollCount = 0; // Count how many times we've scrolled
    this.haltInterval = 2000; // Halt every 2 seconds
    this.haltDuration = 2000; // Halt duration of 2 seconds
    this.totalScrollDuration = Math.floor(Math.random() * (15 - 1) + 50) * 1000; // Total scroll duration of 60 seconds
    this.endTime = Date.now() + this.totalScrollDuration;
    this.globalLinkSelector = 'a';
    this.concludeScript = false;
  }

  simulateClick(element) {
    const mouseEvents = ['mousedown', 'mouseup', 'click'];
    mouseEvents.forEach((type) => {
      const event = new MouseEvent(type, {
         // view: unsafeWindow, // This is important, if we don't set the view, from direct script
         view: window, // This is important, if we don't set the view, from server script
        bubbles: true,
        cancelable: true,
      });
      element.dispatchEvent(event);
    });
  }

  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  selectVisibleText() {
    let elements = document.querySelectorAll(
      'p, label, h1, h2, h3, h4, h5, h6, div:not(:has(*))',
    ); // Selecting all paragraphs for example
    elements = [...elements].filter((e) => this.isElementInViewport(e));
    const nodeEle = elements[Math.floor(Math.random() * elements.length)];
    if (nodeEle) {
      this.selectText(nodeEle);
    }
  }

  selectText(element) {
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  clearSelection() {
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
    }
  }

  getLinkSelector() {
    const host = location.host;
    if (host.includes('thekpnews')) {
      return '.PopularPosts a';
    }
    return this.globalLinkSelector;
  }

  getCookie(cname) {
    const name = cname;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.split('=');
      }
    }
    return [];
  }

  shuffleScrollStep() {
    this.scrollStep = Math.floor(Math.random() * (5 - 1) + 1);
  }

  setEndTime() {
    this.totalScrollDuration = Math.floor(Math.random() * (15 - 1) + 50) * 1000; // Total scroll duration of 60 seconds
    this.endTime = Date.now() + this.totalScrollDuration;
  }

  async redirectToNewPage() {
    let anchorElements = document.querySelectorAll(this.getLinkSelector());
    anchorElements = [...anchorElements].filter(
      (x) =>
        !['about', 'privacy', 'term', 'disclaimer'].some((e) =>
          x.textContent.toLowerCase().includes(e),
        ),
    );
    if (anchorElements.length > 0) {
      const randomAnchor =
        anchorElements[Math.floor(Math.random() * anchorElements.length)];
      this.simulateClick(randomAnchor);
    }
  }

  async animateScroll() {
    if (this.concludeScript) {
      return;
    }

    if (Date.now() < this.endTime) {
      this.currentScrollPosition += this.direction * this.scrollStep;

      // Change direction when reaching the bottom or top
      if (this.currentScrollPosition >= this.scrollHeight - this.windowHeight) {
        this.currentScrollPosition = this.scrollHeight - this.windowHeight;
        this.direction = -1; // Reverse direction
      } else if (this.currentScrollPosition <= 0) {
        this.currentScrollPosition = 0;
        this.direction = 1; // Scroll down
      }

      this.scrollCount++;
      window.scrollTo(0, this.currentScrollPosition);

      // Simulate reading and selecting text in viewport
      this.haltDuration = 0;

      // Check if it's time to halt
      if (this.scrollCount * this.scrollStep >= this.haltInterval) {
        this.scrollCount = 0; // Reset scroll count after halt

        // haltDuration is a random number between 2 and 4 seconds
        this.haltDuration =
          Math.floor(Math.random() * (4 - 2 + 1) + 0.5) * 1000;
        await new Promise((resolve) => setTimeout(resolve, this.haltDuration));
        this.selectVisibleText();
        // haltDuration is a random number between 2 and 4 seconds
        this.haltDuration =
          Math.floor(Math.random() * (4 - 2 + 1) + 0.5) * 1000;
        await new Promise((resolve) => setTimeout(resolve, this.haltDuration));

        this.haltDuration =
          Math.floor(Math.random() * (4 - 2 + 1) + 0.5) * 1000;
      }

      this.shuffleScrollStep();
      this.clearSelection();
      await new Promise((resolve) => setTimeout(resolve, this.haltDuration));
      await this.animateScroll();
    } else {
      this.concludeScript = true;
      console.log("Script concluded");
      await new Promise((resolve) => setTimeout(resolve, this.haltDuration));
      await this.redirectToNewPage();
    }
  }

  async startInteraction() {
    await this.animateScroll();
  }
}

setTimeout(async () => {
  const interactor = new SmoothScrollInteract();
  interactor.setEndTime();
  await interactor.startInteraction();
}, 15000);

setTimeout(() => {
  const allButton = document.querySelectorAll('button[data-ved]');
  [...allButton].forEach((button) => {
    if (
      button &&
      button.innerText &&
      button.innerText.toLowerCase() === 'reject all'
    ) {
      button.click();
    }
  });
}, 3000);
