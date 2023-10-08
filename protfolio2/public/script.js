$(document).ready(function () {
  $(window).scroll(function () {
    //  sticky navbar on scroll script  //
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    //  scroll-up button show/hide script  //
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //  slide-up script  //

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    //  removing smooth scroll on slide-up button click  //
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    //  Smooth scroll on Menu Items click  //

    $("html").css("scrollBehavior", "smooth");
  });

  //  Toggle Navbar  //

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //  Typing Text Animation  //

  var typed = new Typed(".typing", {
    strings: [
      "Student",
      "Gamer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Student",
      "Gamer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  //  Owl Carousel  //

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});






// var btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
//   e.preventDefault();

//   var usernam = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var phone = document.getElementById("phone").value;
//   var textarea = document.getElementById('textarea').value;

//   var messageBody =
//     "Name" + usernam + "<br /> Phone" + phone + "<br /> Email" + email + "<br/> Subject " + Subject + "<br/>Message" + textarea;
  

//   Email.send({
//     SecureToken: "9b0cc2b4-9c25-41fc-8ce5-92e441a392fc",
//     To: "ffhackme88@gmail.com",
//     From: "jsubha294@gmail.com",
//     Subject: "Contact Message",
//     Body: messageBody,
//   }).then((message) => alert(message));
// })


// function sendMail() {
//   var params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     phone: document.getElementById("phone").value,
//     message: document.getElementById("textarea").value
//   };
//   const serviceId = "service_t9og1ao";
//   const templateId = "template_qrn7lra";

//   emailjs
//     .send(serviceId, templateId, params)
//     .then((res) => {
//       document.getElementById("name").value = " ";
//       document.getElementById("email").value = " ";
//       document.getElementById("phone").value = " ";
//       document.getElementById("textarea").value = " ";
//       console.log(res);
//       alert("message sent");
//     })
//     .catch((error) => console.log(error));

// }







      // <!-- Skills -->
      // <section class="skills" id="skills">
      //   <div class="max-width">
      //     <h2 class="title">My Skills</h2>
      //     <div class="skills-content">
      //       <div class="column left">

      //         <div class="text">INTERNSHIP</div>
      //         <p>
      //           <li class="intern">#Company Name "Where You work"</li>
      //           <li class="intern">#Company Name "Where You work"</li>
      //           <li class="intern">#Company Name "Where You work"</li>
      //         </p>

      //         <br>
      //         <div class="text">PROJECT</div>

      //         <p>
      //           <li class="project">Portfolio (HTML, CSS, js, Bootstraps)</li>
      //           <li class="project">eCommerce Website (Shopify liquid-code, HTML, CSS)</li>
      //           <li class="project">QuickShop - eCommerce Website (Like Amazon, Flipkart etc.)</li>
      //           <li class="project">Fully Responsive Design Email Subscribe form</li>
      //           <li class="project">Blog (HTML, CSS, Bootstraps)</li>
      //           <li class="project">Currently Working on a Messaging App (Like WhatsApp)</li>
      //         </p>

      //         <br>
      //         <div class="text">DEVELOPMENT SKILLS</div>

      //         <p>
      //           I'm familiar & work on a daily basis with HTML, CSS, JavaScript, Bootstrap, React js and other modern frameworks.
      //         </p>
      //         <a href="#" target="blank">Get Educate...</a>
      //       </div>
      //       <div class="column right">
      //         <div class="bars">
      //           <div class="info">
      //             <span>Python</span>
      //             <span>90%</span>
      //           </div>
      //           <div class="line python"></div>
      //         </div>
      //         <div class="bars">
      //           <div class="info">
      //             <span>HTML</span>
      //             <span>80%</span>
      //           </div>
      //           <div class="line html"></div>
      //         </div>
      //         <div class="bars">
      //           <div class="info">
      //             <span>CSS</span>
      //             <span>60%</span>
      //           </div>
      //           <div class="line css"></div>
      //         </div>
      //         <div class="bars">
      //           <div class="info">
      //             <span>JavaScript</span>
      //             <span>40%</span>
      //           </div>
      //           <div class="line js"></div>
      //         </div>
      //         <div class="bars">
      //           <div class="info">
      //             <span>Bootstraps</span>
      //             <span>60%</span>
      //           </div>
      //           <div class="line bootstraps"></div>
      //         </div>
      //         <div class="bars">
      //           <div class="info">
      //             <span>Django</span>
      //             <span>70%</span>
      //           </div>
      //           <div class="line django"></div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>

      // <!-- Projects -->
      // <section class="projects" id="projects">
      //   <div class="max-width">
      //     <h2 class="title">My Projects</h2>
      //     <div class="carousel owl-carousel">
      //       <div class="card">
      //         <div class="box">
      //           <img src="https://source.unsplash.com/720x600/?shopping" alt="">
      //           <div class="text">Ecommerce</div>
      //           <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      //         </div>
      //       </div>
      //       <div class="card">
      //         <div class="box">
      //           <img src="https://source.unsplash.com/720x600/?portfolio" alt="">
      //           <div class="text">Portfolio</div>
      //           <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      //         </div>
      //       </div>
      //       <div class="card">
      //         <div class="box">
      //           <img src="https://source.unsplash.com/720x600/?blog" alt="">
      //           <div class="text">Blog</div>
      //           <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      //         </div>
      //       </div>
      //       <div class="card">
      //         <div class="box">
      //           <img src="https://source.unsplash.com/720x600/?messanger" alt="">
      //           <div class="text">Messaging App</div>
      //           <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      //         </div>
      //       </div>
      //       <div class="card">
      //         <div class="box">
      //           <img src="https://source.unsplash.com/720x600/?app-clone" alt="">
      //           <div class="text">Clone</div>
      //           <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      //         </div>
      //       </div>
      //       <div class="card">
      //         <div class="box">
      //           <img src="https://source.unsplash.com/720x600/?code,demo" alt="">
      //           <div class="text">Demo</div>
      //           <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>
