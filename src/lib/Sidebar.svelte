<script>
    import { fly } from 'svelte/transition';
    export let show = false;
</script>

{#if show}
  <nav transition:fly={{x: 250, opacity: 1}}>
    <ul>
    <li><a rel="external" href="/#home">home</a></li>
    <li><a rel="external" href="/#about">about</a></li>
    <li><a rel="external" href="/#experience">experience</a></li>
    <li><a rel="external" href="/#projects">projects</a></li>
    <li><a rel="external" href="/#contact">contact</a></li>
    <li><a rel="external" href="pdf/main.pdf" target="_blank" class="button">resume</a></li>
</ul>
  </nav>
{/if}

<style>
    .button {
        padding: .5rem;
    }
    ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
    }
    li {
        padding: 1rem 0rem;
    }
    nav {
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      padding: 3rem 1rem 0.6rem;
      border-left: 1px solid #aaa;
      background: #14213d;
      overflow-y: auto;
        width: 10rem;
        z-index: 2;
    }
    </style>