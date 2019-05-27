<template>
      <div>


<v-timeline>
    <v-timeline-item
      v-for="message in messages" v-bind:key="message.id"
      color="red lighten-2"
      large
    >
      <template v-slot:opposite>
        <span>{{ message.created_at }}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-text>
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