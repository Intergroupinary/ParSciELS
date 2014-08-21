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
//= require bootstrap-sprockets
//= require bootstrap.min
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$ ->
  date_time = (id) ->
    date = new Date
    year = date.getFullYear()
    month = date.getMonth()
    months = new Array("January", "February", "March", "April", "May", "June", "Jully", "August", "September", "October", "November", "December")
    d = date.getDate()
    day = date.getDay()
    days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
    h = date.getHours()
    h = "0" + h  if h < 10
    m = date.getMinutes()
    m = "0" + m  if m < 10
    s = date.getSeconds()
    s = "0" + s  if s < 10
    result = "" + days[day] + " " + months[month] + " " + d + " " + year + " " + h + ":" + m + ":" + s
    document.getElementById(id).innerHTML = result
    setTimeout "date_time(\"" + id + "\");", "1000"
    true  
