export class environmentConstants {
    
    private static readonly _APIBaseUrl = "http://jsonplaceholder.typicode.com/todos"
    private static readonly _APIBaseUrl_OP1 = "https://v6.exchangerate-api.com/v6/1fc80820c72b0163bc9c7536/latest/USD"
  
    public static get APIBaseUrl() {
        return environmentConstants._APIBaseUrl;
    }
    public static get APIBaseUrl_OP1() {
        return environmentConstants._APIBaseUrl_OP1;
    }

}