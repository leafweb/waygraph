let AppSettings = ()=> {
   var root = document.querySelector(':root')
   var appSettings = JSON.parse(localStorage.getItem('appSettings'));
   if(!appSettings) {
      var defaultSettings = {
         color: 'hsl(230,100,20)',
         fontSize: 14,
         radius: 16,
         darkmode: true,
      };
      appSettings = defaultSettings;
      localStorage.setItem('appSettings',JSON.stringify(appSettings));
   }
   root.style.setProperty('--fontSize',appSettings.fontSize+'px')
   root.style.setProperty('--radius',appSettings.radius+'px')
   return appSettings
}
let Freeze = ()=> {
   document.querySelectorAll('*').forEach(elm => {
      elm.style.setProperty('transition','0s');
      setTimeout(()=>{
         elm.style.removeProperty('transition');
         if (elm.getAttribute('style') == '') {
            elm.removeAttribute('style');
         }
      },50)
   })
}
let Darkmode = ()=> {
   Freeze();
   M.toggleMode();
   var appSettings = JSON.parse(localStorage.getItem('appSettings'));
   appSettings.darkmode = M.darkmode;
   localStorage.setItem('appSettings',JSON.stringify(appSettings));
}
let SetColor = (color)=> {
   M.addCustomColor({primary: color})
   var appSettings = JSON.parse(localStorage.getItem('appSettings'));
   appSettings.color = color;
   localStorage.setItem('appSettings', JSON.stringify(appSettings));
}
let SetFontSize = (fontSize)=> {
   var appSettings = JSON.parse(localStorage.getItem('appSettings'));
   document.querySelector(':root').style.setProperty('--fontSize',fontSize+'px');
   appSettings.fontSize = fontSize;
   localStorage.setItem('appSettings', JSON.stringify(appSettings));
}
let SetRadius = (radius)=> {
   var appSettings = JSON.parse(localStorage.getItem('appSettings'));
   document.querySelector(':root').style.setProperty('--radius',radius);
   appSettings.radius = radius;
   localStorage.setItem('appSettings', JSON.stringify(appSettings));
}

var M = Mushroom({
   color: AppSettings().color,
   darkmode: AppSettings().darkmode,
   hasPalette: true,
   reversePalette: false,
});