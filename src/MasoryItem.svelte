<script>
 export let item; 
</script>

<div class="masonry-item">
  <a href={item.html_url}>
    <div class="masonry-content">
      
      <h3 class="masonry-title">{item.name}</h3>
      <p class="masonry-description">{item.description}</p>      
    </div>
  </a>
  <div class="masonry-footer">
    <ul class="button-group">
    <!-- <span class="button icon fas fa-star">Stars</span>  -->
    <!-- <div><i class="fas fa-star"/>Stars</div>
    <div><i class="fas fa-code-branch"/>Forks</div>
    <div><i class="fab fa-github"/>Clone Repo -->
  </div>
  
</div>

<style>
  
  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
  }

  .masonry-item {
    display: inline-block;
    vertical-align: top;
    margin-bottom: 10px;
  }

  .masonry-item, .masonry-content {
    border-radius: 10px;
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
    /* padding: 1.5rem; */
    font-size: .75rem;
    border-top: 1px solid rgba(0, 0, 0, .05);
    height:25px;
  }

  .masonry-footer div {
    display: inline-block;
    padding:0.2rem;
    height: 100%;
    background-color: red;
  }

</style>