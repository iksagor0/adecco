// const successRedirection = "https://afi.org/";

// Forms
const smallFormList = ["about_yourself", "email_confirmation"];

// *********************************************
//       FORM SUBMISSION AND STEP HANDLING
// *********************************************
const small_next_btn = document.querySelector("#small_next_btn");
const small_back_btn = document.querySelector("#small_back_btn");
const small_submit_btn = document.querySelector("#small_submit_btn");
const small_back_btn2 = document.querySelector("#small_back_btn2");

let smallStep = 0;
let smallMaxStep = smallFormList.length - 1;

// ***** NEXT FUNCTIONALITY *****
pressEnterToSubmit(small_next_btn);

small_next_btn.addEventListener("click", () => {
  if (smallStep === smallFormList.indexOf("about_yourself")) {
    // Step 1
    if (!validateForm("about_yourself")) return false;

    document.querySelector("#policyHolderReachOutEmail").defaultValue =
      formData.policyHolderEmail;

    document
      .querySelector(".quote_request__action_buttons")
      .classList.add("hide");
  }

  // Step 2
  if (smallStep === smallFormList.indexOf("email_confirmation")) {
    if (!validateForm("email_confirmation")) return false;

    alert("Done");
    // Go to Thank You Page
    // window.location.href = successRedirection;
  }

  // Step Increment
  smallStep >= smallMaxStep ? smallStep : smallStep++;

  // Show Form
  smallActiveForm(smallMaxStep);
});

// Back
small_back_btn.addEventListener("click", () => {
  // Step Decrement
  smallStep <= 0 ? smallStep : smallStep--;

  smallActiveForm(smallStep);
});

small_back_btn2.addEventListener("click", () => {
  small_back_btn.click();
  document
    .querySelector(".quote_request__action_buttons")
    .classList.remove("hide");
});

small_submit_btn.addEventListener("click", () => small_next_btn.click());

function smallActiveForm(step) {
  console.log(formData);

  // remove active_section class from everywhere
  document.querySelector(".active_section")?.classList.remove("active_section");

  // set active_section class
  document
    .querySelector(`.${smallFormList[step]}`)
    ?.classList.add("active_section");

  // Conditionally Hide Back Btn
  step <= 0
    ? small_back_btn.classList.add("hide")
    : small_back_btn?.classList.remove("hide");
}
