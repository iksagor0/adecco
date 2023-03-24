// TAB SWITCH

function switchTab(target, sibling, tab_id) {
  document.getElementsByClassName(target)[0].classList.add("prefer_btn");
  document.getElementsByClassName(sibling)[0].classList.remove("prefer_btn");

  document
    .getElementsByClassName("active_tab")[0]
    .classList.remove("active_tab");

  document.getElementById(tab_id).classList.add("active_tab");
}

document
  .getElementsByClassName("email_preference")[0]
  .addEventListener("click", () => {
    switchTab("email_preference", "personal_information", "email_form");
  });

document
  .getElementsByClassName("personal_information")[0]
  .addEventListener("click", () => {
    switchTab("personal_information", "email_preference", "personal_form");
  });

// SUCCESSFUL MESSAGE ON BUTTON CLICK
document
  .getElementsByClassName("personal_info_button")[0]
  .addEventListener("click", (event) => {
    event.preventDefault();
    document
      .getElementsByClassName("personal_info_msg")[0]
      .classList.add("active_tab");
    document.documentElement.scrollTop = 20;
  });
