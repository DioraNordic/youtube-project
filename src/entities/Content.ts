import Video from "./Video";
//import Menu from "./Menu"

export default class Content{
    constructor(private el: HTMLElement = document.createElement("div"),
    private videos: Video[] = [],
    //private menu: Menu[],
    private isActive: boolean = false
    ){}
       
        set active(val: boolean){
            this.isActive = val
        }

        init(){}
        render(){}

    
}