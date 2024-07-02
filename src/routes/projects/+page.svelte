<script>
import AllProj from '$lib/allProjects.svelte'
import Side from '$lib/sideBar.svelte'
</script>


<section>
  <div class="container mx-auto">
    
    <div class="grid grid-cols-4 border-y-2 border-rose-200/[.1]">
      <div class="col-span-1 align-start py-8 border-e-2 border-rose-200/[.1] sideBar">
       <Side title="Projects" />
      </div>
      <div class="col-span-3 px-10 py-8 contentBar">
        <AllProj />
      </div>
    </div>
  </div>
  <div class="mx-auto loaderCont">
    <div class="loader mx-auto">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div> 
  </div>
</section>

<style>
  .sideBar{
    background-color: rgba(10, 10, 10, 1);
  }
  .contentBar{
    background-color: rgba(16, 16, 16, 1);
    min-height: 100vh;
  }
  .loader {
    --uib-size: 60px;
    --uib-color: #dfdddd;
    --uib-speed: 1.4s;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(var(--uib-size) * 0.8);
    height: calc(var(--uib-size) * 0.8);

  }

  .loaderCont{
    position: fixed; 
    height: 10vh;
    top: 45vh;
    bottom: 45vh;
    width: 20vw;
    left: 53vw;
    animation: fadeOut 1s ease-in-out forwards;
    animation-delay: 1s;
  }

  .dot {
    position: relative;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    height: 100%;
    width: 25%;
    transform-origin: center top;
  }

  .dot::after {
    content: '';
    display: block;
    width: 100%;
    height: 25%;
    border-radius: 50%;
    background-color: var(--uib-color);
    transition: background-color 0.3s ease;
  }

  .dot:first-child {
    animation: swing var(--uib-speed) linear infinite;
  }

  .dot:last-child {
    animation: swing2 var(--uib-speed) linear infinite;
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
      animation-timing-function: ease-out;
    }

    25% {
      transform: rotate(70deg);
      animation-timing-function: ease-in;
    }

    50% {
      transform: rotate(0deg);
      animation-timing-function: linear;
    }
  }

  @keyframes swing2 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: linear;
    }

    50% {
      transform: rotate(0deg);
      animation-timing-function: ease-out;
    }

    75% {
      transform: rotate(-70deg);
      animation-timing-function: ease-in;
    }
  }
  @keyframes fadeOut{
    0% {
      opacity: 1;
      z-index: 1;
    }
    100% {
      opacity: 0;
      z-index: -1;
    }
  }
</style>

