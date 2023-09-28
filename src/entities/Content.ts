import Video from "./Video";

export default class Content{
    constructor(private el: HTMLElement = document.createElement("div"),
    private videos: Video[] = [],
    private isActive: boolean = false
    ){}
       
        set active(val: boolean){
            this.isActive = val
        }

        init(){}
        render(){}

    
}