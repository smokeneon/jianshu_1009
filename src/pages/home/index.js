import React,{ Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommends from './components/Recommends';
import Writer from './components/Writer';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,

} from './style'

class Home extends Component {
    render(){
        return (
         <HomeWrapper>
             <HomeLeft>
                <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4757/180d009539a7a7202317f77babbff678b0dcbf91.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" ></img>
                <Topic />
                <List />
             </HomeLeft>
             <HomeRight>
                 <Recommends />
                 <Writer />
             </HomeRight>
         </HomeWrapper>
            
        )
    }
}

export default Home;