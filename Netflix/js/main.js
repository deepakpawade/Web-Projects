const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//select tab content
function selectItem(e){

    removeBorder();
    removeShow();

    //add border to current tab
    this.classList.add('tab-border');

// dont see this file.  
// see index.html only   
    //grab content item from dom
    // console.log(this.id);
    const tabContentItem = document.querySelector(`#${this.id}-content`)

    //add show class
    tabContentItem.classList.add('show');
}


function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//listen for tab clicks
tabItems.forEach(item=>item.addEventListener('click',selectItem));