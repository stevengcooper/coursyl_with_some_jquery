// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .


function disableSubmitButton() {
  $(event.target).prop("disabled", true);
  $(event.target).closest("form").submit();
}

function bindSubmitClick() {
  $("input[type=submit]").on("click", disableSubmitButton);
}

$(bindSubmitClick);


function deleteRow() {
  var row = $(event.target).closest(".association");
  row.css("display", "none");
  var checkbox = $(event.target).siblings().last();
  checkbox.prop("checked", true);
}


function displayGrade(displayType) {
  var associations = $("#associations");
  var last_section = associations.children().last();
  if (displayType) {
    last_section.css("display", "block");
  } else {
    last_section.css("display", "none");
  }
}

function hideLastRow() {
  displayGrade(false);
}

function calendar() {
  var cal1x = new CalendarPopup("testdiv1");
}
