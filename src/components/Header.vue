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
        <img src="/heart.svg" alt="Logo" class="w-10" />
        <div>
          <h2 class="text-xl font-bold uppercase">MEME</h2>
          <p class="text-slate-400">Банк лучших мемов</p>
        </div>
      </div>
    </RouterLink>

    <ul class="flex items-center gap-10">
      <router-link to="/favorites">
        <li class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
          <img src="/heart.svg" alt="card" />
          <span>Избранное</span>
        </li>
      </router-link>
    </ul>
  </header>
</template>
