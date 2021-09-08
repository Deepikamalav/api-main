
const request  = new XMLHttpRequest();
request.open("GET", "https://opentdb.com/api.php?amount=11");
request.send();
request.onload =()=>{
    if(request.status ===200){
        console.log(JSON.parse(request.response));

    }else{
        console.log('error $(request.status)')
    }

}
 let mySelect = document.querryselctorall('#category1');
 let showData = document.querySelectorall('#showData');
 let category = document.querrySelector('category1');
category.array.forEach(element => {
  let option = document.createElement('option');
  option.value = element;
  option.innerHTML = element;
  mySelect.appendchild(option)
});

mySelect.addEventListener('change',(e1) =>
let value = e1.target.value;
showData.innerHTML = value
})