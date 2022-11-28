const Querys = require("./o1.js");
class GetAll extends Querys{
        constructor(req,res,models){
                super(req,res,models);
        }

        conLog2(){
                console.log(this.req,this.res,this.models)
                return 0;
        }
}

const countriesGET = new GetAll("req","res","next");

console.log("countriesGET",countriesGET)
console.log("fun()",countriesGET.conLog2());
console.log("fun()",countriesGET.conLog1());
