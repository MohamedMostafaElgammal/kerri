let typed = new Typed('#element', {
    strings: ['Kerri Due.', 'devoloper.','designer.'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });

  AOS.init();

  let feceBtn =document.querySelector(".facebook");
  let linkedinBtn =document.querySelector(".linkedin");
  let twitterBtn =document.querySelector(".twitter");
  let btnForm =document.querySelector(".btnForm");

  twitterBtn.addEventListener("click",function(){
    let tweetUrl = `https://x.com/?lang=ar`;
    window.open(tweetUrl, "_blank");
  })
  feceBtn.addEventListener("click",function(){
    let facebookUrl =`https://www.facebook.com/?locale=ar_AR`
    window.open(facebookUrl)

})
linkedinBtn.addEventListener("click",function(){
  let linkedinUrl =`https://www.linkedin.com/login/ar`
  window.open(linkedinUrl)

})
btnForm.addEventListener("click",function(){
 alert("okk")
})



let nums = document .querySelectorAll(".nums .num");
let section = document.querySelector (".number")
let started = false;

window.onscroll = function () {
    if(window.scrollY >= section.offsetTop - 600){
        if (!started){
            nums.forEach((num)=> startCount(num));

        }
        started = true;
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(()=> {
        el.textContent++;
        if (el.textContent == goal){
            clearInterval(count);
        }
    }, 1 )
}