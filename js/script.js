/*************************************
  Interactive Form 
  By: Aaron Billings
 **************************************/

// Variables

const $nameInput = $("#name");
const $emailInput = $("#mail");
const $otherTitle = $("#other-title");
const $designOption = $("#design");
const $creditCard = $("#cc-num");
const $zipCode = $("#zip");
const $cvv = $("#cvv");

// js puns variables
const $cornFlowerblue = $("#color option").eq(1);
const $darkSlateGrey = $("#color option").eq(2);
const $gold = $("#color option").eq(3);
const $js_puns_header = $("#js-puns");

// js hearts elements

const $tomato = $("#color option").eq(4);
const $steelBlue = $("#color option").eq(5);
const $dimGrey = $("#color option").eq(6);
const $js_hearts_header = $("#js-hearts");

//// ”Register for Activities” section variables
let $main_conf = $("#all");
let $js_frameworks = $("#js-frameworks"); // 9am - 12pm
let $js_libs = $("#js-libs"); // 1pm - 4pm
let $express = $("#express"); // 9am - 12pm
let $node = $("#node"); // 1pm - 4pm
let $build_tools = $("#build-tools");
let $npm = $("#npm");

// Name input is focused on by default on load
$($nameInput).focus();

// ”T-Shirt Info” section
// For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.
//

$cornFlowerblue.hide();
$darkSlateGrey.hide();
$gold.hide();
$js_puns_header.hide();

$tomato.hide();
$steelBlue.hide();
$dimGrey.hide();
$js_hearts_header.hide();

/*************** 
 Form functions 
*/

//Function that allows user to toggle between options and only see colors that match that option

const toggleShirts = () => {
  if ($("#design").val() === "js puns") {
    $cornFlowerblue.show();
    $darkSlateGrey.show();
    $gold.show();
    $js_puns_header.show();
  } else {
    $cornFlowerblue.hide();
    $darkSlateGrey.hide();
    $gold.hide();
    $js_puns_header.hide();
  }

  if ($("#design").val() === "heart js") {
    $tomato.show();
    $steelBlue.show();
    $dimGrey.show();
    $js_hearts_header.show();
  } else {
    $tomato.hide();
    $steelBlue.hide();
    $dimGrey.hide();
    $js_hearts_header.hide();
  }
};
// disables time slots that match the time slot that the user chooses then adds a strike through to unavailable selection
const checkStatus = () => {
  if ($js_frameworks.is(":checked")) {
    $express.prop("disabled", true);
    $express.parent().addClass("strike");
  } else if ($express.is(":checked")) {
    $js_frameworks.prop("disabled", true);
    $js_frameworks.parent().addClass("strike");
  } else {
    $js_frameworks.prop("disabled", false);
    $js_frameworks.parent().removeClass("strike");
    $express.prop("disabled", false);
    $express.parent().removeClass("strike");
  }
  if ($js_libs.is(":checked")) {
    $node.prop("disabled", true);
    $node.parent().addClass("strike");
  } else if ($node.is(":checked")) {
    $js_libs.prop("disabled", true);
    $js_libs.parent().addClass("strike");
  } else {
    $js_libs.prop("disabled", false);
    $js_libs.parent().removeClass("strike");
    $node.prop("disabled", false);
    $node.parent().removeClass("strike");
  }
};

// if checkbox is clicked add the value to the total if it's unchecked reduce the total by the value item amount and displays a running total
const getTotalPrice = () => {
  let total = 0;

  if ($main_conf.is(":checked")) {
    total += parseInt($main_conf.val());
  } else if ($main_conf.is(":checked")) {
    total -= parseInt($main_conf.val());
  }

  if ($js_frameworks.is(":checked")) {
    total += parseInt($js_frameworks.val());
  } else if ($js_frameworks.is(":checked")) {
    total -= parseInt($js_frameworks.val());
  }

  if ($js_libs.is(":checked")) {
    total += parseInt($js_libs.val());
  } else if ($js_libs.is(":checked")) {
    total -= parseInt($js_libs.val());
  }

  if ($express.is(":checked")) {
    total += parseInt($express.val());
  } else if ($express.is(":checked")) {
    total -= parseInt($express.val());
  }

  if ($node.is(":checked")) {
    total += parseInt($node.val());
  } else if ($node.is(":checked")) {
    total -= parseInt($express.val());
  }

  if ($build_tools.is(":checked")) {
    total += parseInt($build_tools.val());
  } else if ($build_tools.is(":checked")) {
    total -= parseInt($express.val());
  }

  if ($npm.is(":checked")) {
    total += parseInt($npm.val());
  } else if ($npm.is(":checked")) {
    total -= parseInt($express.val());
  }
  $("#amount").html(`Your total is $: ${total}`);
};

// ensures only the correct payment information shows for the payment type selected
const togglePayment = () => {
  const $payment = $("#payment").val();
  if ($payment === "paypal") {
    $("#credit-card").hide();
    $("#bitcoin").hide();
    $("#paypal").slideDown(500);
  } else if ($payment === "bitcoin") {
    $("#paypal").hide();
    $("#credit-card").hide();
    $("#bitcoin").slideDown(500);
  } else if ($payment === "credit card") {
    $("#credit-card").slideDown(500);
    $("#paypal").hide();
    $("#bitcoin").hide();
  }
};

/*************** 
 Validator functions 
*/

const isValidName = name => {
  return /^[a-z]+\s[a-z]+$/i.test(name);
};

const isValidEmail = email => {
  return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{3}$/i.test(email);
};

const isValidCreditCard = creditCard => {
  return /^[3|4|5|6]([0-9]{15}$|[0-9]{12}$|[0-9]{13}$|[0-9]{14}$)/.test(
    creditCard
  );
};

const isValidZipCode = zipcode => {
  return /^[0-9]{5}$/.test(zipcode);
};

const isValidCVV = cvv => {
  return /^[0-9]{3}$/.test(cvv);
};

const isCreditCardFilled = text => {};

// checkes to see if inputs are empty or correct, if they are, then border turns red
const checkForCorrectInfo = () => {
  const $payment = $("#payment").val();

  if ($nameInput.val() === "") {
    $nameInput.css("border-color", "red");
    alert("Name field can not be blank");
    $("form").submit(e => {
      e.preventDefault();
    });
  }
  if (
    $emailInput.val() === "" &&
    $emailInput.val() === createListener(isValidEmail)
  ) {
    $emailInput.css("border-color", "red");
    alert("Email field must be formatted correctly i.e (example@email.com)");
    $("form").submit(e => {
      e.preventDefault();
    });
  }
  if ($payment === "credit card" && $creditCard.val() === "") {
    $creditCard.css("border-color", "red");
    alert("credit card info can not be blank");
    $("form").submit(e => {
      e.preventDefault();
    });
  }
  if ($payment === "credit card" && $zipCode.val() === "") {
    $zipCode.css("border-color", "red");
    alert("Zipcode can not be blank");
    $("form").submit(e => {
      e.preventDefault();
    });
  }
  if ($payment === "credit card" && $cvv.val() === "") {
    $cvv.css("border-color", "red");
    alert("Cvv can not be blank");
    $("form").submit(e => {
      e.preventDefault();
    });
  }
  if ($checkboxes.is(":checked") === false) {
    $checkboxes.parent().css("color", "red");
    alert("please choose an activity");
    $("form").submit(e => {
      e.preventDefault();
    });
  }
};

const showOrHideTip = (show, element) => {
  // show element when show is true, hide when false
  if (show) {
    element.style.display = "";
  } else {
    element.style.display = "none";
  }
};
// creates tool tip by targeting next element with error message after input
function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}

/*************** 
 Start of event listeners 
*/

// submit button 'register'
$("button").on("click", checkForCorrectInfo);

// name input
$nameInput.on("input", createListener(isValidName));
// email input
$emailInput.on("input", createListener(isValidEmail));
// credit card input
$creditCard.on("input", createListener(isValidCreditCard));
// zip code input
$zipCode.on("input", createListener(isValidZipCode));
// cvv input
$cvv.on("input", createListener(isValidCVV));

// On payment method change the action occurs
$("#payment").on("change", togglePayment);
// toggle function only happens 'on' a option change
$("#design").on("change", toggleShirts);
// loops through all of the checkbox elements
const $checkboxes = $(".activities input").each((index, checkbox) => {});
// on click only allows you to select options that are not at the same time slot
$checkboxes.on("click", checkStatus);
// changes price based on what user clicks on
$checkboxes.on("click", getTotalPrice);

// hides text field from view on load
$otherTitle.hide();
// listens for change on option then slides down the text input field when other option is chosen and hides it if it's not.
$("#title").on("change", event => {
  const e = event.target.value;
  if (e === "other") {
    $otherTitle.slideDown(500);
  } else {
    $otherTitle.hide();
  }
});

// keep credit card method selected as default
$("#payment option")
  .eq(1)
  .prop("selected", true);

// hides paypal & bitcoin by default
$("#paypal").hide();
$("#bitcoin").hide();

// disables the 'select payment method' button since that is not a payment method they should be able to choose from
$("#payment option")
  .eq(0)
  .prop("disabled", true);

// validator messages
$nameInput.after(`<span class="error">Must be a full name</span>`);
$emailInput.after(`<span class="error">Must be a valid email address</span>`);
$creditCard.after(
  `<span class="error">Must be a valid credit card number</span>`
);
$zipCode.after(`<span class="error">Must be a valid zipcode</span>`);
$cvv.after(`<span class="error">Must be a valid cvv</span>`);

// hides all validator messages by default
$(".error").hide();
