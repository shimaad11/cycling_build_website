<template>
  <v-container>
    <v-row>
      <v-col>
      
        <p>
          
        </p>
        <v-btn elevation="2" @click="GetEmployes"> Get Employes</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="employe in employes" :key="employe">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{ employe.name }}</div>
              <v-list-item-title class="headline mb-1">
                {{ employe.position[0] }} , {{ employe.position[1]  ,  }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ employe.description }}</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text> View </v-btn>
          </v-card-actions>
        </v-card>
      </v-col></v-row
    ></v-container
  >
</template>
     

<script>
export default {
  computed: {
    employes() {
      return this.$store.state.employes;
    },
  },
  methods: {
    GetEmployes() {
      this.$store.dispatch("getEmployes");
    },
  },
};
</script>

<style>
</style>