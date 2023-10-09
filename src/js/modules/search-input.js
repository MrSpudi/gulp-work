function handleSearchInputChange() {
    const Searchinput = document.querySelector('.search-sleeper-text');
    const clearButton = document.querySelector('.clear-button');

  
    // clearButton.style.opacity = Searchinput.value ? '1' : '0';
    // clearButton.style.zIndex = Searchinput.value ? '5' : '0';

    Searchinput.addEventListener('keyup', function(event) {
        let length = this.value.length
        if (length >= 1) {
            clearButton.style.zIndex = '5';
            clearButton.style.opacity = '1';
        } else{
            clearButton.style.zIndex = '0';
            clearButton.style.opacity = '0';
        }
      });
  }
  
  function handleClearButtonClick() {
    const Searchinput = document.querySelector('.search-sleeper-text');
    const clearButton = document.querySelector('.clear-button');
  
    Searchinput.value = '';
    clearButton.style.opacity = '0';
    clearButton.style.zIndex = '0';
  }