function mobileFiltersToggle(mobileFilters_ID, addmobileFiltersWindow) {
    const mobileFiltersWindow = document.querySelector('#' + mobileFilters_ID);
    mobileFiltersWindow.classList.toggle(addmobileFiltersWindow);
    document.body.classList.toggle('no-scroll');
    
}

function ClosemobileFilters(mobileFilters_ID, addmobileFiltersWindow) {
    const mobileFiltersWindow = document.querySelector('#' + mobileFilters_ID);
    mobileFiltersWindow.classList.toggle(addmobileFiltersWindow);
    document.body.classList.toggle('no-scroll');

    
}
