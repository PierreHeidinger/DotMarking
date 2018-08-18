import rp from 'request-promise'
// import  * as configurationApi from '../../config/api.config'
const configurationApi = require('../../config/api.json')

export class Service
{
    constructor()
    {      
        this.headers = 
        {
            "Content-Type" : "application/json",
            "x-access-token" : localStorage.getItem('token_auth') || ""
        }
        this.uri = configurationApi.BASE_URL_API;
    };

    async get(url)
    {
        const type = 'GET';

        var options = 
        { 
            uri : this.uri + url,
            method: type,
            headers : this.headers,
            json : true             
        };
        
        return await rp(options);
    };

    async post(url,body)
    {
        const type = 'POST';

        var options = 
        { 
            uri : this.uri + url,
            method: type,
            headers : this.headers,
            body :body,
            json : true             
        };

        return await rp(options);

    };
}