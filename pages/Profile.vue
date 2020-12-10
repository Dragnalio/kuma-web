<template>
  <div>
      <img :src="link" alt="">
      {{ name }} + {{ email }}
      <div v-for="variable in text" :key="variable" class="">
          {{variable}}
      </div>
      <button style="background: black; color: white" @click="onClick">GAMAO</button>
      <Button>tombol ini hak milik kuma</Button>
  </div>
</template>

<script>
export default {
    name: "Profile",
    data () {
        return {
            name: 'user',
            email: 'example@example.example',
            text: ["a", "b", "c"],
            links: [
                "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
                "https://images.unsplash.com/photo-1607600578748-2a907bd6b632?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                ],
            link: "",
            idx: 0
        }
    },
    mounted () {
        this.link = this.links[this.idx]
    },
    methods: {
        onClick(){
            this.idx++
            this.link = this.links[this.idx%2]
        }
    }
}
</script>

<style scoped>

</style>