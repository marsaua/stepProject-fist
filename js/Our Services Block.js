

// Our Services Block 

function tabs() {
    let tab = document.querySelectorAll('.services_tabs_item')
    tab.forEach((item) => {
        activeTab = item
   
        activeTab.addEventListener('click', (event) => {
            tab.forEach((item) => item.classList.remove('active'))
            event.target.classList.add('active')
            activeTab = event.target
            let servicesInfoId = activeTab.getAttribute('data-services')
            let servicesInfo = document.querySelector(servicesInfoId)
            let allServicesInfo = document.querySelectorAll('.services_info')
            allServicesInfo.forEach((item) => item.classList.remove('active_wrapper'))
            servicesInfo.classList.add('active_wrapper')
            
        })
 })
}
tabs()
