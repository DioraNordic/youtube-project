import Content from "./Content";

export default class Video{
    constructor(
        private contentTheme: Content | null = null,
        private preview: string,
        private title: string,
        private channel: string,
        private lenght: string,
        private links: string,
        private view: number,
        private date: string,
        private category: string,
        private id: number = -1,
        public readonly element = document.createElement('div') // условие существования видео
    ){
        this.element.classList.add('video')
    }

    render(){
        const preview = document.createElement('div')
        const description = document.createElement('div')
        description.classList.add('description')

        const img = document.createElement('img')
        img.src = this.preview
        img.alt = ''

        const title = document.createElement('div')
        title.innerText = this.title

        const channel = document.createElement('div')
        channel.innerText = this.channel

        const view = document.createElement('div')
        view.innerText = `${this.view} просмотров`

        const date = document.createElement('div')
        date.innerText = this.date

        preview.appendChild(img)
        description.appendChild(title)
        description.appendChild(channel)
        description.appendChild(view)
        description.appendChild(date)



        this.element.appendChild(preview)
        this.element.appendChild(description)
    }
}