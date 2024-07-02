<script>
    import Side from '$lib/sideBar.svelte'
    let description = 'Project Description';
</script>

<section>
    <div class="container mx-auto">
      
      <div class="grid grid-cols-4 border-y-2 border-rose-200/[.1]">
        <div class="col-span-1 align-start py-8 border-e-2 border-rose-200/[.1] sideBar">
         <Side title="Project Name" about="false" cta="false" description="{description}" back="/projects"/>
        </div>
        <div class="col-span-3 px-10 py-8 contentBar">
            <!-- PROJECT ASSETS HERE -->
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