<script>
import AllProj from '$lib/allProjects.svelte'
import Side from '$lib/sideBar.svelte'
</script>


<section>
  <div class="container mx-auto">
    
    <div class="grid grid-cols-4 border-y-2 border-amber-50/[.1]">
      <div class="col-span-1 align-start py-8 border-e-2 border-amber-50/[.1] sideBar">
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



