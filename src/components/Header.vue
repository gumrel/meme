<script setup>
const emit = defineEmits(['openDrawer'])
defineProps({
  totalPrice: Number
})
</script>

<template>
  <header class="flex justify-between border-b border-slate-200 px-8 py-8">
    <RouterLink to="/">
      <div class="flex items-center gap-4">
        <img
          src="https://static-basket-01.wbbasket.ru/vol1/sellers/brands/34FE63CD84917C16.webp"
          alt="Logo"
          class="w-10"
        />
        <div>
          <h2 class="text-xl font-bold uppercase">Granulo.co</h2>
          <p class="text-slate-400">Онлайн магазин специй и приправ</p>
        </div>
      </div>
    </RouterLink>

    <ul class="flex items-center gap-10">
      <router-link to="/favorites">
        <li class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
          <img src="/cart.svg" alt="card" />
          <span>Корзина</span>
        </li>
      </router-link>
    </ul>
  </header>
</template>
