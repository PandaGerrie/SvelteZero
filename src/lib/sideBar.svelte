<script>
    export let title = 'title'; 
    export let description = "Here you can see all of the card design work I've worked on. Both my personal projects as my paid assignments are shown in the overview.";
    export let about = 'true'; 
    export let cta = 'true'; 
    export let back = '';
    export let feat1 = '';
    export let feat2 = '';
    export let feat3 = '';
    export let revName = '';
    export let revBody = '';
    export let revImg = '';
    let isOpen = false;

    function toggleOpen(){
        isOpen = !isOpen;
    }
</script>

{#if back != ''}
<div class="back mt-3 mb-1 px-8">
    <a href="{back}"> &larr; GO BACK </a>
</div>
{/if}
<!-- Title and text -->
<div class="px-8">
    <h1 class="mb-2"> {title} </h1>
    <p class="text-sm   leading-relaxed"> {description}</p>
</div>
<a href="" class="mt-5 px-6 py-6 border-y border-amber-50/[.2] text-amber-50/[.5] sidebarGradient moreInfoBtn" on:click={toggleOpen} class:open={isOpen}> Read more &rsaquo; </a>
<div class="moreInfo" class:open={isOpen}>


<!-- PROJECT FEATURE> -->
{#if feat1 != ''}
<div class=" mt-10 px-8 py-8 border-y border-amber-50/[.2] sidebarGradient">
    <h2 class="mb-5"> Project features </h2>
    <p class="pb-4 text-sm   leading-relaxed"> {feat1} </p>
    {#if feat2 != ''}
    <p class="pb-5 text-sm   leading-relaxed"> {feat2} </p>
    {/if}
    {#if feat3 != ''}
    <p class="pb-5 text-sm   leading-relaxed"> {feat3} </p>
    {/if}
</div>
{/if}


{#if about != 'false'}
<!-- About -->
<div class="grid grid-cols-3 gap-3 items-center mt-10 px-8 py-8 border-y border-amber-50/[.2] sidebarGradient">
    <div class="col-span-1">
        <img class="profileImg" src="https://avatars.githubusercontent.com/u/58695035?v=4">
    </div>
    <div class="col-span-2">
        <h2 class="mb-2"> About me </h2>
        <p class="text-sm   leading-relaxed"> I'm Gerriaal Illustrator. A creative from Antwerp with a passion for game design. </p>
    </div>
</div>
{/if}

<!-- Title and text -->
{#if revBody != ''}
<div class="px-8 py-8">
    <h2 class="mb-3"> User Feedback </h2>
    <img style="width:100px;" src="{revImg}" alt="review stars">
    <p class="mt-3 text-sm leading-relaxed"> {revBody}</p>
    <p class="opacity-50 mt-4 text-sm leading-relaxed"> - {revName}</p>
    
</div>
{/if}

{#if cta != 'false'}
<!-- CTA -->
<div class="ctaBlock p-y-8 mt-10 mb-8 px-8">
    <h2 class="mb-2"> Got a challenge? </h2>
    <p class="text-sm leading-relaxed mb-5"> Leave me a message and maybe we'll work together on your next project! </p>
    <a class="primBtn" href="mailto:gerrie@purplepanda.be"> gerrie@purplepanda.be </a>
</div>
{/if}

</div>
<a href="" class="px-6 py-6 text-amber-50/[.5] sidebarGradient lessInfoBtn" on:click={toggleOpen} class:open={isOpen} > Read less &rsaquo; </a>

<style>
    .back{
        transition: .3s; 
        cursor: pointer; 
    }
    .back:hover{
        opacity: .4;
    }
    .profileImg{
        width: 90px;
        height: 90px;
        border-radius: 300px;
        border: 3px solid #666;
    }
    .sidebarGradient{
        background: rgba(0,0,0,1);
        background: linear-gradient(90deg, rgba(1,1,1,0) 0%, rgba(1,1,1,1) 100%);
    }
    .sideLogo{
        width: 100%;
        position: absolute; 
        bottom: 0; 
    }

    .sideLogo img{
        width: 120px;
        margin: 10px auto; 
    }

    .moreInfoBtn, .lessInfoBtn{
        display: none;
    }



    @media (max-width: 992px){
        .moreInfo{
            height: 0px; 
            overflow: hidden; 
            transition: .4s; 
        }
        .lessInfoBtn{
            display: none;
        }
        .moreInfo.open{
            height: auto;
        }
        .lessInfoBtn.open{
            display: block;
        }
        .moreInfoBtn{
            display: block;
        }
        .moreInfoBtn.open{
            display: none;
        }
    }
</style>