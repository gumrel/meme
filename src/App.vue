<script setup>
  import { ref, watch, provide, computed } from 'vue';

  import Header from './components/Header.vue';
  import Drawer from './components/Drawer.vue';

  /* Корзина (END) */
  const cart = ref([])

  const drawerOpen = ref(false)

  const totalPrice = computed(() => cart.value.reduce((i, item) => i + item.price, 0)) //помогает следить за вычесляемыс действием
  const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100))


  const closeDrawer = () => {
    drawerOpen.value = false
  }

  const openDrawer = () => {
    drawerOpen.value = true
  }

  const addToCart = (item) => {
    cart.value.push(item)
    item.isAdded = true
  }

  const removeFromCart = (item) => {
    cart.value.splice(cart.value.indexOf(item), 1)
    item.isAdded = false
  }

  watch(cart, () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  { deep: true }
)

  provide('cart', {
    cart,
    closeDrawer,
    openDrawer,
    addToCart,
    removeFromCart
  })

  /* Корзина (START) */
</script>


<template>

  <Drawer 
  v-if="drawerOpen" 
  :totalPrice="totalPrice" 
  :vatPrice="vatPrice" 
  @createOrder="createOrder"
  />

  <div class="bg-white w-4/5 m-auto  rounded-xl shadow-xl mt-20">
    <Header :totalPrice="totalPrice" @open-Drawer="openDrawer" />


    <div class="p-10">
      <router-view></router-view>
    </div>

</div>
</template>



