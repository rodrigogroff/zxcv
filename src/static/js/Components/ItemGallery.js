
import Catalogo from "@app/Database/Catalogo";

export default class {

    static getHtml() {

        var _par = Object.fromEntries(new URLSearchParams(location.search))
        var obj = Catalogo.getAll('', _par.id );

        var carousel = '<ol class="carousel-indicators">';

        for (var a = 0; a < obj.gallery.length; a++) {
            if (a == 0)
                carousel += `<li data-target="#bootstrap-carousel" data-slide-to="${a}" class="active"></li>`
            else
                carousel += `<li data-target="#bootstrap-carousel" data-slide-to="${a}" class=""></li>`
        }

        carousel += `</ol><div class="carousel-inner">`

        for (var a = 0; a < obj.gallery.length; a++) {
            var b = 8 - a;
            var c = obj.gallery[a]
            if (a == 0)
                carousel += `<div class="active item " data-slide-no="${a}"><img alt="${b}" src="${c.image}" /></div>`
            else
                carousel += `<div class="item " data-slide-no="${a}"><img alt="${b}" src="${c.image}" /></div>`
        }

        carousel += `</div><a class="carousel-control left" href="#bootstrap-carousel" data-slide="prev"></a><a
        class="carousel-control right" href="#bootstrap-carousel" data-slide="next"></a>`

        return `<div class="container-fluid portfolio">
      <div class="container">
          <div class="col-md-8 col-lg-8">
              <div class="title-wrapper">                  
                  <h3 class="plove wcontainer widget-title">${obj.text}<a href="#"></h3>                  
              </div>
              <div id="myCarousel">
                  <div id="bootstrap-carousel" class="carousel slide ">${carousel}</div>
                  <script type="text/javascript">
                      // <![CDATA[
                      jQuery(document).ready(function () {
                          jQuery('#bootstrap-carousel').carousel({
                              interval: 5000,
                              pause: "hover"
                          });
                      });
                      // ]]>
                  </script>
              </div>              
          </div>
          <div class="col-md-4 col-lg-4">
              <div class="wcontainer pinfo">
                <span style='text-size:small'>Modelo criado por:</span><br>
                <h4 style='color:black'>${obj.patreon}</h4>
                <span style='text-size:small'>Data em nosso cat??logo:</span><br>
                <h4 style='color:black'>${obj.date}</h4>                
              </div>
              <div class="wcontainer psummary" style='height:450px'>
                <h4 style='color:black'><strong>Ficha t??cnica</strong></h4>
                <p>${obj.catalogText}</p>
              </div>
              <br>              
                <a target="_blank" href="${obj.linkBuy}" class="button-medium">Comprar no mercado livre</a>
          </div>
      </div>
      <br><br>
  </div>   
              `
    }
}