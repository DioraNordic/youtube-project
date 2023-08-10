import Content from "./Content";

export default class Video{
    constructor(
        private contentTheme: Content | null = null,
        private preview: string,
        private channel: string,
        private title: string,
        private lenght: string,
        private view: string,
        private date: Date,
        protected id: number = -1 // условие существования видео
    ){}

    render(){}
}