import { Service } from './service'

export class Authentication extends Service
{
    async login(user)
    {
        const auth = await this.post('api/login',user);
        
        if(auth.token_auth) localStorage.setItem('token_auth',auth.token_auth);

        return true;
    };

    async verifyStatusToken()
    {
        let isAuthenticated = false

      try
      {
        const response = await this.get('api/verifyStatus');

        if(response.auth) isAuthenticated  = true;

        return isAuthenticated;

      }catch(err)
      {
        return isAuthenticated;
      }
        
    };
}