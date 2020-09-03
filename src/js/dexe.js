import './jquery.js';

(function () {
  
  $.ajax({
    type: "get",
    url: "../../interface/getproduct.php",
    async: false,
    dataType: "json",
    success: function (res) {
      console.log(res);
      let temp = '';
      let tee = '';
      let trr = '';
      let trr1 = '';
      
      res.forEach((elm, i) => {
        let picture = JSON.parse(elm.picture);
        console.log(elm.id);
       if(elm.id ==1){
        tee +=`<li class="phone1">
        <a href="./product.html?id=${elm.id}" class="boxs-img ">
          <!-- <img src="..${picture[0].src}" alt="" class="gs-img at" > -->
          <span class="x-info ">
            <span class="x-name at">${elm.title}</span>
            <span class="x-desc at2">${elm.titlex}</span>
            <span class="x-price at3">
              <i>￥</i>${elm.price}
            </span>
          </span>
        </a>
      </li>`;
   
       }
       
       if(elm.bg =='pp'){
        temp += `<li>
        <a href="./product.html?id=${elm.id}" class="boxs-img ">
          <img src="..${picture[0].src}" alt="" class="gs-img" >
          <span class="x-info">
            <span class="x-name"> ${elm.title}</span>
            <span class="x-desc">${elm.titlex}</span>
            <span class="x-price">
              <i>￥</i> ${elm.price}
            </span>
          </span>
        </a>
      </li>`;
      
       }
       if(elm.id == 5){
        trr +=`<li class="phone2">
        <a href="./product.html?id=${elm.id}" class="boxs-img ">
          <!-- <img src="..${picture[0].src}" alt="" class="gs-img at" > -->
          <span class="x-info ">
            <span class="x-name at">${elm.title}</span>
            <span class="x-desc at2">${elm.titlex}</span>
            <span class="x-price at3">
              <i>￥</i>${elm.price}
            </span>
          </span>
        </a>
      </li>`;
   
       }
       if(elm.id > 5){
        trr1 += `<li>
        <a href="./product.html?id=${elm.id}" class="boxs-img ">
          <img src="..${picture[0].src}" alt="" class="gs-img" >
          <span class="x-info">
            <span class="x-name"> ${elm.title}</span>
            <span class="x-desc">${elm.titlex}</span>
            <span class="x-price">
              <i>￥</i> ${elm.price}
            </span>
          </span>
        </a>
      </li>`;
       }
      });
     
      
     
      $('.ff').append(tee);
      $('.ff').append(temp);
      $('.ff').append(trr);
      $('.ff').append(trr1);

    }
  });
})();

 //     temp += `<li class="item">
        //     <a href="./product.html?id=${elm.id}">
        //         <div class="p-picture">
        //             <img src="..${picture[0].src}" alt="">
        //         </div>
        //         <div class="p-title">
        //            ${elm.title}
        //         </div>
        //         <div class="p-price">
        //             <span class="yuan">￥</span> ${elm.price}
        //         </div>
        //     </a>
        // </li>`;
