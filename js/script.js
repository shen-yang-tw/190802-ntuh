//Show
function show(el) {
  var target = document.querySelector(el);
  // target.style.display = "block";
  target.style.setProperty("display", "block", "important");
}

//Hide
function hide(el) {
  var target = document.querySelector(el);
  // target.style.display = "none";
  target.style.setProperty("display", "none", "important");
}

//Add Class to all
function AddClass(el, className) {
  var _el = document.querySelectorAll(el);
  for (var i = 0; i < _el.length; i++) {
    _el[i].classList.add(className);
  }
}

//Remove Class to all
function RemoveClass(el, className) {
  var _el = document.querySelectorAll(el);
  for (var i = 0; i < _el.length; i++) {
    _el[i].classList.remove(className);
  }
}

//Remove & Add Class to all
function RemoveAddClass(el, classRemove, classAdd) {
  var _el = document.querySelectorAll(el);
  for (var i = 0; i < _el.length; i++) {
    _el[i].classList.remove(classRemove);
    _el[i].classList.add(classAdd);
  }
}

//Remove all by selector
function removeAll(sel) {
  var target = document.querySelectorAll(sel);
  for (var i = 0; i < target.length; i++) {
    target[i].parentNode.removeChild(target[i]);
  }
}

//toggle all class by array - onclick="toggleAllClass(findChildren(findParent(this, 'LI'), '.detail'), 'hidden')"
//return false - avoid the page jumping straight to the top"
function toggleAllClass(allChildren, cls) {
  for (var i = 0; i < allChildren.length; i++) {
    allChildren[i].classList.toggle(cls);
  }
  // return false; //not working
}
function findParent(thisElement, parentTagName) {
  while ((thisElement = thisElement.parentElement) && (thisElement.tagName != parentTagName));
  //Searching loop only stop while parent is founded
  return thisElement; //if searching no one will return null
}
function findChildren(parentEL, sl) {
  return parentEL.querySelectorAll(sl);
}

//go to top
function gotoTop(sl, classFadeName) {
  var el = document.querySelector(sl);
  // el.style.opacity = "0";
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    el.classList.add(classFadeName);
  } else {
    el.classList.remove(classFadeName);
  }
}

//get this year - <p onload="thisYear(this)"></p>
function thisYear(thisSelector) {
  var d = new Date();
  var y = d.getFullYear();
  document.querySelector(thisSelector).innerHTML = y;
}

//onmouseover="viewHeight('[uk-dropdown]', 'nav.bg_primary')"
function viewHeight(sel, upperSelector) {
  if (document.querySelector(sel)!=null && document.querySelector(upperSelector)!=null) {
    var topHeight = document.querySelector(upperSelector).getBoundingClientRect().top + document.querySelector(upperSelector).getBoundingClientRect().height;
    var target = document.querySelectorAll(sel);
    for (var i = 0; i < target.length; i++) {
      target[i].style.maxHeight = window.innerHeight - topHeight + "px";
    }
  }
}

//viewHeightMiddle(".uk-slideshow-items", "header", ".bg_bar") - uk-slideshow height, working with CSS {min-height: auto !important};
//Subtracts the height of preceding and following element
function viewHeightMiddle(sel, upperSelector, lowerSelector) {
  if (document.querySelector(sel)!=null && document.querySelector(upperSelector)!=null && document.querySelector(lowerSelector)!=null) {
    var topHeight = document.querySelector(upperSelector).clientTop + document.querySelector(upperSelector).clientHeight;
    var lowerHeight = document.querySelector(lowerSelector).clientHeight;
    document.querySelector(sel).style.height = window.innerHeight - topHeight - lowerHeight + "px";
  }
  // var w = window.outerWidth;
  // if (w <= 959) {
  //   document.querySelector(sel).style.height = window.innerHeight - topHeight - lowerHeight + "px";
  // }
}

//------------- font resize ------------------------------------------------//
function fontResize(classFontM, classFontL, classButtonFont, classButtonFontS, classButtonFontM, classButtonFontL, classActive) {
  if (document.querySelector("." + classButtonFontS).classList.contains(classActive)) {
    document.querySelector("html").classList.remove(classFontM, classFontL);
  }
  if (document.querySelector("." + classButtonFontM).classList.contains(classActive)) {
    document.querySelector("html").classList.remove(classFontL);
    document.querySelector("html").classList.add(classFontM);
  }
  if (document.querySelector("." + classButtonFontL).classList.contains(classActive)) {
    document.querySelector("html").classList.remove(classFontM);
    document.querySelector("html").classList.add(classFontL);
  }
  var btnFont = document.querySelectorAll("." + classButtonFont);
  for (var i = 0; i < btnFont.length; i++) {
    btnFont[i].onclick = function() {
      RemoveClass("." + classButtonFont, classActive); //Outer function
      this.classList.add(classActive); //Error: Cannot use 'btnFont[i]' to replace 'this'
      if (this.classList.contains(classButtonFontS)) { //Error: Cannot use 'buttonFontS' (it's a selector not the class name)
        document.querySelector("html").classList.remove(classFontM, classFontL);
      }
      if (this.classList.contains(classButtonFontM)) {
        document.querySelector("html").classList.remove(classFontL);
        document.querySelector("html").classList.add(classFontM);
      }
      if (this.classList.contains(classButtonFontL)) {
        document.querySelector("html").classList.remove(classFontM);
        document.querySelector("html").classList.add(classFontL);
      }
    };
  }
}

//------------- End font resize ------------------------------------------------//


if (document.querySelector(".text_size") != null) {
  window.fontResize("text-m", "text-l", "text_size", "text_size-s", "text_size-m", "text_size-l", "active");
}
window.removeAll("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, .ifEmpty:empty");

window.onload = function() {gotoTop("#gototop", "opacity-100")};
window.onscroll = function() {gotoTop("#gototop", "opacity-100")};

window.fitText( document.querySelector(".logo_cht"), 2.2, { minFontSize: '10px', maxFontSize: '20px' } );
window.fitText( document.querySelector(".logo_eng"), 3, { minFontSize: '7px', maxFontSize: '16px' } );

//uk-slideshow height, working with CSS {min-height: auto !important}
window.onload = function() {viewHeightMiddle(".uk-slideshow-items", "header", ".bg_bar")};
window.onresize = function() {viewHeightMiddle(".uk-slideshow-items", "header", ".bg_bar")};

//--------------- end pure js ----------------------------------------------------------//


