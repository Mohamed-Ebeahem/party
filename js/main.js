$("h6").click(function () {
    $(".side-list").animate({left:"0"},1000)
    $("h6").animate({left : "230"},1000)
})
$(".closemarke").click(function(){
    $(".side-list").animate({left:"-15%"},1000)
    $("h6").animate({left : "0"},1000)
})
$("#Singerone").click(function () {
    $("#Singer-one").slideToggle(500)
    $("#Singer-two").slideUp(500)
    $("#Singer-three").slideUp(500)
    $("#Singer-four").slideUp(500)
})
$("#Singertwo").click(function () {
    $("#Singer-two").slideToggle(500)
    $("#Singer-one").slideUp(500)
    $("#Singer-three").slideUp(500)
    $("#Singer-four").slideUp(500)
})
$("#Singerthree").click(function () {
    $("#Singer-three").slideToggle(500)
    $("#Singer-two").slideUp(500)
    $("#Singer-one").slideUp(500)
    $("#Singer-four").slideUp(500)
})
$("#Singerfour").click(function () {
    $("#Singer-four").slideToggle(500)
    $("#Singer-two").slideUp(500)
    $("#Singer-three").slideUp(500)
    $("#Singer-one").slideUp(500)
})
$("ul li a").click(function () {
    let hrefval = $(this).attr("href")
    let sectiontop = $(hrefval).offset().top
    $("html,body").animate({scrollTop : sectiontop},{duration : 2000,queue : false})
})
let countDwon = new Date ("Aug 30,2023 23:59:59")
console.log(countDwon);
// "Aug 18,2021 23:59:59"
setInterval(() => {
    let newdate = new Date()
    let def = countDwon - newdate
    let day = Math.floor(def / (100 * 60 *60 *24))
    let hours =Math.floor(def % (1000 * 60 *60 *24)/(1000 * 60 * 60))
    let minuts =Math.floor( def % (1000 * 60 *60 )/(1000 * 60 ))
    let seconds = Math.floor( def % (1000 * 60  )/1000) 
    $("#days").html(day +" D")
    $("#hours").html(hours + " h")
    $("#minuts").html(minuts +" m")
    $("#seconds").html(seconds +" s")
},0 );