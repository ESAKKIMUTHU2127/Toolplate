var img=document.getElementById("img")
var slider=["1","2","3"]
var dyn=["COOL FASHION","NEW DESIGN","TALK TO US"]
var dyn1=["Fashion is a term that is popular among youth, old men, women, and children alike. Clothing, food, fast food, dance (on Western tunes), weddings, ceremonies, etc.","You can support our Tooplate website by sharing it to your friends or colleagues on the web or social media.","Tooplate is a great website to download free HTML website templates for your business or personal use. "]
var text=document.getElementById("text")

var text1=document.getElementById("text1")
function change(i){
    img.innerHTML=`<img src="./slide${slider[i]}.jpeg"/>`
    console.log(dyn[i])
    text.innerText=`${dyn[i]}`
    text1.innerText=`${dyn1[i]}`
}



var youimage=document.getElementById("youimage")

var vdyn=["Good Design","Life at Studio","What can help you?"]
var vdyn1=["Ideas for your fashion"," "," "]
var vdyn2=["Little Fashion templates comes with sign in / sign up pages, product listing / product detail, about, FAQs, and contact page.  Since this HTML template is based on Boostrap 5 CSS library, you can feel free to add more components as you need."
,"Over three years in business, We’ve had the chance to work on a variety of projects, with companies Custom work is branding, web design, UI/UX design"
," Over three years in business, We’ve had the chance on projects"]
var vtext=document.getElementById("vtext")

var vtext1=document.getElementById("vtext1")
var vtext2=document.getElementById("vtext2")
var vtext3=document.getElementById("vtext3")

    function intro(){
      youimage.innerHTML=`<img src="./video1.jpeg"/>`
      console.log(dyn[0])
      
      vtext.innerText=`${vdyn[0]}`
      vtext1.innerText=`${vdyn1[0]}`
      vtext2.innerText=`${vdyn2[0]}`
      vtext3.innerHTML=``
  }
  function work(){
  
    youimage.innerHTML=`<iframe  src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
</iframe>`
    console.log(dyn[2])
    vtext.innerText=`${vdyn[1]}`
    vtext2.innerText=`${vdyn2[1]}`
    vtext3.innerHTML=``
    
}
  
  function cap(){
    youimage.innerHTML=`<img src="./video3.jpeg"/>`
    console.log(dyn[2])
    vtext.innerText=`${vdyn[2]}`
    vtext2.innerText=`${vdyn2[2]}`
    vtext3.innerHTML=`<img src="./video3bottom.jpeg"/>`
}

var i=0
change(i)
intro()
change1(0)
setInterval(
    function(){
        if(i==2){
            i=0
          }
          else{
            i++
          }
        change(i)
        //change1(i)  
    }
,5000)


