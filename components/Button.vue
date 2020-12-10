<template>
  <button class="button border-purple-500 hover:border-gray-500"><slot/></button>
</template>

<script>
export default {
    name: "Button"
}
</script>

<style scoped>
    .button {
        @apply border-2;
    }
</style>