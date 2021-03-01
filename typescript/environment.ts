export const environment={
    production:true,
    
    staticsUrl:"http://127.0.0.1:5500/statics/",
  
    get currentCountry(){
        switch (window.location.hostname) {
            case "www.avon.co":
                return "co"
                break;
            case "www.avon.com.ec":
                return "ec"
            case "www.avon.com.pe":
                return "pe"    
            default:
                break;
        }
    },

}
