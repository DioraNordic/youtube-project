import Content from "./Content"
import Video from "./Video"

export default class Menu{
    constructor(
        private readonly el: HTMLElement = document.createElement('div'),
        private list: Content[] = [],
        private active: Content | null= null
    ){}

    get element(){
        return this.el
    }

    get activeContent(): Content | null{
        if(!this.active){
            return this.list[0]
        }
        return this.active
    }

    set activeTheme(val: Content){
        this.active = val
    }

    set activeMenu(val: Content[]){
        this.list = val
    }

    init(){}
    render(){
        for (let content of this.list){
            this.el.appendChild(content.element)
            content.render()
        }
    }

    mocker(){
        const videos: Video[] = []
        
        const previews = [
        'https://i.ytimg.com/vi/jZGpkLElSu8/hqdefault.jpg',
        'https://i.ytimg.com/vi/4G9LwTTnn_k/hqdefault.jpg',
        'https://i.ytimg.com/vi/wObTive0mBM/hqdefault.jpg',
        'https://i.ytimg.com/vi/R6hxjbCR_Dg/hqdefault.jpg',
        'https://i.ytimg.com/vi/asC3SaVoT8M/hqdefault.jpg',
        'https://i.ytimg.com/vi/AkmFLLO0g_8/hqdefault.jpg',
        'https://i.ytimg.com/vi/T8nbNQpRwNo/hqdefault.jpg',
        'https://i.ytimg.com/vi/DBbfksGeWDk/hqdefault.jpg',
        'https://i.ytimg.com/vi/SWd25u4mVRw/hqdefault.jpg',
        'https://i.ytimg.com/vi/vIalke0YE_Y/hqdefault.jpg'
        
        ]
        const titles = [ 
        'KAROL G, Shakira - TQG (Official Video)',
        'Niall Horan - Heaven (Official Video)',
        'Lil Wayne - Kant Nobody ft. DMX',
        'Jonas Brothers - Wings (Official Music Video)',
        'Chlöe, Chris Brown - How Does It Feel (Official Video)',
        'Logic - Lightsabers (Official Music Video)',
        'Drake, 21 Savage - Spin Bout U',
        'Key Glock - Dirt (Official Video)',
        'Reneé Rapp - Bruises (Official Music Video)',
        'Gracie Abrams - I know it won’t work (Official Music Video)']
        const channels = [    
            'KAROL G',
            'Niall Horan',
            'Lil Wayne',
            'Jonas Brothers',
            'Chlöe',
            'Logic',
            'Drake',
            'Key Glock',
            'Reneé Rapp',
            'Gracie Abrams']
        const lengths = [    
            '3:37',
            '3:21',
            '3:11',
            '1:57',
            '2:57',
            '2:11',
            '3:50',
            '2:54',
            '3:58',
            '4:08']
        const links = [  
            'https://www.youtube.com/watch?v=jZGpkLElSu8',
            'https://www.youtube.com/watch?v=4G9LwTTnn_k',
            'https://www.youtube.com/watch?v=wObTive0mBM',
            'https://www.youtube.com/watch?v=R6hxjbCR_Dg',
            'https://www.youtube.com/watch?v=asC3SaVoT8M',
            'https://www.youtube.com/watch?v=AkmFLLO0g_8',
            'https://www.youtube.com/watch?v=T8nbNQpRwNo',
            'https://www.youtube.com/watch?v=DBbfksGeWDk',
            'https://www.youtube.com/watch?v=SWd25u4mVRw',
            'https://www.youtube.com/watch?v=vIalke0YE_Y']
        const views = [    
            749754564,
            11921700,
            10461226,
            6440601,
            13611835,
            1493136,
            36672284,
            5939197,
            660676,
            1227470]
        const dates = [    
            '2023/02/24',
            '2023/02/24',
            '2023/02/24',
            '2023/02/24',
            '2023/02/24',
            '2023/02/22',
            '2023/02/24',
            '2023/02/24',
            '2023/02/24',
            '2023/02/24']

            const categories = ['Музыка', "Фильмы", "Новости"]
     
        for(let i = 0; i < 10; i++){
        const video = new Video(
            null,
            previews[i],
            titles[i],
            channels[i],
            lengths[i],
            links[i],
            views[i],
            dates[i],
            categories[i],
            i   
        )
        videos.push(video)
        }
        
        debugger
        
        

        const content = new Content(videos)
        this.list.push(content)
    }
}