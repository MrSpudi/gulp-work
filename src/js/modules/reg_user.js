function flyDescription(input) {
  input.value.trim();
  console.log(input.value.length)
  if (input.value != null ||
      input.value != '' ||
      input.value != undefined ||
      input.value.length != 0 
      ) {
      let flyDesc_parent = input.parentNode;
      let flyDesc_span = flyDesc_parent.querySelector('span');
      flyDesc_span.classList.add('flyDescription');
  }
}

function flyDescriptionBlur(input) {
  input.value.trim();
  console.log('2'+input.value)
  let flyDesc_parent = input.parentNode; 
  let flyDesc_span = flyDesc_parent.querySelector('span');
  if (input.value == '' ||
      input.value == undefined
  ) {
      flyDesc_span.classList.remove('flyDescription');
  } else if (input.value != '') {
      if ( 
          input.value.indexOf("/") != "-1" || 
          input.value.indexOf("?") != "-1"
      ) {
          flyDesc_parent.classList.add('reg_user_container_step_redLabel');
          document.querySelector('.reg_user_next').classList.add('reg_user_next_lock')
          return false
      } else if(input.value.indexOf("@") != "-1") {
          flyDesc_parent.classList.remove('reg_user_container_step_redLabel');
          document.querySelector('.reg_user_next').classList.remove('reg_user_next_lock')
      }
  }
}

function regValidation(input) {
  if ( 
      input.value.indexOf("/") == "-1" || 
      input.value.indexOf("?") == "-1"
      )
  {
      document.querySelector('.reg_user_next').classList.add('reg_user_next_lock')
      return false
  } else if(input.value.indexOf("@") != "-1") {
      document.querySelector('.reg_user_next').classList.remove('reg_user_next_lock')
  }
}

function calcOtherSpec(a) {
  let checkCounter = 0;
  let parentContainer = a.parentNode.parentNode;
  console.log(parentContainer)
  let rowList = parentContainer.querySelectorAll('.chbs-row');
  rowList.forEach(element => {
      //console.log(element);
      if (element.querySelector('input').checked) {
          checkCounter++;
      }

      document.querySelector('#JS_reg_user_list_other').value = `Выбрано (${checkCounter})`
  });
}

function first_calcOtherSpec() {
  console.log('first_calcOtherSpec')
  let checkCounter = 0;
  let list_otherSpec = document.querySelector('.chbs-area');
  let items_otherSpec = list_otherSpec.querySelectorAll('.chbs-row')
  items_otherSpec.forEach(element => {
      //console.log(element);
      if (element.querySelector('input').checked) {
          checkCounter++;
      }

      document.querySelector('#JS_reg_user_list_other').value = `Выбрано (${checkCounter})`
  });
}

function openDropDownUser() {
  document.getElementById("dropdown-user").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn-user')) {

  var dropdowns = document.getElementsByClassName("dropdown-user-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}