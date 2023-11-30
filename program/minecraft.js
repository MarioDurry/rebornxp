$(window).on('xpboot', () => {
  xp.applications.add('minecraft', () => {
    var el = $.parseHTML(`<window width="300" height="410" title="Minecraft">
      <style>
iframe[seamless]{
  background-color: transparent;
  border: 0px none transparent;
  padding: 0px;
  overflow: hidden;
}
.frame-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
}
  </style>
  
  <div class="frame-container">
    
<iframe height="100%" seamless="seamless" width="100%" src="https://mariodurry.github.io/Meaglercraft/"></iframe>
  </div> 
    </window>`);
    document.body.appendChild(el[0]);
    $(el).updateWindow();
  });
    xp.startmenu.add('minecraft', 'Minecraft', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzfdpTmDu4S8oKUMNX8CD8rR4X6gB9Sni7VvugGbQyQ&s');
});
