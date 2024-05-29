<script setup>
  import card from './card.vue';

  defineProps({
    items: Array,
    isFavorites: Boolean,
  })

  const emit = defineEmits(['addToFavorite', 'addToCart'])

  
</script>

<template>

    <div class="grid grid-cols-4 gap-5" v-auto-animate>
        <card
            v-for="item in items"
            :key="item.id"
            :id="item.id"
            :price="item.price"
            :title="item.title"
            :imageUrl="item.imageUrl"
            
            :onClickFavorite="isFavorites ? null : () => emit('addToFavorite', item)"
            :onClickAdd="() => emit('addToCart', item)"
            :isFavorite="item.isFavorite"
            :isAdded="item.isAdded"
        />
      </div>

</template>