/* =====================================
   PREMIUM 3D IMAGE GALLERY
   JAVASCRIPT
===================================== */



// ================================
// CATEGORY FILTERING
// ================================


const buttons = document.querySelectorAll(".category-buttons button");

const cards = document.querySelectorAll(".image-card");



buttons.forEach(button => {


    button.addEventListener("click",()=>{


        // Active button

        buttons.forEach(btn=>{

            btn.classList.remove("active");

        });


        button.classList.add("active");



        let category = button.getAttribute("data-category");



        cards.forEach(card=>{


            if(category==="all" ||
               card.classList.contains(category)){


                card.style.display="block";


                setTimeout(()=>{

                    card.style.opacity="1";

                    card.style.transform="scale(1)";

                },100);



            }

            else{


                card.style.opacity="0";

                card.style.transform="scale(.5)";


                setTimeout(()=>{

                    card.style.display="none";

                },300);


            }


        });



    });


});









// ================================
// IMAGE LIGHTBOX
// ================================


const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");



cards.forEach(card=>{


    card.addEventListener("click",()=>{


        let img =
        card.querySelector("img").src;


        lightboxImg.src = img;


        lightbox.style.display="flex";


    });


});





closeBtn.addEventListener("click",()=>{


    lightbox.style.display="none";


});





lightbox.addEventListener("click",(e)=>{


    if(e.target !== lightboxImg){

        lightbox.style.display="none";

    }


});









// ================================
// 3D MOUSE MOVEMENT EFFECT
// ================================


cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


let rect = card.getBoundingClientRect();



let x =
e.clientX - rect.left;



let y =
e.clientY - rect.top;



let centerX =
rect.width / 2;



let centerY =
rect.height / 2;



let rotateX =
-(y-centerY)/15;



let rotateY =
(x-centerX)/15;



card.style.transform =
`
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)
`;



});




card.addEventListener("mouseleave",()=>{


card.style.transform =
`
rotateX(0deg)
rotateY(0deg)
scale(1)
`;



});


});









// ================================
// SCROLL REVEAL ANIMATION
// ================================



const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}



});


},


{

threshold:0.2

}

);




cards.forEach(card=>{


card.style.opacity="0";

card.style.transform=
"translateY(80px)";


card.style.transition=
"all .8s ease";


observer.observe(card);



});









// ================================
// HERO IMAGE PARALLAX
// ================================


const hero =
document.querySelector(".hero");

const floatingImages =
document.querySelectorAll(".float-img");



hero.addEventListener("mousemove",(e)=>{


let x =
(e.clientX / window.innerWidth - .5) * 30;


let y =
(e.clientY / window.innerHeight - .5) * 30;



floatingImages.forEach((img,index)=>{


img.style.transform =
`
translate(${x*(index+1)}px,
${y*(index+1)}px)
rotateY(${x}deg)
`;



});


});





hero.addEventListener("mouseleave",()=>{


floatingImages.forEach(img=>{


img.style.transform="";


});


});









// ================================
// NAVBAR SCROLL EFFECT
// ================================


window.addEventListener("scroll",()=>{


const nav =
document.querySelector(".navbar");



if(window.scrollY>50){


nav.style.background =
"rgba(0,0,0,.75)";


}

else{


nav.style.background =
"rgba(255,255,255,.08)";


}



});








// ================================
// IMAGE LAZY LOADING
// ================================


const images =
document.querySelectorAll("img");



images.forEach(img=>{


img.loading="lazy";


});




console.log(
"✨ Premium 3D Image Gallery Loaded Successfully"
);
