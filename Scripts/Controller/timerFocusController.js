class timerFocusController{

    //buttons
    pomodoro = document.querySelector('#pomodoro');
    pause = document.querySelector('#pause');
    start = document.querySelector('#start_button');

    //var values
    #minute = 25;
    #second = 0;
    #minuteDisplay;
    #secondDisplay;

    //mode
    #pomodoroMode = true;
    #endMode = false;

    //printScream
    #timerDisplay = document.querySelector('#timer_display');
    #isPaused = false;
    #cont;

    //sound effects
    #clickEffect = document.querySelector('#click_sound');
    

    

    pomodoroButton(){

        this.pomodoro.addEventListener('click', ()=>{
            
            this.pomodoroStartValue();
            this.#pomodoroMode = true;
        
        });
        
    }

    pauseButton(){

        this.pause.addEventListener('click', ()=>{
            
            this.pausaStartValue();
            this.#pomodoroMode = false;

        });
        

    }

    pomodoroStartValue(){

        this.#minute = 25;
        this.#second = 0;
        this.display(this.#minute, this.#second);
        this.stopCont();
        this.pomodoro.style = 'background-color: rgba(0, 0, 0, 0.35)'
        this.pause.style = 'background-color: rgba(0, 0, 0, 0.5)'
    }

    pausaStartValue(){

        this.#minute = 5;
        this.#second = 0;
        this.display(this.#minute, this.#second);
        this.stopCont();
        this.pause.style = 'background-color: rgba(0, 0, 0, 0.35)'
        this.pomodoro.style = 'background-color: rgba(0, 0, 0, 0.5)'
    }

    formatTimer(timeValue){

        return timeValue < 10 ? `0${timeValue}`:`${timeValue}`;

    }

    display(minuteValue,secondValue){

        this.#minuteDisplay = this.formatTimer(this.#minute);
        this.#secondDisplay = this.formatTimer(this.#second)

        this.timerDisplay = `${this.#minuteDisplay}:${this.#secondDisplay}`;

    }


    contTimer(){

        this.start.addEventListener('click', ()=>{

            this.#clickEffect.play()
            
            let timeValue = this.#minute * 60;

            if(this.#endMode == true){

                this.reset();
                
                
            }else if(this.#isPaused == false){

                this.start.innerHTML = "pause"

                this.#isPaused = true;

                this.#cont = setInterval(()=>{

                    timeValue --;
                            
                    if(this.#second == 0){

                        this.#minute --;
                        this.#second = 59;
                    }if(timeValue == 0){

                        this.#endMode = true;
                        this.stopCont();
                        this.#minute = 0;
                        this.#second = 0;
                        this.start.innerHTML = "Reset";

                    }

                    this.display(this.#minute, this.#second);

                    this.#second --;          

                },1000);

            }else {

                this.stopCont()

            }


        })
         
    }

    reset(){


        this.#endMode = false;
        if (this.#pomodoroMode == true){

            this.pomodoroStartValue();
        

        } else {

            this.pausaStartValue();

        }


    }

    stopCont(){

        clearInterval(this.#cont)
        this.#isPaused = false
        this.start.innerHTML = "iniciar"


    }


    get timerDisplay(){

        return this.#timerDisplay.innerHTML;

    }

    set timerDisplay(value){

        this.#timerDisplay.innerHTML = value;

    }

    get startTimeValue(){

        return this.#minute;

    }

    set startTimeValue(value){

        this.#minute = parseInt(value)

    }
}

