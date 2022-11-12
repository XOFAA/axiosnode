
const axios = require('axios')
let endereco;

module.exports = class indexControllers{

 
    static async buscarCep(req,res){
        
       let cep=req.body.cep
       let url="https://viacep.com.br/ws/"+cep+"/json/"
       endereco=await axios.get(url)
        .then(function (response) {
        
          return response.data
        
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        res.render('buscarCep',{
            endereco:endereco
        })
        console.log(endereco)
        
    }
   

    
}