// ==UserScript==
// @name         Google
// @namespace    http://tampermonkey.net/
// @version      2024-07-08
// @description  try to take over the world!
// @author       You
// @match        https://google.com/*
// @match        https://*.google.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var selectedIndex;
    var elementToFind = null;
    const searchObject = [
      {
        searchText: 'brainaitools.com',
        selectorText: 'brainaitools',
      },
    ];
    if (!window.location.href.includes('q=')) {
      selectedIndex = Math.floor(Math.random() * searchObject.length);
    }
    const selecteSearchObject = searchObject[!!selectedIndex ? selectedIndex : 0];
    const searchText = selecteSearchObject.searchText;
    const selectorText = selecteSearchObject.selectorText;
    const searchSelector = 'form[role="search"] textarea';
  
    const scrollHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollStep = 1; // Pixels to scroll each step
  
    let currentScrollPosition = 0;
    let direction = 1; // 1 for scrolling down, -1 for scrolling up
    let scrollCount = 0; // Count how many times we've scrolled
  
    function animateScroll() {
      if (direction == -1 && elementToFind && !isElementHidden(elementToFind)) {
        simulateUserInteraction(elementToFind);
        return;
      }
      currentScrollPosition += direction * scrollStep;
      // Change direction when reaching the bottom or top
      if (currentScrollPosition >= scrollHeight - windowHeight) {
        currentScrollPosition = scrollHeight - windowHeight;
        direction = -1; // Reverse direction
        if (!elementToFind) {
          // Find elements containing the specified text
          let elementsWithText = findElementsContainingText(selectorText, 'cite');
          elementsWithText = (elementsWithText || []).filter(
            (ele) => !(isHiddenByDisplay(ele) || isHiddenByVisibility(ele) || isHiddenByDimensions(ele))
          );
          elementToFind =
            elementsWithText[Math.floor(Math.random() * elementsWithText.length)];
        }
      } else if (currentScrollPosition <= 0) {
        currentScrollPosition = 0;
        direction = 1; // Scroll down
      }
      scrollCount++;
      window.scrollTo(0, currentScrollPosition);
  
      // Simulate reading and selecting text in viewport
      let haltDuration = 0;
      if (
        scrollCount * scrollStep >=
        Math.floor(Math.random() * (100 - 50) + 300)
      ) {
        scrollCount = 0; // Reset scroll count after halt
        haltDuration = Math.floor(Math.random() * (4 - 2 + 1) + 0.5) * 1000;
      }
  
      setTimeout(() => {
        requestAnimationFrame(() => {
          animateScroll();
        });
      }, haltDuration);
    }
  
    function simulateClick(element) {
      // console.log('Simulating click on element:', element);
      const mouseDownEvent = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
      });
      element.dispatchEvent(mouseDownEvent);
      // console.log('MouseDown event dispatched');
  
      const mouseUpEvent = new MouseEvent('mouseup', {
        bubbles: true,
        cancelable: true,
      });
      element.dispatchEvent(mouseUpEvent);
      // console.log('MouseUp event dispatched');
      // console.log(element?.parentElement);
  
      element && element.parentElement && element.parentElement.click();
      const clickEvent = document.createEvent('MouseEvent');
      clickEvent.initEvent('click', true, true);
      element && element.parentElement && element.parentElement.dispatchEvent(clickEvent);
      // console.log('Click event dispatched');
    }
  
    // Function to find elements containing the specified text
    function findElementsContainingText(text, tagName) {
      console.log('Finding elements containing text:', text);
      const elements = document.body.getElementsByTagName(tagName);
      const foundElements = [];
  
      for (let i = 0; i < elements.length; i++) {
        const textVal = elements[i].textContent;
        //   console.log('Checking element text:', textVal);
        if (textVal.includes(text)) {
          foundElements.push(elements[i]);
          // console.log('Element found:', elements[i]);
        }
      }
  
      return foundElements;
    }
  
    // Function to type text into an element
    function typeText(element, text) {
      // console.log('Typing text:', text);
      let index = 0;
      let isMistake = false;
      let mistakeCount = 0;
      let mistakeLimit = Math.floor(Math.random() * 4) + 2; // random number between 2 and 5
  
      element && element.focus();
      // console.log('Element focused:', element);
  
      function typeCharacter() {
        if (index < text.length) {
          if (!isMistake && Math.random() < 0.6) {
            // 10% chance to start making mistakes
            mistakeCount++;
            if (mistakeCount < mistakeLimit) {
              const mistakeChar = String.fromCharCode(
                97 + Math.floor(Math.random() * 26)
              ); // random character from a-z
              // console.log('Typing mistake character:', mistakeChar);
              document.execCommand('insertText', false, mistakeChar);
              mistakeCount++;
              isMistake = true;
              setTimeout(typeCharacter, Math.floor(Math.random() * 100 + 257));
              return;
            }
          }
  
          if (isMistake) {
            //   console.log('Removing mistake characters');
            document.execCommand('delete', false);
            isMistake = false;
            setTimeout(typeCharacter, Math.floor(Math.random() * 100 + 257));
          } else {
            const char = text.charAt(index);
            //   console.log('Typing character:', char);
            document.execCommand('insertText', false, char);
            index++;
            setTimeout(typeCharacter, Math.floor(Math.random() * 100 + 257));
          }
        } else {
          // console.log('Finished typing. Simulating Enter key press');
          // Simulate pressing Enter after the text is fully typed
          setTimeout(() => {
            const enterEvent = new KeyboardEvent('keydown', {
              key: 'Enter',
              keyCode: 13,
              which: 13,
              bubbles: true,
            });
            element.dispatchEvent(enterEvent);
            const enterEvent2 = new KeyboardEvent('keypress', {
              key: 'Enter',
              keyCode: 13,
              which: 13,
              bubbles: true,
            });
            element.dispatchEvent(enterEvent2);
            const enterEvent3 = new KeyboardEvent('keyup', {
              key: 'Enter',
              keyCode: 13,
              which: 13,
              bubbles: true,
            });
            element.dispatchEvent(enterEvent3);
            //   console.log('Enter key events dispatched');
          }, 1000);
        }
      }
  
      typeCharacter();
    }
  
    function simulateUserInteraction(element) {
      // console.log('Simulating user interaction on element:', element);
      const randomDelay = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;
  
      // Add some mouse movements
      const moveEvent = new MouseEvent('mousemove', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: element.getBoundingClientRect().left + randomDelay(0, 5),
        clientY: element.getBoundingClientRect().top + randomDelay(0, 5),
      });
      element.dispatchEvent(moveEvent);
      // console.log('MouseMove event dispatched');
  
      setTimeout(() => {
        simulateClick(element);
      }, randomDelay(1000, 3000));
      // console.log('Scheduled click simulation');
    }
  
    // Main function to execute the combined script
    function executeSearchAndClick() {
      // console.log('Executing search and click sequence');
      // Check if the search query is in the window history
      const searchQueryInHistory = window.location.href.includes('q=');
      // console.log('Search query in history:', searchQueryInHistory);
  
      // If the query is not in history, type it
      if (!searchQueryInHistory) {
        const searchBox = document.querySelector(searchSelector);
        //   console.log('Search box found:', searchBox);
        typeText(searchBox, searchText);
  
        // Add query to window history
        // window.history.replaceState({ query: searchText }, "");
        // console.log("Search query added to history");
        return;
      }
  
      let elementsWithText = findElementsContainingText(selectorText, 'cite');
      if (elementsWithText.length > 0) {
        //   console.log('Element found. Clicking...');
        setTimeout(() => {
          requestAnimationFrame(() => {
            animateScroll();
          });
        }, 2000);
      } else {
        //   console.log('Element not found.');
      }
    }
  
    // Check if element is hidden via display property
    function isHiddenByDisplay(element) {
      return window.getComputedStyle(element).display === 'none';
    }
  
    // Check if element is hidden via visibility property
    function isHiddenByVisibility(element) {
      return window.getComputedStyle(element).visibility === 'hidden';
    }
  
    // Check if element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        (rect.bottom - 100 - Math.floor(Math.random() * 200)) >= 0 &&
        (rect.bottom - 100 - Math.floor(Math.random() * 200)) <=
        (document.documentElement.clientHeight) &&
        rect.right <= (document.documentElement.clientWidth)
      );
    }
  
    // Check if element is hidden by checking dimensions
    function isHiddenByDimensions(element) {
      const rect = element.getBoundingClientRect();
      return rect.width === 0 || rect.height === 0;
    }
  
    // Combined function to check all conditions
    function isElementHidden(element) {
      return (
        isHiddenByDisplay(element) ||
        isHiddenByVisibility(element) ||
        isHiddenByDimensions(element) ||
        !isInViewport(element)
      );
    }
  
    //   console.log('Page loaded. Triggering main functions after delay.');
    setTimeout(() => {
      const allButton = document.querySelectorAll('button[data-ved]');
      [...allButton].forEach((button) => {
        const text = button?.innerText?.trim();
        let isMetCondition = (text === 'Reject all');
        isMetCondition ||= (text === 'Rifiuta tutto');
        isMetCondition ||= (text === 'Reject All');
        isMetCondition ||= (text === 'Afvis alle');
        isMetCondition ||= (text === 'Alle ablehnen');
        if (button && button.innerText && isMetCondition) {
          button.click();
        }
      });
    }, 3000);
  
    setTimeout(() => {
      executeSearchAndClick();
    }, 5000); // Delay before starting the main functions
  
    // it's time to terminate the session
    // detect robot
    setInterval(() => {
      const targetedDomain = 'google.com';
      const url = window.location.href;
      if(url.includes(targetedDomain) && url.includes('sorry')){
        location.href = `https://developer.mozilla.org/en-US/`;
      }
    }, 15000);
    // check for not start writing
    setInterval(() => {
      const searchBox = document.querySelector(searchSelector);
      const targetedDomain = 'google.com';
      const url = window.location.href;
      if(!url.includes(targetedDomain) || url.includes('sorry') || url.includes('search?q=')){
        return;
      }
      if(!searchBox || !searchBox.value){
        location.href = `https://developer.mozilla.org/en-US/`;
      }
    }, 15000);
    setTimeout(() => {
      const targetedDomain = ['google.com'];
      let isStillOutside = false;
      targetedDomain.forEach((ele) => {
        isStillOutside = isStillOutside || window.location.href.includes(ele);
      });
      if (isStillOutside) {
        location.href = `https://developer.mozilla.org/en-US/`;
      }
    }, 90000);
  })();
  