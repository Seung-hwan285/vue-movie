export default {




    actions:{


        async getMovie({commit},options){
            if(options.title){
                console.log(options.title);
            }
        }
    }


}