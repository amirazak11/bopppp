
// $(function () {
//   $("#navBar").load("navBar.html");
//   $("#navSlider").load("navslider.html");
//   $("#icons").load("icons.html");
//   $("#footer").load("Footer.html");
//   $("#gray-footer").load("gray-footer.html");
//   $("#sideNav").load("Sidenavbar.html");
// });

$(document).ready(() => {
  $(".loading-screen").fadeOut(1000);
});
let navBar = document.getElementById("navBar");
let footer = document.getElementById("footer");

let navBarcontainer= `

<nav class=" bg-white shadow-sm py-lg-2 py-4">
<div class="container nav d-block  navbar-expand-lg bg-body-tertiary ">
  <div class="row align-items-center justify-content-center">
    <div class="col-lg-4 col-5">
      <a class=" d-flex align-items-center icon-menu" role="button" data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      <i class="fa-solid fa-bars text-dark fs-3"></i>
    </a>
    </div>
    <div class="col-lg-4 d-lg-block d-none">
            <div class="justify-content-center d-lg-flex d-none">
      <a class="navbar-brand  py-2 text-center  m-0" href="index.html">
    
      <img class="m-0" width="181" src="assets/imgs/home/image1.svg" />
    </a>
      </div></div>
    <div class="col-lg-4 col-6">

      <div class="d-flex justify-content-end" id="navbarSupportedContent">

        <form class="d-flex ">

      <div class="px-2 " onclick="document.location='washList.html'" role="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3.66275 13.2136L9.82377 19.7066C11.0068 20.9533 12.9932 20.9534 14.1762 19.7066L20.3372 13.2136C22.5542 10.8771 22.5543 7.08895 20.3373 4.75248C18.1203 2.416 14.5258 2.416 12.3088 4.75248V4.75248C12.1409 4.92938 11.8591 4.92938 11.6912 4.75248V4.75248C9.47421 2.416 5.87975 2.416 3.66275 4.75248C1.44575 7.08895 1.44575 10.8771 3.66275 13.2136Z" stroke="#0C0C0C" stroke-width="1.5"/>
    </svg>
    </div>
          <div class="px-2 "  >
          <a href="shoppingCart.html">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
          <path d="M2.53715 9.47134C2.80212 7.48412 4.49726 6 6.50207 6H13.4979C15.5027 6 17.1979 7.48412 17.4628 9.47135L18.3962 16.4713C18.7159 18.8693 16.8504 21 14.4313 21H5.56873C3.14958 21 1.2841 18.8693 1.60382 16.4713L2.53715 9.47134Z" stroke="#0C0C0C" stroke-width="1.5"/>
          <path d="M14 8V5C14 2.79086 12.2091 1 10 1V1C7.79086 1 6 2.79086 6 5L6 8" stroke="#0C0C0C" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        </a>
          </div>
        </form>
      </div>
    </div>

  </div>






</div>
</nav>

<nav class="navbar navbar-expand-lg bg-body-tertiary bg-black ">
<div class="container-fluid ">
  <a class="d-lg-none d-flex align-items-center icon-menu" role="button" data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    <i class="fa-solid fa-bars text-white"></i>
  </a>
  <a class="navbar-brand py-2" href="index.html">

    <img width="150" src="assets/imgs/4b41d40c-73be-4059-8354-188caf80e936 1.png" />
  </a>



  <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <ul class="navbar-nav m-auto mb-2 mb-lg-0 fs-6 text-white">
      <li class="nav-item ">
        <a class="nav-link " aria-current="page" href="index.html" onclick="setActiveLink(this)">الصفحة الرئيسية</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="allProducts.html" onclick="setActiveLink(this)">جميع المنتجات</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="allProducts.html" onclick="setActiveLink(this)">مينتورا كوليكشن</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="allProducts.html" onclick="setActiveLink(this)">عنان كوتور</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="allProducts.html" onclick="setActiveLink(this)">شنط عنان</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="allProducts.html" onclick="setActiveLink(this)">الأناقة البسيطة</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="allProducts.html" onclick="setActiveLink(this)">الفساتين والبناطيل</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="categories.html" onclick="setActiveLink(this)">جميع التصنيفات</a>
      </li>
    </ul>

  </div>
</div>
</nav>
<div class="search-container position-fixed top-0 start-0 end-0 bottom-0 bg-white">
<a type="button" class="close-div position-absolute">
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</a>
<form class="h-100 w-100 d-flex justify-content-center align-items-center">
  <input type="text" class="nosubmit search-input border rounded-2 border-1 border-black" placeholder="Search here....">
</form>
</div>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div class="offcanvas-header justify-content-end">

  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
    <i class="fa-solid fa-xmark"></i>
  </button>
</div>
<div class="offcanvas-body h-100 d-flex flex-column">
<h5 class="offcanvas-title text-center" id="offcanvasRightLabel">
<a href="index.html">
<img class="m-0" width="181" src="assets/imgs/home/image1.svg" />
</a>
</h5>
  <ul class="navbar-nav  mb-2 mb-lg-0 p-3 text-uppercase">
    <li class="nav-item ">
      <a class="nav-link " aria-current="page" href="index.html">
      <span>
      Home
      </span>
      </a>
    </li>
    <li class="nav-item ">
    <a class="nav-link " aria-current="page" href="allProducts.html" >
    <span>New in</span></a>
  </li>
  <li class="nav-item ">
  <a class="nav-link " aria-current="page" href="allProducts.html" >
  <span>Seasonal</span>
  </a>
</li>
<li class="nav-item ">
<a class="nav-link " aria-current="page" href="allProducts.html" >
<span>
Summer wear
</span>
</a>
</li>
<li class="nav-item ">
<a class="nav-link " aria-current="page" href="allProducts.html" >
<span>
winter wear
</span>
</a>
</li>
<li class="nav-item ">
<a class="nav-link " aria-current="page" href="allProducts.html" >
<span>
work attire
</span> 
</a>
</li>
<li class="nav-item ">
<a class="nav-link " aria-current="page" href="allProducts.html" >
<span>
view all
</span>
</a>
</li>
  </ul>
  <ul class="navbar-nav  mb-2 mb-lg-0 p-3 text-uppercase">
  <li class="nav-item ">
    <a class="nav-link " aria-current="page" href="ourStores.html" >
    <span>Our story
    </span>
    </a>
    <a class="nav-link " aria-current="page" href="contactus.html" ><span>contact us</span></a>
  </li>
  </ul>
  <div class="mt-auto m-auto">
   <a class="text-danger text-decoration-underline">Logout</a>
  </div>
</div>
</div>
<div class="floatwhatsapp ">
<i class="fa-brands fa-whatsapp "></i>

</div>
<div class="back-to-top" id="backTop">
<i class="fa fa-arrow-up "></i>

</div>
  `

navBar.innerHTML = navBarcontainer;
let FooterContainer= `
<div class="container py-5">
<div class="row justify-content-between" data-aos="fade-up" data-aos-duration="3000">
<div class="col-md-2 col-12 d-flex ">
<ul class="p-0 fs-6 ">
  <li class="py-1">
    <a href="index.html">
    Home
    </a>
  </li>
  <li class="py-1">
  <a href="ourStores.html">
  Our story
  </a>
</li>
</ul>
</div>
  <div class="col-md-2 col-12 ">
    <ul class="p-0 fs-6 ">
      <li class="py-1">
        <a href="Terms.html">
        Terms and conditions
        </a>
      </li>
      <li class="py-1">
      <a href="productcare.html">
      Product care
      </a>
    </li>
    </ul>
  </div>
  <div class="col-md-2 col-12 d-flex ">
<ul class="p-0 fs-6 ">
  <li class="py-1 text-white" >
    <a  role="button" data-bs-toggle="modal" data-bs-target="#filter">
    Size Guide
    </a>
  </li>
  <li class="py-1">
  <a href="FAQ.html">
  FAQs
  </a>
</li>
</ul>
</div>
  <div class="col-md-2 col-12 d-flex ">
    <ul class="p-0 fs-6 ">
      <li class="py-1">
        <a href="contactus.html">
        Contact us
        </a>
      </li>
    </ul>
  </div>
  <div class="col-md-3 col-12">
    <h4 class="p-lg-2 py-2 text-white fs-6">

    get in touch
    </h4>
    <ul class="social d-flex p-0">
      <li>
        <a href="#">
          <i class="fab fa-facebook-f icon"></i>
        </a>
      </li>
      <li>
        <a href="#"><i class="fab fa-twitter icon"></i></a>
      </li>
      <li>
        <a href="#"><i class="fa-brands fa-instagram icon">
        </i></a>
      </li>
      <li>
        <a href="#"><i class="fa-brands fa-whatsapp icon"></i></a>

      </li>
    </ul>
  </div>
</div>
</div>

<div class="container py-3">


<div class="row justify-content-center">
<div class="col-md-7 col-12 text-center fs-6 border-top py-2 text-uppercase">
@Bymariams
</div>
  <div class="col-md-7 col-12 text-center  emcan">
    Powared by<span class=""> <a class="text-black" href="https://emcan-group.com/en">emcan</a> </span>
  </div>

</div>

</div>
<div class="modal fade " id="filter" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">

  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="container-fluid">

          <div class="row fs-6">
            <table class="table text-center">
              <thead >
                <tr>
                  <th scope="col">Size (uS)</th>
                  <th scope="col">Size # (uS)</th>
                  <th scope="col">Bust (in)</th>
                  <th scope="col">Waist (in)</th>
                  <th scope="col">Hips (in)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>XS</td>
                  <td>2-4</td>
                  <td>30-33</td>
                  <td>22-25</td>
                  <td>@32-35</td>

                </tr>
                <tr>
                  <td>S</td>
                  <td>2-4</td>
                  <td>30-33</td>
                  <td>22-25</td>
                  <td>@32-35</td>

                </tr>
                <tr>
                  <td >M</td>
                  <td>2-4</td>
                  <td>30-33</td>
                  <td>22-25</td>
                  <td>@32-35</td>
                </tr>
                <tr>
                  <td >l</td>
                  <td>2-4</td>
                  <td>30-33</td>
                  <td>22-25</td>
                  <td>@32-35</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  </div>
</div>
</div>
  `
  footer.innerHTML = FooterContainer;
  $(document).ready(function () {
    $(".search-input-icon").click(function () {
      $(".search-container").fadeIn();
      $(".search-input").animate({
        width: '80%'
      });
    });
    $(".close-div").click(function () {
      $(".search-container").fadeOut();
      $(".search-input").animate({
        width: '0%',
      });
    });

  });
  $(document).ready(() => {
    let container = $(".section-top").offset().top;
    $(window).scroll(function () {
      let windowScroll = $(window).scrollTop();
      if (windowScroll > container) {
        $("#backTop").show(500);
        $("#backTop").fadeIn(500);
      }
      else {
        $("#backTop").fadeOut(500);
    
      }
    })
    $("#backTop").click(function () {
      $("html,body").animate({ scrollTop: 0 }, 300)
    })
    });