// briteform
function validateEmail(a){var b=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return b.test(a)}var ajaxForm=!1;jQuery(function(a){a("form.briteform").append('<div class="tooltip"><div class="tooltip-container"><div class="tooltip-msg"></div></div></div>'),a("<link>").appendTo("head").attr({type:"text/css",rel:"stylesheet",href:"https://lp1.empiricus.com.br/assets/css/briteform.css"});var b=new Array,c=function(d){var e=d.parent("form"),f=e.find(".btn-submit"),g=e.find(".input-email"),h=e.find("[name=sourceId]"),i=e.find(".tooltip"),j=e.find(".tooltip-msg");if(!f.hasClass("disable")){i.removeClass("show"),g.keypress(function(){i.removeClass("show")});var k={emailAddress:g.val(),sourceId:h.val()};if(!k.emailAddress)return j.html("Preencha um e-mail!"),void i.addClass("show");if(!validateEmail(k.emailAddress))return j.html("Preencha um e-mail correto!"),void i.addClass("show");g.addClass("disable").prop("disabled",!0),f.addClass("sending").unbind("click"),a.ajax({method:"POST",url:"https://ws.empiricus.com.br/checkemailaddress",data:k,dataType:"json",success:function(d,h){return d.valid||a.inArray(d.message,b)!=-1?(g.removeClass("disable").prop("disabled",!1),f.removeClass("sending").click(function(b){b.preventDefault(),c(a(this))}),void(ajaxForm?a(document).trigger({type:"BriteformSend",email:g.val()}):e.submit())):(j.html("E-mail aparentemente incorreto! Digite-o novamente."),i.addClass("show"),b.push(d.message),g.removeClass("disable").prop("disabled",!1).val(""),void f.removeClass("sending").click(function(b){b.preventDefault(),c(a(this))}))},timeout:6e5})}};a(".briteform .btn-submit").click(function(b){b.preventDefault(),ajaxForm=!!a(this).parent("form.briteform").data("ajax"),c(a(this))}),a(".briteform .input-email").keypress(function(b){13==b.which&&(b.preventDefault(),ajaxForm=!!a(this).parent("form.briteform").data("ajax"),c(a(this)))})});
