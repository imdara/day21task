var count=document.querySelector("#count");
var time=10;

count.innerHTML=time--;
setTimeout(() => {
  count.innerHTML=time--;
  setTimeout(() => {
    count.innerHTML=time--;
    setTimeout(() => {
      count.innerHTML=time--;
      setTimeout(() => {
        count.innerHTML=time--;
        setTimeout(() => {
          count.innerHTML=time--;
          setTimeout(() => {
            count.innerHTML=time--;
            setTimeout(() => {
              count.innerHTML=time--;
              setTimeout(() => {
                count.innerHTML=time--;
                setTimeout(() => {
                  count.innerHTML=time--;
                  setTimeout(() => {
                    count.innerHTML="Happy Republic Day";
                  },1000);
                },1000);
              },1000);
            },1000);
          },1000);
        },1000);
      },1000);
    },1000);
  },1000);
},1000);