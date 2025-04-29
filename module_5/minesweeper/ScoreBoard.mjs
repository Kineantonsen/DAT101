"use strict"
//Lag en klasse med navnet TScoreBoard
// Klassen har tre private sprites: 
//øvre venstre hjørne (antall miner). TSpritenumber
// øvre høyre hjørne (tid). TSpritenumber
// Øvre midten (smiley). TSpriteButton
//konstruktørens parameter er : aSpriteCanvas
// Klassen trenger en draw metode som tegner alle sprites
import libSprite from "../../common/libs/libSprite_v2.mjs";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import { gameLevel, newGame, SpriteInfoList } from "./Minesweeper.mjs";

export class TScoreBoard{
    #Mines;
    #Time;
    #Smiley;
    #hndTime;
    #spcvs;

    constructor (aSpriteCanvas){
        this.#spcvs = aSpriteCanvas;
        const pos = new lib2d.TPoint(112, 22);
        this.#Mines = new libSprite.TSpriteNumber(aSpriteCanvas,SpriteInfoList.Numbers, pos);
        this.#Mines.justify = libSprite.ESpriteNumberJustifyType.Right;
        this.#Mines.digits = 3;
        this.#Mines.value = gameLevel.Mines;

        pos.x = aSpriteCanvas.canvas.width - 70;
        this.#Time = new libSprite.TSpriteNumber(aSpriteCanvas, SpriteInfoList.Numbers, pos);
        this.#Time.justify = libSprite.ESpriteNumberJustifyType.Right;
        this.#Time.digits = 3;
        this.#Time.value = 0;
        
        pos.x = (aSpriteCanvas.canvas.width / 2) - (SpriteInfoList.ButtonSmiley.width / 2);
        this.#Smiley = new libSprite.TSpriteButton(aSpriteCanvas,SpriteInfoList.ButtonSmiley, pos);
        this.#Smiley.onMouseDown = this.onSmileyMouseDown; //Dette må være en pil-funksjon
        this.#Smiley.onMouseUo = this.onSmileyMouseUp;//Dette må være en pil-funksjon
        this.#Smiley.onClick = this.onSmileyClick;//Dette må være en pil-funksjon

        this.#hndTime = setInterval(this.#increaseTime, 1000);
    
    }
    draw(){
        this.#Mines.draw();
        this.#Time.draw();
        this.#Smiley.draw();
    }

    get Smiley(){
        return this.#Smiley;
    }

    //Vi må lage denne som pil-funksjon for å kunne bruke this
    #increaseTime = () => {
        if(this.#Time.value < 999){
            this.#Time.value++;
        }else{
            his.#Time.value = 999;  
        }
        
    };

    stopTime(){
        clearInterval(this.#hndTime);
    }

    onSmileyMouseDown = () => {
        this.#Smiley.index++;
    };

    onSmileyMouseUp = () => {
        this.#Smiley.index--;
    };

    onSmileyClick = () => {
        this.#Smiley.index = 0;
        newGame();
    };

    reset(){
        clearInterval(this.#hndTime);
        this.#Time.value = 0;
        this.#Mines.value = gameLevel.Mines;

        const pos = new lib2d.TPoint(112, 22);

        pos.x = (this.#spcvs.canvas.width / 2) - (SpriteInfoList.ButtonSmiley.width / 2);
        this.#Smiley.x = pos.x;
        
        pos.x = this.#spcvs.canvas.width - 70;
        this.#Time = new libSprite.TSpriteNumber(this.#spcvs, SpriteInfoList.Numbers, pos);
        this.#Time.justify = libSprite.ESpriteNumberJustifyType.Right;
        this.#Time.digits = 3;
        this.#Time.value = 0;

        this.#hndTime = setInterval(this.#increaseTime, 1000);
    }

    //lag en getter og en setter for mineCounter, bruk #Mines.value
    get mineCounter(){
        return this.#Mines.value;
    }

    set mineCounter(aValue){
        this.#Mines.value = aValue;
    }
} //end of class tScoreboard