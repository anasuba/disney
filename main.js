var motivos = [
    "Tem um castelo lindo",
    "Mickey Mouse",
    "Brinquedos radicais",
    "Conhecer suas princesas favoritas",
    "Comidas deliciosas"
  ];
  
  var imagens = [ "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_640,q_75,w_640,x_5100,y_4862/v1/clients/orlandofl/8731_castle_landing_page_image_nu_2a8f8e6a-a1f9-45fd-8eca-596c92d04a7c.jpg",
    "https://www.visiteosusa.com.br/sites/default/files/styles/hero_l/public/images/hero_media_image/2021-09/95e7d963-79dc-46f5-9388-4a128a086b2a.jpeg?h=58c8a5e7&itok=c4aYEBPF",
    "https://www.vaipradisney.com/blog/wp-content/uploads/2015/11/sea-world-roteiro-orlando-brasil-vai-pra-disney-otimizada-05.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOV3fOU9cA41mC--6LgtAhi8xgvSliED8jA&usqp=CAU",
    "https://i0.wp.com/thehappening.com/wp-content/uploads/2017/01/portada-comida-disney.jpg?fit=1024%2C694&ssl=1"
  
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }
  
  