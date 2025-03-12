// const themeToggler = document.querySelector(".theme-toggler");

// themeToggler.addEventListener("click",()=>{
//      document.body.classList.toggle("dark-theme-variables");
//      themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
//      themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
// });

const light = document.querySelector(".light");
const dark = document.querySelector(".dark");

light.addEventListener("click",()=>{
    document.querySelector(".light").classList.add("active");
    document.querySelector(".dark").classList.remove("active");
    document.querySelector("body").classList.remove("dark-theme-variables");
});
dark.addEventListener("click",()=>{
    document.querySelector(".dark").classList.add("active");
    document.querySelector(".light").classList.remove("active");
    document.querySelector("body").classList.add("dark-theme-variables");
    document.querySelector(".light").style.color="white";
});