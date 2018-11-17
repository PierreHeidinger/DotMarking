
<template>
   
   <div>   

    <Header></Header> 

    <!-- content -->
    <div class="row customRow"> 
      <main class="mdl-layout__content"> 
       
        <Index></Index>

      </main>
    </div> 
    <!-- content -->

    <Footer></Footer> 

   </div> 
   
</template>

<style>
.color-primary {
  background-color: rgb(103,58,183);
}

.color-primary--dark {
  background-color: rgb(81,45,168);  
}

.color-secondary {
  background-color: rgb(255,64,129);
}

.tab-bar {
  height: 65px;
}

.layout__tab {
  height: 64px;
  line-height: 64px;
  margin: 25px;
  font-size: 13px;
  color: #fff;
  text-transform: uppercase;
}

.layout__tab.is-active {
  border-bottom: 5px solid;
  padding-bottom: 21px;
  width: 100%;
}

.testimonials {
  display: inline-flex;
}

.testimonials .section__text {
  width: 70%;
}

.section__play-btn {
  height: 100%;
  min-height: 250px;
  background-color: #b2dfdb !important;
}

.section__play-btn i {
  font-size: 60px;
  color: #fff;
  padding: 95px 104px;
}

main {
  flex: 1 0 auto;
}


</style>


<script>

//Components
import Header from './Header'
import Footer from './Footer'
import Index from '../_features/Index'

export default {
  name: 'Home',
  components : {
    Header,
    Footer,
    Index
  },
  data : () =>
  {
      return {
        nombre : ''
      }
  },
  methods : {
      
  }
}
</script>