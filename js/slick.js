var document;
var $;
var $num;
var $even;
var $odd;
var console;
var $slide;
var g;
var g1;
var window;
var ResizeSensor;
var jQuery;
function menu_on() {
    $("#navbar-collapse collapse").show(300);
}
function menu_leave() {
    $("#navbar-collapse collapse").hide(300);
}
function Mobile_menu() {
    var cmm = $("#click-menu-mobile");
    if (cmm.css("display") === "none") {
        cmm.show(300);
    } else {
        cmm.hide(300);
    }
}
function About_mobile() {
    var abmm = $("#About-menu-mobile");
    if (abmm.css("display") === "none") {
        abmm.show(300);
    } else {
        abmm.hide(300);
    }
}
$(document).ready(function () {  
    var c;
    var a = 0;
    $("#Reviews").css("padding-bottom", $("#Com_1").height());  
    $(window).resize(function () {
        new ResizeSensor(jQuery("#Com_1"), function () {
            $("#Reviews").css("padding-bottom", $("#Com_1").height());
        });
    });
    $("#faq_id").click(function () {
        a = a + 1;
        if (a % 2 !== 0) {
            $("#faq_id").css("color", "rgb(241, 77,52)");
            $("#one").css("border", "3px solid rgb(241, 77,52)");
        } else {
            $("#faq_id").css("color", "black");
            $("#one").css("border", "0px");
        }
    });

    $("#slider_one").slick({   
        accessibility: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 6,
        variableWidth: true
    });
    $("#slider_two").slick({   
        accessibility: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 6,
        variableWidth: true
    });
    $("#slider_three").slick({  
        arrows: true,
        dots: false,
        nextArrow: $("#next"),
        prevArrow: $("#prev"),
        slidesToScroll: 1,
        slidesToShow: 1
    });

    const app = new Vue({   
        el: '#app',   
        data: {  
          errors: [],
          name: null,
          number: null,
          email: null,
          message: null,
          checkbox: null
        },
        mounted() {     
              this.name = localStorage.name;
            }
            if(localStorage.number){
                this.number=localStorage.number;
            }
            if(localStorage.email){
                this.email=localStorage.email;
            }
            if(localStorage.message){
                this.message=localStorage.message;
            }
          },
        watch: {       
            name(newName) {
              localStorage.name = newName;
            },
            number(newNumber){
                localStorage.number = newNumber;
            },
            email(newEmail){
                localStorage.email = newEmail;
            },
            message(newMessage){
                localStorage.message = newMessage;
            }
        },
        methods: {   
          checkForm: function (e) {  
            $("#mess_good").css("display", "none");
            $("#mess_error").css("display", "none");
            this.errors = [];
      
            if (!this.name) {  
              this.errors.push('Требуется указать имя.');
            }
            if (!this.number) {
              this.errors.push('Требуется указать номер.');
            }
            if (!this.email) {
                this.errors.push('Требуется указать email.');
            }
            if (!this.message) {
                this.errors.push('Требуется написать комменатарий.');
            }
            if (!this.checkbox) {
                this.errors.push('Требуется согласие на обработку песрональных данных.');
            }
            if(this.errors.length>0){   
                if(this.errors.length === 1){
                    $("#form-overlay").css("height", "84vh");
                    $("#form-overlay").css("top", "8vh");
                }
                else if(this.errors.length === 2){
                    $("#form-overlay").css("height", "88vh");
                    $("#form-overlay").css("top", "6vh");
                }
                else if(this.errors.length === 3){
                    $("#form-overlay").css("height", "90vh");
                    $("#form-overlay").css("top", "5vh");
                }
                else if(this.errors.length === 4){
                    $("#form-overlay").css("height", "92vh");
                    $("#form-overlay").css("top", "4vh");
                }
                else if(this.errors.length === 5){
                    $("#form-overlay").css("height", "94vh");
                    $("#form-overlay").css("top", "3vh");
                }
            }
            if(this.errors.length === 0){
                $("#form-overlay").css("height", "70vh");
                $("#form-overlay").css("top", "15vh");
            }
            if (this.name && this.number && this.email  && this.message && this.checkbox) { 
                /*Блокировка кнопки*/ 
                changeBtn();
                fetch('https://api.slapform.com/zweJt9X5Rc', {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                body: JSON.stringify({name: this.name, number: this.number, email: this.email, message: this.message})
                })
                .then(function(response){  
                    console.log(response);
                    $("#mess_good").css("display", "block");
                    $("#form-overlay").css("height", "75vh");
                    $("#form-overlay").css("top", "12vh");
                    /*Разблокировка кнопки*/
                    changeBtn();
                })
                .catch(function(error){    
                    console.log(error);
                    $("#mess_error").css("display", "block");
                    $("#form-overlay").css("height", "75vh");
                    $("#form-overlay").css("top", "12vh");
                    /*Разблокировка кнопки*/
                    changeBtn();
                })
                this.name=""; 
                this.number="";
                this.email="";
                this.message="";
                this.checkbox=false;
            } 
            e.preventDefault();
          }
        }
      });


    const Form = new Vue({  
        el: '#Form_two',
        data: {   
          name: null,
          number: null,
          email: null,
          message: null,
          checkbox: null
        },
        mounted() {   
            if (localStorage.name) {
              this.name = localStorage.name;
            }
            if(localStorage.number){
                this.number=localStorage.number;
            }
            if(localStorage.email){
                this.email=localStorage.email;
            }
            if(localStorage.message){
                this.message=localStorage.message;
            }
          },
        watch: { 
            name(newName) {
              localStorage.name = newName;
            },
            number(newNumber){
                localStorage.number = newNumber;
            },
            email(newEmail){
                localStorage.email = newEmail;
            },
            message(newMessage){
                localStorage.message = newMessage;
            }
        },
        methods: {  
          checkForm: function (e) { 
            $("#no_data").css("display", "none");
            $("#mess_good_1").css("display", "none");
            $("#mess_error_1").css("display", "none");
            if(!this.name || !this.number || !this.email || !this.message || !this.checkbox){  
                $("#no_data").css("display", "block");
            }
            if (this.name && this.number && this.email  && this.message && this.checkbox) { 
                changeBtn_1();
                $("#no_data").css("display", "none");
                fetch('https://api.slapform.com/zweJt9X5Rc', {  
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                body: JSON.stringify({name: this.name, number: this.number, email: this.email, message: this.message})
                })
                .then(function(response){  
                    changeBtn_1();
                    console.log(response);
                    $("#mess_good_1").css("display", "block");
                })
                .catch(function(error){    
                    changeBtn_1();
                    console.log(error);
                    $("#mess_error_1").css("display", "block");
                })
                this.name="";   
                this.number="";
                this.email="";
                this.message="";
                this.checkbox=false;
            } 
            e.preventDefault();
          }
        }
      });

});

document.addEventListener("DOMContentLoaded", function () {
    var b1;
    var mm;
    var adm;
    var abm;
    var b = document.getElementById("Admin");
    b.addEventListener("mouseover", Admin_menu_on);
    b.addEventListener("mouseleave", Admin_menu_leave);
    b1 = document.getElementById("About");
    b1.addEventListener("mouseover", About_menu_on);
    b1.addEventListener("mouseleave", About_menu_leave);
    mm = document.getElementById("click-mob-menu");
    mm.addEventListener("click", Mobile_menu);
    adm = document.getElementById("Admin-mobile");
    adm.addEventListener("click", Admin_mobile);
    abm = document.getElementById("About-mobile");
    abm.addEventListener("click", About_mobile);

    $("#overlay_btn").click(function () {
        openForm();
        
        animate({
            duration: 700,
            timing: function circ(timeFraction) {
              return 1 - Math.sin(Math.acos(timeFraction));
            },
            draw: function(progress) {
              $(".FormOverlay").css("left", 110-progress*110+"px");
              $(".FormOverlay").css("bottom", 45-progress*45+"px");
              $(".FormOverlay").css("width",  progress * 100 + "%");
              $(".FormOverlay").css("height",  progress * 100 + "%");
              $("#form-overlay").css("opacity", progress);
              $("#close_overlay_btn").css("opacity", progress);
            }
          });
    });

    $(".FormOverlay").click(function (event) {
        
        if((String)(event.target) === "[object HTMLSpanElement]") 
        {
            $("#mess_good").css("display", "none");
            $("#mess_error").css("display", "none");
            openHome();
            animate({
                duration: 400,
                timing: function circ(timeFraction) {
                return 1 - Math.sin(Math.acos(timeFraction));
                },
                draw: function(progress) {
                $(".FormOverlay").css("left", progress*110+"px");
                $(".FormOverlay").css("bottom", progress*45+"px");
                $(".FormOverlay").css("width",  (1- progress) * 100 + "%");
                $(".FormOverlay").css("height",  (1 - progress) * 100 + "%");
                $("#form-overlay").css("opacity", 1-progress);
                $("#close_overlay_btn").css("opacity", 1-progress);
                }
            });
        }
    });
});

function openForm() {   
    history.pushState({page: 2}, "Form", "?form");
    return false;
}

function openHome() {   
    history.replaceState({page: 1}, "Home", "?home");
    return false;
}

addEventListener("popstate", function () {
    openHome();
        $(".FormOverlay").hide(300);
        $("#form-overlay").hide(300);
}, false);

function changeBtn() { 
    if ($("#Lete").css("opacity") != 0.2) {
        $("#Lete").css("pointer-events", "none");
        $("#Lete").css("opacity", "0.2"); 
    } else { 
        $("#Lete").css("pointer-events", "unset");
        $("#Lete").css("opacity", "1"); 
    }
}

function changeBtn_1() {
    if ($("#Lete_1").css("opacity") != 0.2) {
        $("#Lete_1").css("pointer-events", "none");
        $("#Lete_1").css("opacity", "0.2"); 
    } else { 
        $("#Lete_1").css("pointer-events", "unset");
        $("#Lete_1").css("opacity", "1"); 
    }
}

function animate({timing, draw, duration}) {
    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
     
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      
      let progress = timing(timeFraction);
  
      draw(progress); 
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
}
