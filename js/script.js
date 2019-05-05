/*************************************
  Interactive Form 
  By: Aaron Billings
 **************************************/

// Variables

const $nameInput = $("#name");
const $emailInput = $("#mail");
const $otherTitle = $("#other-title");
const $designOption = $("#design");

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
 start of functions 
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
  console.log(total);
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
  } else if ($payment === "select_method") {
    $("#credit-card").hide();
    $("#bitcoin").hide();
    $("#paypal").hide();
  }
};

/*************** 
 End of functions 
*/

/*************** 
 Start of event listeners 
*/

// On payment method change the action occurs
$("#payment").on("change", togglePayment);
// toggle function only happens 'on' a option change
$("#design").on("change", toggleShirts);
// loops through all of the checkbox elements
const $checkboxes = $(".activities input").each((index, checkbox) => {
  console.log(index, checkbox);
});
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
// "Payment Info" section
// Display payment sections based on the payment option chosen in the select menu.
// The "Credit Card" payment option should be selected by default. Display the #credit-card div, and hide the "PayPal" and "Bitcoin" information. Payment option in the select menu should match the payment option displayed on the page.
// When a user selects the "PayPal" payment option, the PayPal information should display, and the credit card and “Bitcoin” information should be hidden.
// When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.
// NOTE: The user should not be able to select the "Select Payment Method" option from the payment select menu, because the user should not be able to submit the form without a chosen payment option.

// Form validation
// If any of the following validation errors exist, prevent the user from submitting the form:
// Name field can't be blank.
// Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example.
// User must select at least one checkbox under the "Register for Activities" section of the form.
// If the selected payment option is "Credit Card," make sure the user has supplied a Credit Card number, a Zip Code, and a 3 number CVV value before the form can be submitted.
// Credit Card field should only accept a number between 13 and 16 digits.
// The Zip Code field should accept a 5-digit number.
// The CVV should only accept a number that is exactly 3 digits long.
// NOTE: Don't rely on the built in HTML5 validation by adding the required attribute to your DOM elements. You need to actually create your own custom validation checks and error messages.

// NOTE: Avoid using snippets or plugins for this project. To get the most out of the experience, you should be writing all of your own code for your own custom validation.

// NOTE: Make sure your validation is only validating Credit Card info if Credit Card is the selected payment method.

// Form validation messages
// Provide some kind of indication when there’s a validation error. The field’s borders could turn red, for example, or even better for the user would be if a red text message appeared near the field.
// The following fields should have some obvious form of an error indication:
// Name field
// Email field
// Register for Activities checkboxes (at least one must be selected)
// Credit Card number (Only if Credit Card payment method is selected)
// Zip Code (Only if Credit Card payment method is selected)
// CVV (Only if Credit Card payment method is selected)
// Note: Error messages or indications should not be visible by default. They should only show upon submission, or after some user interaction.

// Form works without JavaScript - Progressive Enhancement
// The user should still have access to all form fields and payment information if JS isn't working for whatever reason. For example, when the JS is removed from the project:
// The “Other” text field under the "Job Role" section should be visible
// All information for Bitcoin, PayPal or Credit Card payments should be visible.
