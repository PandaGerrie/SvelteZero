<script context="module">
  import { redirect } from '@sveltejs/kit';

  export const load = () => {
    throw redirect(302, '/projects');
  };
</script>

<svelte:head>
  <title>Redirecting...</title>
  <meta http-equiv="refresh" content="0;url=/projects" />
</svelte:head>

  <h1> Redirecting... </h1>