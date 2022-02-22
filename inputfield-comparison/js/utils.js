function preventDefault(event) {
  //   prevent enter key;
  //   not to active DIV element when keydown "enter".
  if (event.code === "Enter") {
    event.preventDefault();
  }

  // Clear highlight
  for (
    let i = 0;
    i < document.getElementsByClassName("highlight").length;
    i++
  ) {
    document.getElementsByClassName("highlight")[i].style.color = "#000";
  }
}

function doHighlight(position, target) {
  const spanElement = document.createElement("span");
  spanElement.innerText = target[position];
  spanElement.setAttribute("class", "highlight");
  return spanElement;
}
