// Class main


class Querys {
        constructor(req,res,models){
                this.req = req;
                this.res = res;
                this.models = models;
        }
        conLog(){
                console.log(this.req);
                return 0;
        }

}
module.exports = Querys;

