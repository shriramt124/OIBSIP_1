 let slider = document.querySelectorAll('.cycle');
 console.log(slider);
 slider.forEach((ele)=>{
    ele.addEventListener('click',function(e){
        for(let newele of slider){
           console.log(newele)
           newele.classList.remove('active');
        }
          this.classList.add('active');
          let ImageofEle = document.querySelector('.img-change');
          console.log(ImageofEle);
          let currimage =  ele.childNodes[1];
          console.log(currimage)
          ImageofEle.src = currimage.src;
          ele.style.transition = 'all 1s ease-out';
          let heading = document.querySelector('.heading')
             
           

    })
 })

 var t1 = gsap.timeline({});
 t1.from('.logo',1,{
    y:-200,
     opacity:0,
 });
 t1.from('.links',1,{
    y:-200,
    stagger:0.2,

 });
 t1.from('.burger',1,{
    y:-200,
    stagger:0.2,
 })
 t1.from('.cmt',1,{
    y:500,
    stagger:0.3,
    opacity:0,
 });
 
 
