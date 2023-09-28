import Video from "./Video";

export default class Content{
    constructor(
    private videos: Video[] = [],
    private isActive: boolean = false ,
    private readonly el: HTMLElement = document.createElement("div"),
    ){}

    get videoList(){
        return this.videos
    }
       
        set active(val: boolean){
            this.isActive = val
        }

        get element (){
            return this.el
        }

        init(){}
        render(){
            // this.el.classList.add("category")

            // const icon = document.createElement("div")
            // const name = document.createElement("div")

            

            // this.el.appendChild(icon)
            // this.el.appendChild(name)
            
        }

    
}