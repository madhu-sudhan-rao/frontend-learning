function toggleSwitch(button){
    let currentToggle = button;
    let toggleStatus = currentToggle.innerText; 
    console.log(toggleStatus)
    if(toggleStatus == 'toggle_off'){
        currentToggle.innerHTML = '<span class="material-symbols-outlined" id="toggle">toggle_on</span>';
        currentToggle.style = "color: #52C41A ;"
        currentToggle.style.fontVariationSettings = "'FILL' 1";
    } else if(toggleStatus == "toggle_on") {
        currentToggle.innerHTML = '<span class="material-symbols-outlined" id="toggle">toggle_off</span>';
        currentToggle.style = "color: #fff ; font-variation-settings: 'FILL' 1;"
    }
}

function toggleDropdown(){
    let dropdownToggle = document.getElementById('dropdown-btn')
    let currentStatus = dropdownToggle.innerText;
    let dropdownMenu = document.getElementById('dropdown-container');
    if(currentStatus == 'expand_more'){
        dropdownToggle.innerText = "expand_less";
        dropdownMenu.style = "display:block;";
    } else if(currentStatus = 'expand_less'){
        dropdownToggle.innerText = "expand_more";
        dropdownMenu.style = "display:none;";
    }
}

function selectBand(index, image){
    let selectedName = document.getElementsByClassName('band-name');
    let bandName = selectedName[index].innerText;
    let selector = document.getElementById('selectedBand')
    selector.innerHTML = bandName;
    let imageElement = document.getElementById('band-image');
    imageElement.src = image;
    toggleDropdown()
}