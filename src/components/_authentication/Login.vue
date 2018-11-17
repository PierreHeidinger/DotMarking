
<template>
        
    <div class="logueo">
    
        <div class="row"><br>
            <div class="col m8 s8 offset-m2 offset-s2 center">
                <h4 class="truncate bg-card-user">
                    <img src="https://cdn3.iconfinder.com/data/icons/happily-colored-snlogo/128/medium.png" alt="" class="circle responsive-img">
                    <div class="row login">
                        <h4>Inicia sesión.</h4>
                        <div class="col s12">
                            <div class="row">
                                <div class="input-field col m12 s12">
                                <i class="material-icons iconis prefix">account_box</i>
                                <input id="icon_prefix" type="text" v-model="user.user" class="validate">
                                <label for="icon_prefix">Nombre o Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col m12 s12">
                                <i class="material-icons iconis prefix">enhanced_encryption</i>
                                <input id="password" type="password" v-model="user.password" class="validate">
                                <label for="password">Contraseña</label>
                                </div>
                            </div>
                            <div class="row">
                                <button class="btn waves-effect waves-light" type="submit" v-on:click="login()" >Iniciar sesión!</button>
                            </div>
                        </div>
                    </div>
                </h4>
            </div>
        </div>
        <loader v-if="showModal" @close="showModal = false">
                <h3 slot="header">custom header</h3>
        </loader>
    </div>
    
    
</template>

<style>

    .main {
        flex: 1 0 auto;
    }
    .brand-logo >img {
        width: 50px;
        height: 50px;
        margin-top: 5px;
    }
    .logueo {/* PARALLAX */
        height: 635px!important;
    }
    /* Menu - profile */
    .bg-card-user {
        background: rgba(0,77,64,.5);
        padding: 15px 0;
    }
    .truncate >img {
        width: 180px;
        margin-top: 6px;
        margin-bottom: 6px;
    }
    .login {
            border: 1px solid #FFF;
            margin: 0 auto;
            background-color: rgba(255,255,255,.7);
            padding: 20px;
        }
</style>

<script>

import { User } from '../../models/user'
import { Authentication } from '../../services/authentication'
import { Helpers } from '../../domain/helpers'

import Loader from '../../shared/loader.vue'

export default {
  name: 'Login',
  components :
  {
      Loader
  },
  data : () =>
  {
      return {
        user : new User(),
        showModal : false
      }
  },
  methods : 
  {
      login : async function()
      { 
            this.user = {
                company:'1234',
                user:'Pierre',
                password:'123456'
            };
        
        this.showModal = true;
        let hasEmptyValues = await Helpers.hasEmptyValues(this.user,[]);

        if(hasEmptyValues) throw new Error('Todos los campos son oblogatorios')

        try
        {
            const token_authentication = await new Authentication().login(this.user);

            if (token_authentication) this.$router.push({'name' : 'Home'})

        }catch(err)
        {
            console.error(err)
        }finally
        {
            this.showModal = false;
        }
             
      }
  },
  beforeRouteEnter : async function (to, from, next) 
  {
      try
      {
        var isValid = await new Authentication().verifyStatusToken();

        if (!isValid)
        {
            next()
        }else
        {
            window.location.replace('/')
        }
       
      }catch(err)
      {
          console.error(err)

      }
  }
}
</script>