<template>
  <div class="home">
    <Product>
      
    </Product>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '@/components/Product.vue'

export default {
  name: 'ProductView',
  components: {
    Product
  },
  data(){
    return{
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
    }
  }
}
</script>
