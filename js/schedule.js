
const initPage = () => {

  let welcomePaneShowing = true;

  const showHint = (event) => {
    if (!welcomePaneShowing) {
      return;
    }

    let hintText = '';
    switch(event.target.title) {
      case 'beginners':
        hintText = 'Just getting started? Come join us!';
        break;
      case 'intermediate':
        hintText = 'Take your flexibility to the next level!';
        break;
      case 'advanced':
        hintText = 'Perfectly join your body and mind with these intensive workout.';
        break;
      default:
        hintText = 'Click a tab to display the course schedule for the class';
    }

    document.querySelector('#content > h3').innerText = hintText;
  }

  const hideHint = (event) => {
    let hintText = 'Click a tab to display the course schedule for the class';
    let contentPane = document.querySelector('#content > h3');
    if (welcomePaneShowing) {
      contentPane.innerText = hintText;      
    }
  }

  const showTab = (event) => {
    event.preventDefault();

    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].classList.contains('active')) {
        tabs[i].classList.remove('active');
        break;        
      }
    }
    event.target.classList.add('active');

    let contentPane = document.querySelector('#content');
    if (event.target.title === 'welcome') {
      welcomePaneShowing = true;
      contentPane.innerHTML = '<h3>Click a tab to display the course schedule for the class</h3>';
    } else {
      welcomePaneShowing = false;
      const url = `schedule-${event.target.title}.html`;
      const request = new XMLHttpRequest;
      request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status === 200) {
          document.querySelector('#content').innerHTML = request.response;
        }
      })
      request.open('GET', url, false);
      request.send(null);
    }
  }

  const navMouseOver = (event) => {
    event.target.classList.add('active');
  }

  const navMouseOut = (event) => {
    event.target.classList.remove('active');
  }

  var tabs = document.querySelectorAll('#tabs > a');
  tabs.forEach(tab => {
    tab.addEventListener('mouseover', showHint, false);
    tab.addEventListener('mouseout', hideHint, false);
    tab.addEventListener('click', showTab, false);    
  })

  let navs = document.querySelectorAll('#navigation > a');
  navs.forEach(nav => {
    nav.addEventListener('mouseover', showHint, false);
    nav.addEventListener('mouseout', hideHint, false);    
    nav.addEventListener('mouseover', navMouseOver, false);
    nav.addEventListener('mouseout', navMouseOut, false);    
  })
}

window.addEventListener('load', initPage);