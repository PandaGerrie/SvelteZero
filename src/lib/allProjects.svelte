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
                    cardGallery {
                        url
                    }
                    backgroundColorGradient {
                        hex
                    }
                    coverImage {
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
        data = result.data.projectObjects;
        console.log(data);
      } catch (err) {
        error = err.message;
        console.error('Fetch error:', err);
      }
    });
  </script>

{#if error}
<p>Error: {error}</p>
{:else}
<ul class="projectOverview">
  {#each data as post}
    <li>
        <a href="http://localhost:5173/projects/{post.id}">
            <img class="coverImg" src="{post.basicPageInfo.coverImage.url}">
            <h3> {post.basicPageInfo.title} </h3>
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
  }

  ul.projectOverview li{
      padding: 15px;
      border: 1px solid #E0E0E0; 
  }

  ul.projectOverview li h3{
      margin-top: 5px; 
  }
  img.coverImg{
      width: 300px; 
  }
</style>