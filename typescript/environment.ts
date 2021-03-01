export const environment={
    production:true,
    
    staticsUrl:"https://cdn.jsdelivr.net/gh/pacificosas/Avon-MAS-stickyFooter@1/assets/",
  
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
