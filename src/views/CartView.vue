<template>

    <div class="container">
        <Cart/>
    </div>
    
</template>

<script>
    import Cart from '@/components/Cart.vue'

    export default{
        name : 'CartView',
        components:{
            Cart
        }
    }

</script>