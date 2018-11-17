
<template>
 
 <div>
   <div class="navbar-fixed">
      <header>
          <nav style="position:fixed">
            <div class="nav-wrapper teal lighten-2">
              <a href="#!" class="brand-logo">
                <div class="container logo">
                  <img src="../../assets/logoApp.png" width="50" alt="">
                </div>
              </a>
              <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
              <ul class="right hide-on-med-and-down">
                <li><a>Dot marking</a></li>
                <li><a>Justifications</a></li>
                <li><a>Reports</a></li>
                <li><a v-on:click="destroySession()">Exit</a></li>
              </ul>
            </div>
          </nav>
        </header>
    </div>
    <ul class="sidenav" id="mobile-demo">
            <li><a>Dot marking</a></li>
            <li><a>Justifications</a></li>
            <li><a>Reports</a></li>
            <li><a v-on:click="destroySession()" >Close Session</a></li>
      </ul>
 </div>
 
</template>

<style>

.logo
{
  margin-top:5px;
}
</style>


<script>


export default {
  name: 'Header',
  methods : {
    destroySession : function()
    {
      localStorage.setItem('token_auth',null);
      this.$router.push({'name' : 'Login'})
    }
  },
  created : function ()
  {
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
       
  }
}
</script>