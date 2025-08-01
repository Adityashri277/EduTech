(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))A(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&A(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function A(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
    <div
      id="header"
      class="bg-cyan-700 w-screen h-auto pt-2 gap-y-4 flex flex-col items-center md:flex-row px-10 justify-between md:h-auto"
    >
      <div
        id="Product_Name_Icon"
        class="flex flex-row justify-center items-center gap-x-4 mb-1"
        style="font-family: 'Raleway', sans-serif"
      >
       <img
              loading="lazy"
              class="cursor-pointer rounded-4xl h-14 w-14 pb-1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTECzzcp8OBQG-wdiTnTQ3vE3zCuJAva7sWjADNzMBJj4uQd7B4sxLd0I&s"
              alt=""/>
        <h1 class="text-3xl font-bold text-white">EduTech</h1>
      </div>
      <div id="navbar" class="w-sm h-full flex items-center">
        <nav class="flex w-full h-full justify-evenly items-center">
          <div class="p-2 border-b-6 border-transparent hover:border-blue-800 hover:text-white">
            <a
              class="text-2xl font-bold"
              style="font-family: 'Raleway', sans-serif"
              href="#Home"
              >Home</a
            >
          </div>

          <div
            class="p-2 border-b-6 border-solid border-transparent hover:border-blue-800 hover:text-white"
          >
            <a
              class="text-2xl font-bold"
              style="font-family: 'Raleway', sans-serif"
              href="#About"
              >About</a
            >
          </div>
          <div
            class="p-2 border-b-6 border-solid border-transparent hover:border-blue-800 hover:text-white"
          >
            <a
              class="text-2xl font-bold"
              style="font-family: 'Raleway', sans-serif"
              href="#ContactUs"
              >Contact Us</a
            >
          </div>
        </nav>
      </div>
      <div id="Login/signup_btn">
        <a
          class="text-2xl bg-blue-800 px-3 py-2 font-semibold text-white rounded-lg"
          style="font-family: 'Raleway', sans-serif"
          href="#Login/SignUp"
          >Login/SignUp</a
        >
      </div>
    </div>
    <div
      id="mainsection"
      style="font-family: 'Raleway', sans-serif"
      class="w-screen h-2/4 mt-3"
    >
      <div id="phonesize" class="md:hidden block relative z-10">
        <img
          src="./src/components/7286381_31703.jpg"
          class="h-full w-full opacity-65"
          alt=""
        />
        <div
          class="z-20 absolute top-3 left-2 h-full w-full flex items-center justify-items-center"
        >
          <h1
            class="animate-bounce text-shadow-lg text-shadow-green-300 absolute flex text-center font-semibold text-5xl text-black"
          >
            "Unleash Your Potential with This Game-Changing Innovation Right
            Now"
          </h1>
        </div>
      </div>

      <div
        id="laptopsize"
        style="font-family: 'Raleway', sans-serif"
        class="px-20 h-2/4 w-screen z-10 hidden md:block relative"
      >
        <img
          class="w-full h-auto opacity-55 py-20"
          loading="eager"
          src="./src/components/6371462_25217.jpg"
          alt=""
        />
        <div
          class="p-10 z-20 inset-0 absolute h-full w-full flex items-start justify-center"
          style="font-family: 'Raleway', sans-serif"
        >
          <h1 
            class="absolute hover:animate-ping  w-2/3 top-48 text-center font-semibold text-4xl text-black lg:text-6xl"
          >
            "Unleash Your Potential with This Game-Changing Innovation Right
            Now"
          </h1>

          <h2
            style="font-family: 'Raleway', sans-serif"
            class="absolute bottom-52 animate-[pendulum_10s_ease-in-out_infinite] text-shadow-lg text-shadow-white text-center font-semibold text-3xl text-black lg:text-5xl"
          >
            <style>
              @keyframes pendulum {
                0% {
                  transform: translateX(-200px);
                }
                50% {
                  transform: translateX(250px);
                }
                100% {
                  transform: translateX(-200px);
                }
              }
            </style>

            "Get Results Fast with Our Proven, Trusted, Award-Winning Solution"
          </h2>
        </div>
      </div>
    </div>
    <div
      id="Studentsection"
      class="h-auto w-screen mb-10 flex flex-col justify-center items-center"
    >
      <div class="p-6 mb-6 flex flex-col items-center gap-y-2">
        <h1 class="text-4xl font-bold">Pure Hardwork, No Shortcuts</h1>
        <div class="w-1/3 border-4 border-l-black"></div>
      </div>
      <div
        id="mainbox"
        class="w-screen flex justify-center items-center flex-col flex-wrap h-auto md:flex-row md:justify-around"
      >
        <div
          id="smallboxA"
          class="flex justify-center p-8 items-center flex-col rounded-2xl bg-white hover:bg-black hover:text-white text-2xl font-semibold"
        >
          <div>
            <img
              class="rounded-xl h-28 w-32 mb-3"
              loading="lazy"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div><h1>600+</h1></div>
          <div><p>Different Courses</p></div>
        </div>

        <div
          id="smallboxB"
          class="text-2xl font-semibold flex p-8 rounded-2xl bg-white hover:bg-black hover:text-white justify-center items-center flex-col"
        >
          <div>
            <img
              loading="lazy"
              class="rounded-xl h-32 w-32"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div><h1>7,000+</h1></div>
          <div><p>Students Enrolled</p></div>
        </div>
        <div
          id="smallboxC"
          class="flex w-60 justify-center p-8 items-center px-4 flex-col text-2xl rounded-2xl bg-white hover:bg-black hover:text-white font-semibold"
        >
          <div>
            <img
              loading="lazy"
              class="rounded-xl h-32 w-32"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div><h1>1,000+</h1></div>
          <div><p>Selections</p></div>
        </div>
      </div>
    </div>
    <div
      id="FooterSection"
      class="text-white pt-5 flex flex-col items-center w-screen h-auto bg-gray-700"
    >
      <div
        class="flex flex-col w-1/2 gap-y-5 flex-wrap h-auto md:w-screen md:justify-around md:flex-row"
      >
        <div id="fpart1" class="flex flex-col gap-y-2 items-center">
          <div>
            <img
              loading="lazy"
              class="cursor-pointer rounded-3xl h-24 w-28"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTECzzcp8OBQG-wdiTnTQ3vE3zCuJAva7sWjADNzMBJj4uQd7B4sxLd0I&s"
              alt=""
            />
          </div>
          <h1 class="text-2xl pt-2">Email us: support@edutech.com</h1>
        </div>
        <div id="fpart2" class="my-2 cursor-pointer">
          <div>
            <h1 class="text-3xl">EduTech</h1>
            <div class="w-1/5 md:w-1/2 mb-1 border-b-4 border-white"></div>
          </div>
          <div class="pt-3 h-auto flex flex-col gap-y-4">
          <p class="text-2xl">About Us</p>
          <p class="text-2xl">FAQs</p>
          <p class="text-2xl">Privacy Policy</p>
          <p class="text-2xl">Terms and Conditions</p></div>
        </div>
        <div id="fpart3" class="my-2 cursor-pointer">
          <div>
            <h1 class="text-3xl">Products</h1>
            <div class="w-1/5 md:w-1/2 mb-1 border-b-4 border-white"></div>
          </div>
         <div class="pt-3 h-auto flex flex-col gap-y-4">
          <p class="text-2xl">Job Portal</p>
          <p class="text-2xl">Interview Resources</p>
          <p class="text-2xl">Mock Interview</p>
          <p class="text-2xl">Contests</p></div>
        </div>
        <div id="fpart4" class="my-2 h-auto cursor-pointer">
          <div class="">
            <h1 class="text-3xl">Links</h1>
            <div class="w-1/5 md:w-2/3 mb-1 border-b-4 border-white"></div>
          </div>
          <div class="pt-2 h-auto flex flex-col gap-y-4">
          <p class="text-2xl">Discord</p>
          <p class="text-2xl">Instagram</p>
          <p class="text-2xl">Careers</p>
          <p class="text-2xl">Youtube</p>
          </div>
     
        </div>
        
      </div>
    </div>

`;
