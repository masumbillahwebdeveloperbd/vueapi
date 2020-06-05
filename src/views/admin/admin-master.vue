<template>
    <div>

<div class="wrapper">

  <!-- Navbar -->
  <navbar/>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  
<sidebar/>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <router-view></router-view>
  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
    <div class="p-3">
      <h5>Title</h5>
      <p>Sidebar content</p>
    </div>
  </aside>
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
      Anything you want
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2014-2019 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
  </footer>
</div>
<!-- ./wrapper -->        
    </div>
</template>
<script>
import adminLte from 'admin-lte'
import('../../../node_modules/admin-lte/dist/css/adminlte.min.css')
import('../../../node_modules/admin-lte/dist/js/adminlte.min.js')
import('../../../node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css')
import sidebar from './sidebar.vue'
import navbar from './navbar.vue'

export default {
  components:{
    sidebar:sidebar,
    navbar:navbar
  },
    
    mounted(){
        var access_token=localStorage.getItem('AToken')
        if(!access_token){
            this.$router.push('/admin-login')
        }
    }
}
</script>script