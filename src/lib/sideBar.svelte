<script>
    export let title = 'title'; 
    export let description = "Here you can see all of the card design work I've worked on. Both my personal projects as my paid assignments are shown in the overview.";
    export let about = 'true'; 
    export let cta = 'true'; 
    export let back = '';
    export let feat1 = '';
    export let feat2 = '';
    export let feat3 = '';
</script>

<!-- Title and text -->
<div class="px-8">
    <h1 class="mb-2"> {title} </h1>
    <p class="text-sm text-rose-100/[.3] leading-relaxed"> {description}</p>
</div>
<!-- PROJECT FEATURES -->
{#if feat1 != ''}
<div class=" mt-10 px-8 py-8 border-y border-rose-200/[.1] sidebarGradient">
    <h2 class="mb-5"> Project features </h2>
    <p class="pb-4 text-sm text-rose-100/[.3] leading-relaxed"> {feat1} </p>
    {#if feat2 != ''}
    <p class="pb-5 text-sm text-rose-100/[.3] leading-relaxed"> {feat2} </p>
    {/if}
    {#if feat3 != ''}
    <p class="pb-5 text-sm text-rose-100/[.3] leading-relaxed"> {feat3} </p>
    {/if}
</div>
{/if}


{#if about != 'false'}
<!-- About -->
<div class="grid grid-cols-3 gap-3 items-center mt-10 px-8 py-8 border-y border-rose-200/[.1] sidebarGradient">
    <div class="col-span-1">
        <img class="profileImg" src="https://avatars.githubusercontent.com/u/58695035?v=4">
    </div>
    <div class="col-span-2">
        <h2 class="mb-2"> About me </h2>
        <p class="text-sm text-rose-100/[.5] leading-relaxed"> I'm Gerriaal Illustrator. A creative from Antwerp with a passion for game design. </p>
    </div>
</div>
{/if}

{#if cta != 'false'}
<!-- CTA -->
<div class="ctaBlock p-y-8 mt-10 mb-8 px-8">
    <h2 class="mb-2"> Got a challenge? </h2>
    <p class="text-sm text-rose-100/[.3] leading-relaxed mb-5"> Leave me a message and maybe we'll work together on your next project! </p>
    <a class="primBtn" href="mailto:gerrie@purplepanda.be"> gerrie@purplepanda.be </a>
</div>
{/if}

{#if back != ''}
<div class="back p-y-8 mt-10 mb-8 px-8">
    <a href="{back}"> Go back </a>
</div>
{/if}

<style>
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
</style>