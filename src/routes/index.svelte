<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('/api/createCookie');

    // With `await res.json()` the set-cookie header isn't
    // included in page response. Comment it out to test
    await res.json();

    return {
      status: 200,
    };
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
