class calcController{

    constructor(){
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._displayTimeEl = document.querySelector("#hora");
        this._displayDateEl = document.querySelector("#data");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    };

    initialize(){
        this.setDisplayDateTime();
        setInterval(() => {
            this.setDisplayDateTime();
        },1000);

    }

    addEventListenerAll(element,events, fn){
        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn, false);
        });
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');
        buttons.forEach((btn,index) =>{
            this.addEventListenerAll(btn,'click drag', e =>{
                console.log(btn.className.baseVal.replace("btn-",""));
            });
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e=>{
                btn.style.cursor = "pointer";
            });
        });
            
        
    }

    //GETTERS AND SETTERS

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }
    
    //displayCalcEl
    get displayCalc(){ 
        this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    //displayTimeEl
    get displayTime(){ 
        this._displayTimeEl.innerHTML;
    }

    set displayTime(value){
        this._displayTimeEl.innerHTML = value;
    }

    //displayDateEl
    get displayDate(){ 
        this._displayDateEl.innerHTML;
    }

    set displayDate(value){
        this._displayDateEl.innerHTML = value;
    }

    //Current Date
    get currentDate(){ 
        return new Date();
    }

    set currentDate(value){
        this._currentDate.innerHTML = value;
    }
}
