export type TrafficLightColor = "red" | "green" | "yellow"

export class TrafficLight {
    timeGreenToYellow: number;
    timeYellowToRed: number;
    timeRedToGreen: number;
    color: TrafficLightColor;

    timerAtNextSecond (time:number, color:TrafficLightColor) : number {
        if (time == 1) 
            if (color === "red")
                {return this.timeRedToGreen}
            if (color === "yellow")
                {return this.timeYellowToRed}
            if (color === "green")
                {return this.timeRedToGreen}
        else 
            {return (time - 1)}
    }

    colorAtNextSecond (color:TrafficLightColor,time:number) : TrafficLightColor {
        switch (color) {
            case "red":
                return (time===1)?"green":"red" ;
            case "yellow":
                return (time===1)?"red":"yellow" ;
            case "green":
                return (time===1)?"yellow":"green" ;
        }
    }
    
}
 
