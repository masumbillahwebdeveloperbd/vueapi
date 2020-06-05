<template>
  <div class="mt-5">
    <div class="card m-auto w-50">
        <div class="card-header">
            <h2>User Login</h2>
        </div>
      <div class="card-body">
        <div class="form-group">
          <label for="userEmail">Email address</label>
          <input
            type="email"
            class="form-control" v-model="user.email"
            id="userEmail"
            aria-describedby="emailHelp"
          />
          
        </div>
        <div class="form-group">
          <label for="userPassword">Password</label>
          <input type="password" class="form-control" v-model="user.password" id="userPassword" />
        </div>
        <button type="submit" @click="userLogin()" class="btn btn-primary">Submit</button>
      </div>
      <div class="card-footer">
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      user:{
        email:null,
        password:null
      }
    }
  },
  methods:{
    userLogin(){
        axios.post('/login', { 
        email: this.user.email,
        password: this.user.password
      })
      .then(response=> {
       localStorage.setItem('AToken',response.data.access_token);
       this.$router.push('/dashboard')
        console.log(response);
      })
      .catch(error=> {
        console.log(error);
      });
        }
  },
  
  }
  

</script>>