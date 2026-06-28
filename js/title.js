document.addEventListener("DOMContentLoaded",function(){
    const introText = document.querySelector(".introtext");
const content = "안녕하세요. \n저는 오희경입니다 :)"
let index = 0;
let putWord = "";

const typingInterval = setInterval(() => {
  if(index < content.length) {
    putWord += content[index++];
    introText.innerText = putWord
  }
},100);

setTimeout(() => {
    clearInterval(typingInterval);
},320 * content.length + 30)

console.log(introText);
});