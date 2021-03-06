
import Menu from "@app/Components/Menu";
import Lancamentos from "@app/Components/Lancamentos";
import Noticias from "@app/Components/Noticias";
import Footer from "@app/Components/Footer";

export default class {
  static getHtml() {
    document.getElementById('myAppMenu').innerHTML = Menu.getHtml() 
    document.getElementById('myAppLancamentos').innerHTML = Lancamentos.getHtml()     
    document.getElementById('myAppNoticias').innerHTML = Noticias.getHtml() 
    document.getElementById('myAppFooter').innerHTML = Footer.getHtml() 
    return '';
  }
}

//https://skywarriorthemes.com/gameaddict