
<template>
 
 <div>

      <nav>
        <div class="nav-wrapper blue lighten-2">
          <a class="brand-logo"> &nbsp;&nbsp;Include marking now </a>
        </div>
      </nav>

      <div class="container">
         <br>
         <span>Today is : {{ nameDaysOfWeek[dateNow.getDay()] + ' ' + dateNow.getDate() + ' de ' + monthOfYear[dateNow.getMonth()] }}</span> 

         <Clock :blink="true" />


      </div>

     
    
 </div>

</template>

<style>

 .body
 {
   margin-top: 30px;
 }


  main {
    flex: 1 0 auto;
  }

</style>


<script>

import Clock from 'vue-digital-clock'
import Alert from '../../shared/alert.vue'

export default {
  name: 'MarkPoint',
  components :
  {
    Clock
  },
  data : function ()
  {
    return {
        monthOfYear: new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"),
        nameDaysOfWeek : new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"),
        dateNow : new Date()
    }
  },
  methods : 
  {

  },
  created : function ()
  { 
      
  }
}
</script>