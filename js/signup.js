// There are 2 approaches to validate a form
// 1. Use particular event listeners on blur for particular inputs
// In this case bahaviour and validation parameters will be fully described in JS
// 2. Use event listener on form with capture ability on event invalid
// In this case behavior will be in JS, but validation parameters in HTML


// Full JS approach
const initPage = () => {

  const getNotEmptyValidityMsg = (value) => {
    const invalidMsg = 'This field can not be empty!';
    return (!/^\s*$/.test(value) ? 'valid' : invalidMsg);
  }

  const getDigitsValidityMsg = (value) => {
    const invalidMsg = 'Only digits are allowed!';
    return (/^\d+$/.test(value) ? 'valid' : invalidMsg);
  }

  const getLettersValidityMsg = (value) => {
    const invalidMsg = 'Only letters are allowed!';
    return (/^[a-zA-Z]+$/.test(value) ? 'valid' : invalidMsg);
  }

  const getEmailValidityMsg = (value) => {
    const invalidMsg = 'Email should match the pattern "name@domain.com"!';
    return (/^[\w_-]+@[\w]+\.[\w]+$/.test(value) ? 'valid' : invalidMsg);
  }

  const renderValidityMsg = (inputElem, getValidityFunctionList) => {
    // Remove previous invalid messages
    while (inputElem.nextElementSibling) {
      inputElem.parentElement.removeChild(inputElem.nextElementSibling);
    }

    // Render present invalid messages
    let isValid = true;
    getValidityFunctionList.map(function(getValidityMsg) {
      if (getValidityMsg(inputElem.value) !== 'valid') {
        isValid = false;
        inputElem.parentElement.insertAdjacentHTML(
          'beforeend',
          `<p>${getValidityMsg(inputElem.value)}</p>`);
        inputElem.focus();
        inputElem.select();
      }
    })
    inputElem.style.border = '2px solid ' + (isValid ? 'green' : 'red');
  };

  const retrieveGetParamsFromUrl = () => {
    const url = window.location.href;
    
    let getParams = {}
    window.location.href
    .slice(window.location.href.indexOf('?') + 1)
    .split('&').map(function(str) {
      const prop = str.slice(0, str.indexOf('='));
      const value = str.slice(str.indexOf('=') + 1);
      getParams[prop] = value;
    });

    return getParams;
  }

  const setClassLevel = () => {
    const level = retrieveGetParamsFromUrl().level;
    if (level && level !== 'default') {
      document.querySelector(`#level option[value="${level}"]`).selected = true;
    }
  }

  // Main Logic

  document.querySelector('#firstname').addEventListener('blur', function(event) {
    renderValidityMsg(event.target, [getNotEmptyValidityMsg, getLettersValidityMsg]);
  });
  document.querySelector('#lastname').addEventListener('blur', function(event) {
    renderValidityMsg(event.target, [getNotEmptyValidityMsg, getLettersValidityMsg]);
  });
  document.querySelector('#email').addEventListener('blur', function(event) {
    renderValidityMsg(event.target, [getNotEmptyValidityMsg, getEmailValidityMsg]);
  });

  document.querySelector('#enroll').disabled = false;

  setClassLevel();
}

window.addEventListener('load', initPage);


// HTML+JS Approach
// ...