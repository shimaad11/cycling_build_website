<template>
<v-app>
  
  <div class="container">
      <h3>Register Rider</h3>
       <form>
    <v-text-field
      v-model="license_no"
      :error-messages="nameErrors"
      :counter="10"
      label="License No"
      required
    
    ></v-text-field>

    <v-text-field
      v-model="first_name"
      :error-messages="nameErrors"
      :counter="10"
      label="First Name"
      required
  
    ></v-text-field>

    <v-text-field
      v-model="last_name"
      :error-messages="nameErrors"
      :counter="10"
      label="Last Name"
      required
     
    ></v-text-field>


  <v-text-field
      v-model="phone"
      :error-messages="nameErrors"
      :counter="10"
      label="Phone"
      required
     
    ></v-text-field>

      <v-select
      v-model="gender"
      :items="gender"
      :error-messages="selectErrors"
      label="Gender"
      required
    
    ></v-select>

    <v-text-field
      v-model="date_birth"
      :error-messages="nameErrors"
      :counter="10"
      label=" DOB "
       placeholder="Ex 01-01-2021"
      required
     
    ></v-text-field>



      <v-text-field
      v-model="place_birth"
      :error-messages="nameErrors"
      :counter="10"
      label=" Birth Place "
     
      required
     
    ></v-text-field>


     <v-textarea
      v-model="home_address"
      :error-messages="nameErrors"
      :counter="10"
      label=" Home Address "
      required
     
    ></v-textarea>


      <v-textarea
      v-model="work_address"
      :error-messages="nameErrors"
      :counter="10"
      label=" Work Address "
      required
     
    ></v-textarea>

    

     

    


   
    <v-select
      v-model="rider_type"
      :items="rider_type"
      :error-messages="selectErrors"
      label="Rider Type"
      required
    
    ></v-select>

     <v-text-field
      v-model="emirates_id"
      :error-messages="nameErrors"
      :counter="10"
      label=" Emirates ID "
      required
     
    ></v-text-field>

      

   
    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
  </div>

 
</v-app>
</template>


<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
    
    },

    data: () => ({

        license_no :'',
         first_name :'',
          last_name :'',
           phone :'',
           gender: ['male', 'female'],
           place_birth:'',
           home_address:'',
           work_address:'',
           rider_type:[ 'citizen_rider','children_citizen','gcc','born_uae','resident_rider','expat','amateur'],
           emirates_id:'',
           date_birth:'',
           //date_birth: new Date().toISOString().substr(0, 10),
             

    
    }),

    computed: {
    
    },

    methods: {
      submit () {
      
      },
      clear () {
        
      },
    },
  }
</script>
<style>

</style>