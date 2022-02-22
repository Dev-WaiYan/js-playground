function compare() {
  const divPhone = document.getElementById("div-phone");
  const phone = divPhone.innerText;
  const divFax = document.getElementById("div-fax");
  const fax = divFax.innerText;

  divPhone.innerHTML = ""; // Clear old input
  divFax.innerHTML = ""; // Clear old input

  const comparedLength =
    phone.length > fax.length || phone.length === fax.length
      ? phone.length
      : fax.length;

  const arrPhone = [];
  const arrFax = [];
  const NO_NEED_HIGHLIGHT = 0;
  const NEED_HIGHLIGHT = 1;

  for (let i = 0; i < comparedLength; i++) {
    if (phone[i] === fax[i]) {
      arrPhone.push(NEED_HIGHLIGHT);
      arrFax.push(NEED_HIGHLIGHT);
    } else {
      arrPhone.push(NO_NEED_HIGHLIGHT);
      arrFax.push(NO_NEED_HIGHLIGHT);
    }
  }

  phone.split("").forEach((value, index) => {
    if (arrPhone[index] === NEED_HIGHLIGHT) {
      const highlightedPhoneElement = doHighlight(index, phone);
      divPhone.appendChild(highlightedPhoneElement);
    } else {
      divPhone.innerHTML += value;
    }
  });

  fax.split("").forEach((value, index) => {
    if (arrFax[index] === NEED_HIGHLIGHT) {
      const highlightedFaxElement = doHighlight(index, fax);
      divFax.appendChild(highlightedFaxElement);
    } else {
      divFax.innerHTML += value;
    }
  });
}
