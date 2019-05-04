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

// Name input is focused on by default on load
$($nameInput).focus();

// ”Job Role” section

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

/*
Function that allows user to toggle between options and only see colors that match that option
*/
const toggleOptions = () => {
  if ($("#design").val() === "js puns") {
    console.log($("#design").val());
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
    console.log($("#design").val());
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

// function above only happens 'on' a option change
$("#design").on("change", toggleOptions);

// Some events are at the same day and time as others. If the user selects a workshop, don't allow selection of a workshop at the same day and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
// When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
// As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.

//// ”Register for Activities” section variables
const $main_conf = $("#all");
const $js_frameworks = $("#js-frameworks"); // 9am - 12pm
const $js_libs = $("#js-libs"); // 1pm - 4pm
const $express = $("#express"); // 9am - 12pm
const $node = $("#node"); // 1pm - 4pm
const $build_tools = $("#build-tools");
const $npm = $("#npm");

// loops through all of the checkbox elements
const $checkboxes = $(".activities input").each((index, checkbox) => {
  console.log(index, checkbox);
});

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

$checkboxes.on("click", checkStatus);

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
