<template>
  <section class="rounded-3" style="background-color: rgb(253, 214, 100) ;">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col">
          <p><span class="h2">Shopping Cart </span></p>

          <div class="card mb-4">
            <div class="card-body p-4 vw-100">
              <div class="row align-items-center">
                <div class="col-md-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                    class="img-fluid"
                    alt="Generic placeholder image"
                  />
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Name</p>
                    <p class="lead fw-normal mb-0">iPad Air</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Quantity</p>
                    <p class="lead fw-normal mb-0">1</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Price</p>
                    <p class="lead fw-normal mb-0">$799</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="small text-muted mb-4 pb-2">Total</p>
                    <p class="lead fw-normal mb-0">$799</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-5">
            <div class="card-body p-4">
              <div class="float-end">
                <p class="mb-0 me-5 d-flex align-items-center">
                  <span class="small text-muted me-2">Order total:</span>
                  <span class="lead fw-normal">$799</span>
                </p>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-end p-3">
              <router-link class="btn btn-success me-2" to="/">Continue shopping</router-link>
              <button type="button" class="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "cart-items",
};
</script>
