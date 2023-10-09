function toggleLoginFrame(event) {
    const loginframeMenus = document.querySelectorAll('.reg_login_frame-menu');
    const loginFrameOpens = document.querySelectorAll('.reg_login_frame-user');
  
    loginframeMenus.forEach(function(loginframeMenu, index) {
      const loginFrameOpen = loginFrameOpens[index];
      
      if (event && !loginframeMenu.contains(event.target) && !loginFrameOpen.contains(event.target)) {
        loginframeMenu.classList.remove('active');
        loginFrameOpen.classList.remove('active');
      } else {
        loginframeMenu.classList.toggle('active');
        loginFrameOpen.classList.toggle('active');
      }
    });
  }

