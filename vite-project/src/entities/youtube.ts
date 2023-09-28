import Menu from "./Menu"

export default class Youtube{
    constructor(
        private readonly appElement: HTMLElement | null,
        private readonly menu = new Menu(),
        private readonly menuElement = document.createElement("div")

    ){

    if(!appElement){
    this.appElement = document.createElement("div")
    }
    this.init()
 }

    init(){
        this.appElement?.classList.add('youtube')
        this.menu.element.classList.add('menu')
        this.menuElement.classList.add('menu-content')

        this.appElement?.appendChild(this.menu.element)
        this.appElement?.appendChild(this.menuElement)

        this.menu.mocker()

        this.render()
    }

    render(){
        this.menu.render()
        this.showContent()
    }
    
    private showContent(){
        const menu = this.menu.activeContent
        const videos = menu?.videoList ?? []

        const allVideos = document.createElement('div')

        for(let video of videos){
            video.render()
            allVideos.appendChild(video.element)
        }
        

        this.menuElement.appendChild(allVideos)
    }
    //showMenu(){}
}

