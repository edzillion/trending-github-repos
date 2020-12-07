<script>  
  let items = [0,1,2,3,4,5,6,7,8,9];
  import {data} from './data';
</script>

<div class="masonry-wrapper">
  <div class="masonry">
    {#each data.items as item}      
      <div class="masonry-item">
        <a href={item.html_url} target="_blank">
          <div class="masonry-content">
            <!-- <img src="{item.src}" alt="{item.altText}"> -->
            <h3 class="masonry-title">{item.name}</h3>
            <p class="masonry-description">{item.description}</p>      
          </div>      
        </a>
    </div>
    <div class="masonry-item-footer">
      <span class="button icon fas fa-star">Stars</span> 
      <div><i class="fas fa-star"/>Stars</div>
      <div><i class="fas fa-code-branch"/>Forks</div>
      <div><i class="fab fa-github"/>Clone Repo</div>
    </div>
   {/each}
  </div>
  <div class="masonry-footer">
    <p>Created with &#10084; with <a href="//w3bits.com/tools/masonry-generator/" target="_blank" rel="external noopener nofollow">CSS Masonry Generator</a></p>
  </div>  
</div>

<style>

  a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
    }

  /* from https://w3bits.com/tools/masonry-generator/ */
  .masonry-wrapper {
    padding: 1.5em;
    max-width: 960px;
    margin-right: auto;
    margin-left: auto;
  }
  .masonry {
    columns: 1;
    column-gap: 10px;
  }
  .masonry-item {
    display: inline-block;
    vertical-align: top;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 1023px) and (min-width: 768px) {  .masonry {
      columns: 2;
    }
  }
  @media only screen and (min-width: 1024px) {
    .masonry {
      columns: 3;
    }
  }
  .masonry-item, .masonry-content {
    border-radius: 4px;
    overflow: hidden;
  }
  .masonry-item {
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, .3));
    transition: filter .25s ease-in-out;
  }
  .masonry-item:hover {
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, .3));
  }
  .masonry-content {
    overflow: hidden;
  }
  .masonry-item {
    color: #111111;
    background-color: #f9f9f9;
  }
  .masonry-title, .masonry-description {
    margin: 0;
  }
  .masonry-title {
    font-weight: 700;
    font-size: 1.1rem;
    padding: 1rem 1.5rem;
  }
  .masonry-description {
    padding: 1.5rem;
    font-size: .75rem;
    border-top: 1px solid rgba(0, 0, 0, .05);
  }
  .masonry-footer {
    font-size: .75em;
    opacity: .25;
    text-align: center;
    padding-top: 3em; 
    padding-bottom: 3em;
    margin-bottom: -1.5em;
    transition: opacity 1s ease-in-out;
  }
  .masonry-footer a {
    color: currentColor;
  }
  .masonry-footer:hover, .masonry-footer:active, .masonry-footer:focus {
    opacity: .75;
  }

  .masonry-item-footer {
    /* padding: 1.5rem; */
    font-size: .75rem;
    border-top: 1px solid rgba(0, 0, 0, .05);
    height:25px;
  }

  .masonry-item-footer div {
    display: inline-block;
    padding:0.2rem;
    height: 100%;
    background-color: red;
  }

</style>