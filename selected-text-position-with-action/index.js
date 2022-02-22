const s1 = document.getElementsByClassName("s1")[0];
const s2 = document.getElementsByClassName("s2")[0];
const s3 = document.getElementsByClassName("s3")[0];

s3.addEventListener("click", (e) => {
  const selectedText = window.getSelection().toString();

  const existingContainer = document.getElementById("container");
  if (existingContainer) {
    s3.removeChild(existingContainer);
  }

  if (selectedText !== "") {
    const btn = document.createElement("button");
    btn.innerText = "Go to google.com";
    btn.onclick = () => {
      window.getSelection().empty();
      window.location.href = "https://google.com";
    };

    const popupBoxContainer = document.createElement("div");
    popupBoxContainer.setAttribute("id", "container");
    popupBoxContainer.style.position = "absolute";
    popupBoxContainer.style.left = `${e.pageX}px`;
    popupBoxContainer.style.top = `${e.pageY}px`;

    popupBoxContainer.appendChild(btn);
    s3.appendChild(popupBoxContainer);
  }
});
