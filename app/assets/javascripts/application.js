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
  var submitButton = document.getElementById("save");
  submitButton.disabled = true;
}

// function hideLastGrade () {
//   var associations = document.getElementById("associations");
//   var last_section = associations.lastElementChild;
//   if (clicked === false) {last_section.style.display = "none"};
// }
//
// function showLastGrade () {
//   var associations = document.getElementById("associations");
//   var last_section = associations.lastElementChild;
//   var show = true;
//   last_section.style.display = "block";
// }

function deleteRow(arrayId) {
  var row = document.getElementsByClassName("btn-danger")[arrayId].parentNode.parentNode;
  row.style.display = "none";
  var checkbox = document.getElementsByClassName("destroy")[arrayId];
  checkbox.value = true;

}


function displayGrade(displayType) {
  var associations = document.getElementById("associations");
  var last_section = associations.lastElementChild;
  if (displayType) {
    last_section.style.display = "block";
    var clicked = true
  } else {
    last_section.style.display = "none";
  }
}

// function hideRow(btn-danger) {
//   btn-danger.parent.display = "none";
// }
