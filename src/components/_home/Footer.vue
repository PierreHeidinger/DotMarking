
<template>
 
 <footer class="page-footer">
      
      <div class="footer-copyright">
        <div class="">
        © {{ new Date().getFullYear() }} Copyright Pierre Boronda Heidinger
        </div>
      </div>
    </footer>


</template>

<style>

footer.page-footer {
  padding: 16px 40px;
  color: #9e9e9e;
  background-color: #424242;
}

@media only screen and (max-width: 480px) {
  footer.page-footer {
    padding: 16px 10px;
  }
}

footer a {
  color: #9e9e9e;
}


footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  color: white;
}


</style>


<script>
export default {
  name: 'Footer',
  created : function ()
  {
  }
}
</script>