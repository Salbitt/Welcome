class AlertService
{
    constructor(){
        this.alerts = {};
    }
}
addAlert(symbol, alertText)
{
    this.alerts[symbol]= alertText;
    this.renderAlerts();
}
removeAlert(symbols)
{
    delete this.alerts[symbol];
}
renderAlerts(){}

const AlertService = new AlertService();

const MyComponent{

   constructor(thing)=>{
        this.ComponentId = Symbol(thing);
    }
errorHandler(msg){
    AlertService.addAlert(this.ComponentId, msg);
    setTimeout(()=>{
        AlertService.removeAlert(this.ComponentId);
        console.log('removed alert', this.ComponentId);
    },5000);
}

