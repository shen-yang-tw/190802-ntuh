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

//Toggle Show/Hide by attribute - onclick="toggleShow(findChildren(findParent(this, 'LI'), '.detail'), 'hidden')"
function toggleShow(thisElement) {
  //if (elID.getAttribute("aria-hidden") == "true"))
  if (thisElement.hasAttribute("hidden")) {
    thisElement.removeAttribute("hidden");
  } else {
    thisElement.setAttribute("hidden", true);
  }
}

//Toggle Show/Hide by attribute - onclick="toggleAllShow(findChildren(this, '.sort'));"
function toggleAllShow(allChildren) {
  //if (elID.getAttribute("aria-hidden") == "true"))
  console.log(allChildren.length);
  for (var i = 0; i < allChildren.length; i++) {
    if (allChildren[i].hasAttribute("hidden")) {
      allChildren[i].removeAttribute("hidden");
    } else {
      allChildren[i].setAttribute("hidden", true);
    }
  }
}

//toggle all class by array - onclick="toggleAllClass(findChildren(findParent(this, 'LI'), '.detail'), 'hidden'); return false;"
//return false - avoid the page jumping straight to the top"
function toggleAllClass(allChildren, cls1, cls2) {
  for (var i = 0; i < allChildren.length; i++) {
    allChildren[i].classList.toggle(cls1);
    if (cls2 != null) {
      allChildren[i].classList.toggle(cls2);
    }
  }
  // return false; //not working
}
//toggle two classes - onmouseover="removeAddClasses(findChildren(findParent(this, 'LI'), 'p'), 'uk-text-truncate', 'flex-wrap')" onmouseout="removeAddClasses(findChildren(findParent(this, 'LI'), 'p'), 'flex-wrap', 'uk-text-truncate')"
function removeAddClasses(allChildren, classRemove, classAdd) {
  for (var i = 0; i < allChildren.length; i++) {
    allChildren[i].classList.remove(classRemove);
    allChildren[i].classList.add(classAdd);
  }
}

function findParent(thisElement, parentTagName) {
  while ((thisElement = thisElement.parentElement) && (thisElement.tagName != parentTagName));
  //Searching loop only stop while parent is founded
  return thisElement; //if searching no one will return null
}

function findChildren(parentEL, sl) {
  return parentEL.querySelectorAll(sl);
}

function findChild(parentEL, sl) {
  return parentEL.querySelector(sl);
  // return parentEL.querySelector(sl).tagName;
}

function findChildClass(parentEL, sl) {
  return parentEL.querySelector(sl).className;
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

// onclick="plusHeight('.uk-table', findChild(findParent(this, 'DIV'), '[uk-dropdown]'))"
function plusHeight(sel, plusSelector) {
  var el1 = document.querySelector(sel);
  // var el2 = document.querySelector(plusSelector);
  // var el2class = document.querySelector(plusSelector).className;
  // el2.style.visibility = 'hidden';
  // const h0 = plusSelector.getBoundingClientRect().height;
  plusSelector.style.display = 'block';
  if (plusSelector.getBoundingClientRect().bottom > el1.getBoundingClientRect().bottom) {
    var h = el1.getBoundingClientRect().height + plusSelector.getBoundingClientRect().bottom - el1.getBoundingClientRect().bottom;
  } else {
    var h = el1.getBoundingClientRect().height;
  }
  // var h = el1.clientHeight + plusSelector.getBoundingClientRect().bottom - el1.getBoundingClientRect().bottom;
  console.log(el1.getBoundingClientRect().height);
  el1.style.height = h + "px";
  plusSelector.style.display = 'inherit';
}

//onmouseover="viewHeight('[uk-dropdown]', 'nav.bg_primary')"
function viewHeight(sel, upperSelector) {
  if (document.querySelector(sel) != null && document.querySelector(upperSelector) != null) {
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
  if (document.querySelector(sel) != null && document.querySelector(upperSelector) != null && document.querySelector(lowerSelector) != null) {
    var topHeight = document.querySelector(upperSelector).clientTop + document.querySelector(upperSelector).clientHeight;
    var lowerHeight = document.querySelector(lowerSelector).clientHeight;
    document.querySelector(sel).style.height = window.innerHeight - topHeight - lowerHeight + "px"; //CANNOT use "px !important"
  }
}

function sameHeight(sel, target1, target2) {
  if (document.querySelector(sel) != null && document.querySelector(target1) != null && document.querySelector(target2) != null) {
    document.querySelector(sel).style.height = document.querySelector(target1).clientHeight + document.querySelector(target2).clientHeight + "px"; //CANNOT use "px !important"
  }
}

//------------- font resize ------------------------------------------------//
function fontResize(classFontM, classFontL, classButtonFont, classButtonFontS, classButtonFontM, classButtonFontL, classActive) {
  if (document.querySelector("." + classButtonFontS).classList.contains(classActive)) {
    document.querySelector("html").classList.remove(classFontM);
    document.querySelector("html").classList.remove(classFontL);
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
        document.querySelector("html").classList.remove(classFontM);
        document.querySelector("html").classList.remove(classFontL);
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

//------------- Form ------------------------------------------------//

//select onchange Event - <select onchange="showOption()">
function showOption(thisSelect, index, sl) {
  var showEl = document.querySelectorAll(sl);
  var i;
  if (thisSelect.selectedIndex == index) {
    for (i = 0; i < showEl.length; i++) {
      showEl[i].style.setProperty("display", "block", "important");
    }
  } else {
    for (i = 0; i < showEl.length; i++) {
      showEl[i].style.setProperty("display", "none", "important");
    }
  }
}

//--Checkbox toggle check all - <input type="checkbox" onchange="toggleCheckAll(this, '.listCheck')"> or <button onclick="toggleCheckAll(this, '.listCheck')">
function toggleCheckAll(thisClick, inputClass) {
  //thisClick means the "owner" and CANNOT use "this" that means the Global object "Window"
  thisClick.classList.toggle("checked");
  var i, el = document.querySelectorAll(inputClass);
  //--set all input checked & unchecked--
  if (thisClick.classList.contains("checked")) {
    //if 'select all' checked
    for (i = 0; i < el.length; i++) {
      el[i].checked = true;
      el[i].offsetParent.classList.add("checked");
      //parent el<li> add class "checked" when input checked
    }
  } else {
    //if 'select all' unchecked
    for (i = 0; i < el.length; i++) {
      el[i].checked = false;
      el[i].offsetParent.classList.remove("checked");
      //parent el<li> remove class "checked" when input unchecked
    }
  }
}

//------------- End Form ------------------------------------------------//

//Table width in editor
function tableWidth(el) {
  var target = document.querySelectorAll(el);
  var w = [], sw = [];
  for (var i = 0; i < target.length; i++) {
    if (target[i].getAttribute("width") == null) {
      w[i] = "";
    }
    else {
     w[i] = target[i].getAttribute("width");
    }
  }
  for (var i = 0; i < target.length; i++) {
    sw[i] = target[i].style.width;
  }
  if (window.innerWidth <= 959 || document.documentElement.clientWidth <= 959) {
    for (var i = 0; i < target.length; i++) {
      target[i].style.setProperty("width", "100%", "important");
    }
  } else {
    for (var i = 0; i < target.length; i++) {
      if (target[i].getAttribute("width") != null) {
        target[i].setAttribute("width", w[i]);
      }
      if (target[i].style.width != "") {
        target[i].style.setProperty("width", sw[i]);
      }
    }
  }
}


if (document.querySelector(".text_size") != null) {
  window.fontResize("text-m", "text-l", "text_size", "text_size-s", "text_size-m", "text_size-l", "active");
}
window.removeAll("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty, .ifEmpty:empty");

window.onload = function() {
  gotoTop("#gototop", "opacity-100")
};
window.onscroll = function() {
  gotoTop("#gototop", "opacity-100")
};

if (document.querySelector(".logo_cht, logo_eng") != null) {
  window.fitText(document.querySelector(".logo_cht"), 2.2, {
    minFontSize: '10px',
    maxFontSize: '20px'
  });
  window.fitText(document.querySelector(".logo_eng"), 3, {
    minFontSize: '7px',
    maxFontSize: '16px'
  });
}

//uk-slideshow height, working with CSS {min-height: auto !important}
window.onload = function() {
  viewHeightMiddle("#slideshow .uk-slideshow-items", "header", ".bg_bar")
  sameHeight(".bg_menu", ".bg_menu~section:nth-of-type(1)", ".bg_menu~section:nth-of-type(2)")
  if (document.querySelector(".editor table") != null) {
    tableWidth(".editor table")
  }
};
window.onresize = function() {
  viewHeightMiddle("#slideshow .uk-slideshow-items", "header", ".bg_bar")
  sameHeight(".bg_menu", ".bg_menu~section:nth-of-type(1)", ".bg_menu~section:nth-of-type(2)")
};

// document.querySelector(".list>li>div>a").onmouseover = function() {toggleAllClass(findChildren(findParent(this, 'LI'), 'p'), 'uk-text-truncate', 'hover', this)};
//--------------- end pure js ----------------------------------------------------------//