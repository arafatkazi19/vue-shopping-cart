<template>
  <div class="container">
      <div class="row">
        <div v-for="(value, id) in product" :key="value.id" class="col-md-4">
          <div class="card" style="width: 18rem">
              <figure><img :src="require(`@/assets/images/${value.image}`)" style="height : 170px" class="img-fluid"/></figure>
            <div class="card-body">
              <h3 class="card-title">{{ id }}.{{ value.name }}</h3>
              <h6 class="">Price : Tk.{{value.price}}/=</h6>
              <a href="#" class="btn btn-warning btn-block">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'product-list',
     data() {
        return {
            product: [
                {
                    id: 1,
                    name: "Lengra",
                    image: "mango-1.jpg",
                    price: 155,
                },
                {
                    id: 2,
                    name: "Amropali",
                    image: "mango-2.jpg",
                    price: 178,
                },
                {
                    id: 3,
                    name: "Fazli",
                    image: "mango-3.jpg",
                    price: 286,
                },
            ],
        };
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 15px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
