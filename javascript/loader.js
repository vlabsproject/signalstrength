var text = document.querySelector('.text');
var percent = document.querySelector('.percent');
var progress = document.querySelector('.progress');
var count = 4;
var per = 16;
var loading = setInterval(animate, 40);

function animate() {
  if (count == 224) {
    text.textContent = "  WELCOME TO VIRTUAL LABS";
    text.style.fontSize = "70px";
    text.classList.add("add");
    clearInterval(loading);

    // Redirect after 4 seconds
    setTimeout(function() {
      window.location.href = "/html/Introduction.html";
    }, 4000); // 4 seconds in milliseconds
  } else {
    per = per + 4;
    count = count + 1;
    progress.style.width = per + 'px';
    percent.textContent = count + '%';
  }
}
