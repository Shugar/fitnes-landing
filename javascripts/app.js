!function(){"use strict";var r="undefined"!=typeof window?window:global;if("function"!=typeof r.require){var e={},t={},n=function(r,e){return{}.hasOwnProperty.call(r,e)},i=function(r,e){var t,n,i=[];t=/^\.\.?(\/|$)/.test(e)?[r,e].join("/").split("/"):e.split("/");for(var o=0,a=t.length;a>o;o++)n=t[o],".."===n?i.pop():"."!==n&&""!==n&&i.push(n);return i.join("/")},o=function(r){return r.split("/").slice(0,-1).join("/")},a=function(e){return function(t){var n=o(e),a=i(n,t);return r.require(a,e)}},s=function(r,e){var n={id:r,exports:{}};return t[r]=n,e(n.exports,a(r),n),n.exports},f=function(r,o){var a=i(r,".");if(null==o&&(o="/"),n(t,a))return t[a].exports;if(n(e,a))return s(a,e[a]);var f=i(a,"./index");if(n(t,f))return t[f].exports;if(n(e,f))return s(f,e[f]);throw new Error('Cannot find module "'+r+'" from "'+o+'"')},u=function(r,t){if("object"==typeof r)for(var i in r)n(r,i)&&(e[i]=r[i]);else e[r]=t},l=function(){var r=[];for(var t in e)n(e,t)&&r.push(t);return r};r.require=f,r.require.define=u,r.require.register=u,r.require.list=l,r.require.brunch=!0}}(),require.register("initialize",function(r,e,t){$(window).load(function(){return $(".myPreloader .preloader").removeClass("preloader"),$(".myPreloader").fadeOut("myPreloader-active")}),$(document).ready(function(){var r,e;return $(".firstScreen--right-slider").slick({arrows:!1,autoplay:!0,autoplaySpeed:4e3}),$(".firstScreen--left-footer").addClass("firstScreen--left-footer-submit"),r=function(r,e){return setTimeout(e,r)},$(".first-link").click(function(){return $(".first-link").addClass("active"),$(".second-link").removeClass("active"),$(".first-link").hasClass("active")?($(".firstScreen--form-submit").removeClass("firstScreen--form-submit-active"),$(".firstScreen--form").fadeOut("normal",function(){return $(".firstScreen--row").fadeIn()})):void 0}),$(".firstScreen--left-footer-button, .second-link").click(function(){return $(".first-link").removeClass("active"),$(".second-link").addClass("active"),$(".firstScreen--row").fadeOut("normal",function(){return $(".firstScreen--form").fadeIn("normal",function(){return $(".firstScreen--form-submit").addClass("firstScreen--form-submit-active")})})}),$("form .datepicker").datepicker({closeText:"Закрыть",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Сегодня",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Нед",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),e=function(r){var e;return e=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,e.test(r)},$("form .phone").mask("+0 (000) 000-00-00"),Parse.initialize("WD4SCqCV1MsggPivlA2FvNuwHym2lIWxNhpAmQxu","bgN3ACqo9x6mmfPdtaKUoSvBVw5PFSeMucjiNx8H"),$(".firstScreen--form-submit .button").click(function(r){var t,n,i,o,a;return r.preventDefault(),t=$("form .firstname").val(),n=$("form .lastname").val(),i=$("form .phone").val(),o=$("form .email").val(),r=$("form .datepicker").val(),a=$("form .timepicker").val(),$("form .firstname").val().length>0&$("form .lastname").val().length>0&e(o)&$("form .phone").val().length>0&$("form .datepicker").val().length>0&$("form .timepicker").val().length>0?Parse.Cloud.run("sendmail",{target:"7stars_marketing@mail.ru",originator:"7stars_marketing@mail.ru",subject:"Заявка на получение карточки",text:"Имя: "+t+"\n\nФамилия: "+n+"\n\nТелефон: "+i+"\n\nE-mail: "+o+"\n\nУдобная дата: "+r+"\n\nУдобное время: "+a+"\n\n"},{success:function(r){return sweetAlert("Спасибо!"," Скоро ответим.","success")},error:function(r){return sweetAlert("Вы не заполнили обязательные поля","","error")}}):void 0})})});