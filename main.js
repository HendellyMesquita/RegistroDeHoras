const {app,BrowserWindow,Menu}=require('electron');
const path=require('path');
app.setName('Registro de Horas');
if(!app.requestSingleInstanceLock()){app.quit();}
let win;
function create(){
  Menu.setApplicationMenu(null);
  win=new BrowserWindow({width:1000,height:800,title:'Registro de Horas',autoHideMenuBar:true,webPreferences:{contextIsolation:true,nodeIntegration:false}});
  win.loadFile(path.join(__dirname,'index.html'));
}
app.on('second-instance',()=>{if(win){if(win.isMinimized())win.restore();win.focus()}});
app.whenReady().then(create);
app.on('window-all-closed',()=>app.quit());
