<template>
    <div>
       <div class="container">
           <NavBar/>
           
           <router-view></router-view>
       </div>
    </div>
</template>
<script>
import navBar from './navbar.vue'
export default{
    components:{
        NavBar:navBar
    }
}
</script>