const link = document.querySelector(".link");
const url = "https://shorts.glitch.me/new/";
// console.log("arrive");

function short() {
    // console.log('reach 2');
    {
     const site = link.value;
     const requestURL = `${url}${site}`;
     fetch(requestURL)
     .then((res) => {
      if (res.status !== 200) {
        console.log(`There was a problem. Code: ${res.status}`);
        return;
      }
      return res.json();
    })
     .then((data) => {
      if(data.error){ 
        link.value="";
        link.placeholder = data.error;
      } else {
        link.value = data.newUrl;

        link.select();
      }
    })
     .catch((err)=> console.log('Fetch Error', err));
   }
 }

$('.submit').on("click", short);
$('.clear').on("click", () => { link.value = "";})
$('.copy').on("click", () => document.execCommand("Copy") );