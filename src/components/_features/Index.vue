
<template>
 

      <div class="row body">
        
        <div class="container">

            <div class="col s12 m4" v-if="permiso">
                
                <div class="card">
                  <div class="card-image">
                    <img src="https://materializecss.com/images/office.jpg">
                    <span class="card-title"></span>
                  </div>
                  <div class="card-action">
                    <a v-on:click="openMarkPointModal()">Mark Point</a>
                  </div>
                </div>  
                          
            </div>

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

import MarkPoint from './MarkPoint'

export default {
  name: 'Index',
  data : function ()
  {
    debugger;
    return {
      permiso : false
    }
  },
  methods : {
    openMarkPointModal : function()
    {
        this.$modal.show(MarkPoint, {
                            text: 'This text is passed as a property'
                          }, {
                            adaptive: true
                          })
    }
  },
  created : function ()
  { 
    this.permiso = true;
  }
}
</script>