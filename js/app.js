const tabItems = document.querySelectorAll(".tab-item");
// console.log(tabItems);
const tabItemContent = document.querySelectorAll(".tab-content-item");
// console.log(tabItemContent)
function selectTabItem(e){
   removeBorder(); 
   removeShow();
     this.classList.add('tab-border');
     const tabItemsContents = document.querySelector(`#${this.id}-content`)
//   console.log(tabItemsContent)
         tabItemsContents.classList.add('show');
}

// By Removing Border
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

// removing show class
function removeShow(){
    tabItemContent.forEach(item => item.classList.remove('show'))
}


tabItems.forEach((item)=>{
    item.addEventListener("click", selectTabItem) 
})
