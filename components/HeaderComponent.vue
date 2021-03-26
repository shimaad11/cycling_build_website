<template>
  <v-toolbar>
    <v-container>
      <v-row>
        <v-col> <h3>POS</h3> </v-col>
        <v-col>
          <v-btn depressed>
            <NuxtLink to="/">Home</NuxtLink>
          </v-btn>
          <v-btn depressed >
            <NuxtLink to="/rider/register">Register</NuxtLink>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style>
</style>