//child component 
@Output()
addEvent:EventEmitter<number>=new EventEmitter<number>();
this.addEvent.emit(z)

//on parent component
<app-child (addEvent)="setZ($event)"></app-child>
setZ(mes:number):void {
    this.z=msg;
}