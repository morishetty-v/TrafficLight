export type Color = "red" | "green" | "yellow"

export function timerAtNextSecond (time:number) : number {
    if (time == 1) {return 20} else {return (time - 1)}
   
}

export function colorAtNextSecond (color:Color,time:number) : Color {
    switch (color) {
        case "red":
            return (time===1)?"green":"red" ;
        case "yellow":
            return (time===1)?"red":"yellow" ;
        case "green":
            return (time===1)?"yellow":"green" ;
    }
}

