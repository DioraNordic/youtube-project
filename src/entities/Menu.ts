export default class Menu{
    constructor(
        private el: HTMLElement | null,
        private list: any[] = [],
        private beActive: boolean
    ){}

    set activeTheme(val: boolean){
        this.beActive = val
    }

    init(){}
    render(){}
}