
export const state = () => ({
    counter: 0,
    employes: [],

   
  })
  
  export const mutations = {
  
    setEmploye(state,payload)
    {
        state.employes=payload
    }
  }


  export const actions = {
  

    async getEmployes(context,data){

        let emp=

            [
                {
                    "id": 1,
                    "name": "Ahmead",
                    "description": false,
                    "position": [
                        6,
                        "Marketing and Community Manager"
                    ],
                    "img_url": "/web/content/ir.attachment/612/datas/image"
                },
                {
                    "id": 2,
                    "name": "Alaa jaber",
                    "description": false,
                    "position": [
                        5,
                        "Human Resources Manager"
                    ],
                    "img_url": "/web/content/ir.attachment/613/datas/image"
                },

                {
                    "id": 3,
                    "name": "Alaa jaber",
                    "description": false,
                    "position": [
                        5,
                        "Human Resources Manager"
                    ],
                    "img_url": "/web/content/ir.attachment/613/datas/image"
                },

                {
                    "id": 4,
                    "name": "Alaa jaber",
                    "description": false,
                    "position": [
                        5,
                        "Human Resources Manager"
                    ],
                    "img_url": "/web/content/ir.attachment/613/datas/image"
                }
        ];


          var data = JSON.stringify({
            "name": "",
            "description": "",
            "position": ""
          });

          var config = {           
            headers: { 
              'Content-Type': 'application/json', 
              'Cookie': 'session_id=4f8d9a44dab8178d58160dcf7f433da86a41d714'
            },
            data : data
          };

          this.$axios
          .$post("/api/boarders",config)
          .then((res) => {
            console.log(res)
            context.commit("setEmploye",res.result)
          })
          .catch((e) => console.log(e));

          // Get Citi
        /*  await this.$axios.$get('/api/2/cities')
          .then(res => console.log(res))
          .catch(err => console.log(err))
          */
     
    }
  }


  export const getters = {
   
  }
  

