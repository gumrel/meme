<script setup>
import DrawerHead from './DrawerHead.vue'
import CartListitem from './CartListitem.vue'
import InfoBlock from './InfoBlock.vue'

import { ref, inject, computed } from 'vue'
import axios from 'axios'

const props = defineProps({
  totalPrice: Number,
  vatPrice: Number
})

const { cart, closeDrawer } = inject('cart')

const isCreating = ref(false)
const orderId = ref(null)

const createOrder = async () => {
  try {
    isCreating.value = true
    const { data } = await axios.post('https://c77f5a0ecc3d7832.mokky.dev/orders', {
      items: cart.value,
      totalPrice: props.totalPrice.value
    })

    cart.value = []

    orderId.value = data.id
  } catch (err) {
    console.log(err)
  } finally {
    isCreating.value = false
  }
}

const cartIsEmpty = computed(() => cart.value.length === 0)
const buttonDisabled = computed(() => isCreating.value || cartIsEmpty.value)
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
    <DrawerHead />

    <div v-if="!totalPrice || orderId" class="flex h-full items-center">
      <InfoBlock
        v-if="!totalPrice && !orderId"
        title="Корзина пустая"
        description="Добавьте хотя бы одну пару кроссовок, чтобы оформить заказ"
        imageUrl="/package-icon.png"
      />

      <InfoBlock
        v-if="orderId"
        title="Заказ оформлен"
        :description="`Ваш заказ #${orderId} скоро будет передан курьерской службе`"
        imageUrl="/order-success-icon.png"
      />
    </div>

    <CartListnpitem />
    <div v-if="totalPrice" class="flex flex-col gap-4 my-7">
      <div class="flex gap-2">
        <span>Итого:</span>
        <div class="flex-1 border-b border-dashed border-black"></div>
        <span>{{ totalPrice }}</span>
      </div>

      <div class="flex gap-2">
        <span>Налог: 5%</span>
        <div class="flex-1 border-b border-dashed border-black"></div>
        <span>{{ vatPrice }}</span>
      </div>

      <button
        :disabled="buttonDisabled"
        @click="createOrder"
        class="disabled:bg-slate-300 bg-lime-500 w-full rounded-xl py-3 mt-4 text-white hover:bg-lime-600 transition active:bg-lime-700 cursor-pointer"
      >
        Оформить заказ
      </button>
    </div>
  </div>
</template>
