<template>
      <div>
        <article v-for="message in messages" v-bind:key="message.id">{{ message.body }}</article>
      </div>
</template>

<script>
export default {
    name : 'Messages',
    props : {
      messages : Object
    }
}
</script>