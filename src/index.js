window.addEventListener("load", ()=>{
    fixContents();
});
window.addEventListener("resize",()=>{
    fixContents();
});



$(".hbgrMenu").click(function () {
    $(this).toggleClass('active');
    $(".mobileMenu").toggleClass("open");
    setTimeout(() => {;
        $(".mobileMenu").css("height","0px")
        $(".mobileMenu.open").css("height",`calc(100vh - ${$("header").height()}px)`);
    }, 1);
});





function fixContents(){
    if(window.innerWidth<window.innerHeight){
        $(".hbgrMenu").css("display","block");
    }else{
        $(".hbgrMenu").css("display","none");
    }
    // alert(`${Math.floor(Number($("header").height()))}px`)
    $("main").css("margin-top",`${$("header").height()}px`);
    $("#scrollMargin").text(`:target{scroll-margin: calc(1rem + ${$("header").height()}px);}`)
    $(".mobileMenu").css("top",`${$("header").height()}px`);
}

function setLabels(arr){
    for(let idx of arr){
        $(".labels").append(`<a href="https://blog.kelpoftruth.com/tag/${idx}">#${idx}</a> `);
    }
}
