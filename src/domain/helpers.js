

export class Helpers 
{
    static async hasEmptyValues(entity, exceptions) 
    {

        var emptyFields = new Array();

        exceptions = exceptions || [];

        for (var key in entity) {
            if (exceptions.indexOf(key) == -1) {
                if (entity[key] == null || entity[key] == undefined || entity[key] === '') {
                    emptyFields.push(key);
                }
            }
        }

        return (emptyFields.length == 0 ? false : true);
    };
    
}