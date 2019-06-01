<template>
      <div>


<v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="message in messages" v-bind:key="message.id"
      color="red lighten-2"
      large
    >
      <template v-slot:opposite>
        <span>{{ message.created_at }}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-text class="message">
          {{ message.body }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>

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

<style lang="scss">
.v-card__text.message {
  padding: 6%;

width: 100%;

line-height: 3em;

text-align: left;

font-size: 22px;
}
</style>