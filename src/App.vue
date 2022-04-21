<template>
  <div id="app">
   <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #fdd670;">
 
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Cart</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        

        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <router-link to="/cart"><font-awesome-icon icon="fa-cart-shopping" class="mt-2 text-danger"/></router-link>
        
      <!-- <i class="font-awesome-icons" icon="cart" style="margin-top: 9px; color:red"></i> -->
    </ul>
 
  </div>
     <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
    </form>
</nav>
    <br><br>

  <router-view></router-view>
  </div>
</template>

<script>
//import Products from "./views/Products.vue";



export default {

   
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
