<script>
  import Side from '$lib/sideBar.svelte'
  import { onMount } from 'svelte';
  import {page} from '$app/stores';
  import { browser } from '$app/environment';
  
  // Move lightbox imports inside onMount
  onMount(() => {
    if (browser) {
      import('lightbox2/dist/css/lightbox.css');
      import('lightbox2');
    }
  });

  let projectID = $page.params.projectID
  let description = '';
  let feat1 = '';
  let feat2 = '';
  let feat3 = '';
  let projTitle = '';
  let revName = '';
  let revBody = '';
  let revImg = '';
  let components;
  let bgCol1 = 'rgba(30, 30, 30, 1)' ;
  let bgCol2 = 'rgba(30, 30, 30, 1)' ;

  let data = [];
  let error = null;

  const basicToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTk5MTAwMTEsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2x5MzVzMnNoMDA3ODA3dzduZ294dWp5dS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vIiwic3ViIjoiMDIwNTk1NTAtNzBmMC00YTlmLWE1NmEtOGM5YTlkNTBjYTcwIiwianRpIjoiY2x5NDYwaHZ0MDdvZjA3dzkzNXI0OGI2eSJ9.Z-ZKKkbYfsVKhB1YtTqraRCmYF7J-XJh68JHS5pQ-9pSayRkiPey4OFGmwr8yL4Mi4sGwAkVff0cCxks8MqTLwRYiUzftkFnPQKJ75iABT6p8bBvxcz-_Mnzo2TpnRSgYOCM6iEHB2RaqgYfY7F_vhUtMi6I0-0Cf0_QfVE1yyJn16lty9ABvwjS062V9B-G2D6NnKp-_rGbwsYV23f0oJEZmaAZHTIw3Ok33cMWIH2kKQx1qxrw6aGqK-NrKop69nndI9RChMnC8Txr3krz-sRBJxwXwyglOCY7p9ZpA38iypyUXTSlVOMIVZF_4nJr4q9SakFSygDD8ILJWOnPsFq2i5birw2J6idJnbEo1EuDbcz6kcSkt8ow9pezCS4qXZmgg3EcU5sJyrgvH_ZDi8TEeh8UiRrzIaC_SJ8ToA9UWl0QjE5eDwJCVpQO4FR6OcAdiTfsq4ihcebauseW0FUMe-gyxfbEF3ToW1mpbZ8ZbGykK3XsbmEDDZkw8bWJGtWx6B2CCOPMhEPaYwKA-vXyJNR5ETezXgnwT-ifJW5e5JETWerrwlYsJSIII9VnZvJytpLxyKYtA2He9utWhmx0JhUCULqafF__R95S0iXZ2zzeo76nkMALCwec8S57lcRy_KyGD6DrQgw6E-JLsdpBZbw4-8dJJ8ULjBZ0toU';
  // projectObject(where: {id: "` + projectID + `"}) {
  function openLightbox(url) {
    // Create a temporary anchor element with lightbox attributes
    const a = document.createElement('a');
    a.href = url;
    a.setAttribute('data-lightbox', 'image');
    a.click();
  }

  onMount(async () => {
    try {
      const response = await fetch('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cly35s2sh007807w7ngoxujyu/master', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${basicToken}`
        },
        body: JSON.stringify({
          query: `
          {
              projectObject(where: {id: "` + projectID + `"}) {
                  projectFeature1
                  projectFeature2
                  projectFeature3
                  description
                  basicPageInfo {
                      title
                      icon {
                          url
                      }
                      backgroundColorGradient {
                          hex
                      }
                  }
                  components {
                  ... on CardType {
                          title
                          typeDescription
                          cards(first: 1000) {
                              url
                          }
                          id
                      }   
                  }
                  rev {
                      reviewBody
                      reviewUser
                      stars {
                          url
                      }
                  }
              }
          }
        `
        })
      });

      console.log('Response status:', response.status);
      console.log('Response status text:', response.statusText);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response body:', errorText);
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const result = await response.json();
      console.log(result);
      data = result.data.projectObject;
      description = data.description;
      feat1 = data.projectFeature1;
      feat2 = data.projectFeature2;
      feat3 = data.projectFeature3;
      projTitle = data.basicPageInfo.title;
      if (data.basicPageInfo.backgroundColorGradient.length != 0){
          bgCol1 = data.basicPageInfo.backgroundColorGradient[1].hex;
          bgCol2 =data.basicPageInfo.backgroundColorGradient[0].hex;
      }
      projTitle = data.basicPageInfo.title;
      if (data.rev != null){
          revName = data.rev.reviewUser;
          revBody = data.rev.reviewBody;
          revImg = data.rev.stars.url;
      }
      components = data.components;
      console.log(bgCol1);
      console.log(bgCol2);
    } catch (err) {
      error = err.message;
      console.error('Fetch error:', err);
    }    
  });
  
</script>

<section>
  <div class="container mx-auto">
    <div class="grid grid-cols-4 border-y-2 border-amber-50/[.1] max-[992px]:grid-cols-1">
      <div class="col-span-1 align-start py-8 border-e-2 border-amber-50/[.1] sideBar max-[992px]:pb-0">
       <Side title="{projTitle}" about="false" cta="false" description="{description}" back="/projects" feat1="{feat1}" feat2="{feat2}" feat3="{feat3}" revName="{revName}" revBody="{revBody}" revImg="{revImg}"/>
      </div>
      <div class="col-span-3 px-10 py-10 contentBar" style="--bgCol1: {bgCol1};--bgCol2: {bgCol2};">
          <!-- PROJECT ASSETS HERE -->
           {#if components && components.length > 0}
              {#each components as comp}
              <div class="cardTypeBlock pb-10 mb-10 border-b border-amber-50/[.1]">
                  <h2 class="text-2xl">{comp.title}</h2>
                  <p class="text-sm text-white/[.5] leading-relaxed mb-5 mt-1">{comp.typeDescription}</p>
                  <div class="cardgrid grid grid-cols-7 gap-3 pb-4 max-[992px]:grid-cols-3">
                      {#each comp.cards as card}
                        <div class="col-span-1 gridCard rounded-md">
                          <a href="{card.url}" data-lightbox="gallery">
                            <img src="{card.url}" alt="">
                          </a>
                        </div>
                      {/each}
                  </div>
              </div>
              {/each}
           {/if}
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
html, body{max-width: 100vw; overflow-x: hidden;}
  .cardTypeBlock{
      opacity: 0;
      animation: fadeIn 1.5s ease-in-out forwards;
      animation-delay: 1s;
  }
  .gridCard{
      width: 100%;
      transition: .3s;
      
  }
  .gridCard:hover{
     transform: scale(1.9) rotate(3deg);
z-index: 20; 
  }
  .contentBar{
      background: rgb(0,0,0);
      background: linear-gradient(141deg, var(--bgCol2) 0%, var(--bgCol1) 100%);
  }
  @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Hide default arrows */
:global(.lb-prev),
:global(.lb-next) {
  background-image: none !important;
  width: 60px !important;
}

:global(.lb-nav) {
  width: 140% !important;
  left: -20% !important;
}

/* Mobile styles */
@media (max-width: 768px) {
  :global(.lb-nav) {
    width: 110% !important;  /* 90% + 10% padding for arrows */
    left: -5% !important;
  }

  :global(.lb-prev::before) {
    left: 15px;  /* Reduced spacing for mobile */
  }

  :global(.lb-next::before) {
    right: 15px;  /* Reduced spacing for mobile */
  }
}

/* Rest of the arrow styles */
:global(.lb-prev::before),
:global(.lb-next::before) {
  content: '';
  position: absolute;
  top: 50%;
  width: 20px;
  height: 20px;
  border: solid white;
  border-width: 0 3px 3px 0;
  margin-top: -10px;
}

:global(.lb-prev::before) {
  transform: rotate(135deg);
  left: 40px;  /* Increased from 20px to 40px */
}

:global(.lb-next::before) {
  transform: rotate(-45deg);
  right: 40px;  /* Increased from 20px to 40px */
}
</style>