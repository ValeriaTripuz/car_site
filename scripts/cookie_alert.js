function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function checkCookies() {
  let cookieNote = document.getElementById("cookie_note");
  let cookieBtnAccept = cookieNote.querySelector(".cookie_accept");
  let cookieBtnReject = cookieNote.querySelector(".cookie_reject");
  let cookieBtnSettings = cookieNote.querySelector(".cookie_settings");

  if (!getCookie("cookies_policy")) {
    cookieNote.style.display = "block";
  }

  cookieBtnAccept.addEventListener("click", function () {
    setCookie("cookies_policy", "true", 365);
    cookieNote.style.display = "none";
  });

  cookieBtnReject.addEventListener("click", function () {
    cookieNote.style.display = "none";
  });
}

checkCookies();
