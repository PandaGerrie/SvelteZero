<script>
    import { onMount } from 'svelte';
  
    let data = [];
    let error = null;
  
    const basicToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTk5MTAwMTEsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2x5MzVzMnNoMDA3ODA3dzduZ294dWp5dS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vIiwic3ViIjoiMDIwNTk1NTAtNzBmMC00YTlmLWE1NmEtOGM5YTlkNTBjYTcwIiwianRpIjoiY2x5NDYwaHZ0MDdvZjA3dzkzNXI0OGI2eSJ9.Z-ZKKkbYfsVKhB1YtTqraRCmYF7J-XJh68JHS5pQ-9pSayRkiPey4OFGmwr8yL4Mi4sGwAkVff0cCxks8MqTLwRYiUzftkFnPQKJ75iABT6p8bBvxcz-_Mnzo2TpnRSgYOCM6iEHB2RaqgYfY7F_vhUtMi6I0-0Cf0_QfVE1yyJn16lty9ABvwjS062V9B-G2D6NnKp-_rGbwsYV23f0oJEZmaAZHTIw3Ok33cMWIH2kKQx1qxrw6aGqK-NrKop69nndI9RChMnC8Txr3krz-sRBJxwXwyglOCY7p9ZpA38iypyUXTSlVOMIVZF_4nJr4q9SakFSygDD8ILJWOnPsFq2i5birw2J6idJnbEo1EuDbcz6kcSkt8ow9pezCS4qXZmgg3EcU5sJyrgvH_ZDi8TEeh8UiRrzIaC_SJ8ToA9UWl0QjE5eDwJCVpQO4FR6OcAdiTfsq4ihcebauseW0FUMe-gyxfbEF3ToW1mpbZ8ZbGykK3XsbmEDDZkw8bWJGtWx6B2CCOPMhEPaYwKA-vXyJNR5ETezXgnwT-ifJW5e5JETWerrwlYsJSIII9VnZvJytpLxyKYtA2He9utWhmx0JhUCULqafF__R95S0iXZ2zzeo76nkMALCwec8S57lcRy_KyGD6DrQgw6E-JLsdpBZbw4-8dJJ8ULjBZ0toU';
  
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
                projectObjects {
                    id
                    basicPageInfo {
                      title
                      category
                      icon {
                          url
                      }
                      cardGallery {
                          url
                      }
                      backgroundColorGradient {
                          hex
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
        data = result.data.projectObjects;
        console.log(data);
      } catch (err) {
        error = err.message;
        console.error('Fetch error:', err);
      }
    });

    let description = 'Project Description';
  </script>

{#if error}
<p>Error: {error}</p>
{:else}
<ul class="projectOverview">
  {#each data as post}
    <li class="py-14 border border-amber-50/[.1]">
        <a href="/projects/{post.id}">
            <div class="cardPrev mb-10"> 
              {#each post.basicPageInfo.cardGallery as card}
                <img src="{card.url}">
              {/each}
            </div>
            <div class="cardLabels">
              <img class="projectIcon" src="{post.basicPageInfo.icon.url}">
              <h3 class="mt-2"> {post.basicPageInfo.title} </h3>
              <p> {post.basicPageInfo.category} </p>
              <button class="mt-8 primBtn"> View project </button>
          </div>
        </a>

    </li>
  {/each}
</ul>
{/if}

<style>
  ul.projectOverview{
      list-style-type: none;
      display: flex;
      column-gap: 20px;
      row-gap: 20px;
      flex-wrap: wrap;
      justify-content: space-between;
  }
  ul.projectOverview li{
      border-radius: 15px; 
      width: calc(50% - 10px);
      display: flex;
      justify-content: center;
      text-align: center;
      background-color: rgba(15, 15, 15, 1);
      box-sizing: border-box;
      animation: fadeIn 1.5s ease-in-out forwards;
      animation-delay: 1s;
      opacity: 0;
      transition: .4s;
  }
  .projectIcon{
    width: 25px;
    margin: auto;  
  }
  ul.projectOverview li:hover{
    background-color: rgba(0, 0, 0, 1);
  }
  ul.projectOverview li:hover .primBtn{
		text-transform: uppercase;
		background-color: rgba(0,0,0,0);
		border: 1px solid #bb6666; 
		color: #bb6666; 
		padding: 5px 20px; 
		font-size: .9rem;
  }
  ul.projectOverview li a{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
  }
  ul.projectOverview li h3{
      font-size: 1.7rem;
  }
  ul.projectOverview li p{
     font-size: 1rem;
  }
  img.coverImg{
      width: 300px; 
  }
  .cardPrev{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cardPrev img{
    height: auto;
    -webkit-box-shadow: 0px 0px 38px 1px rgba(0,0,0,0.63);
    -moz-box-shadow: 0px 0px 38px 1px rgba(0,0,0,0.63);
    box-shadow: 0px 0px 38px 1px rgba(0,0,0,0.63);
    border-radius: 0px;
    transition: .2s; 
  }
  .cardPrev img:nth-child(1) {
    transform: rotate(-8deg);
    width: 15%;
    z-index: 3;
    margin-right: -20px;
  }
  .cardPrev img:nth-child(2) {
    transform: rotate(-4deg);
    width: 17%;
    z-index: 4;
    margin-right: -20px;
  }
  .cardPrev img:nth-child(3) {
    width: 20%;
    z-index: 5;
  }
  .cardPrev img:nth-child(4) {
    transform: rotate(4deg);
    width: 17%;
    z-index: 4;
    margin-left: -20px;
  }
  .cardPrev img:nth-child(5) {
    transform: rotate(8deg);
    width: 15%;
    z-index: 3;
    margin-left: -20px;
  }
  .cardPrev img:hover{
    height: auto;
    z-index: 6;
    transform: rotate(0deg) scale(1.1);
    -webkit-box-shadow: 0px 0px 38px 4px rgba(0,0,0,0.63);
    -moz-box-shadow: 0px 0px 38px 4px rgba(0,0,0,0.63);
    box-shadow: 0px 0px 38px 4px rgba(0,0,0,0.63);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width:992px){
    ul.projectOverview li{
      width: 100%;
    }
  }
</style>