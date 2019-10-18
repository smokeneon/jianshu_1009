import React,{Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store/';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button,
    } from './style';

class Header extends Component{
    getListArea(){
        if(this.props.focused){
            return (
                 <SearchInfo>
                 <SearchInfoTitle>
                 热门搜索
                 <SearchInfoSwitch>换一批</SearchInfoSwitch>
                 </SearchInfoTitle>
             <SearchInfoList>
                {
                    this.props.list.map((item)=>{
                        return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                    })
                }
             </SearchInfoList>
     
         </SearchInfo>
            )
         }else{
             return null;
         }
    }
    render(){
        return (
            <div>
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>
                    <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in = {this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                            className={this.props.focused ? 'focused' : ''}
                            onFocus = {this.props.handleInputFocus}
                            onBlur = {this.props.handleInputBlur}
                            ></NavSearch>
    
                        </CSSTransition>
                            <span 
                            className={this.props.focused ? 'focused iconfont' : 'iconfont'}
                            >&#xe62a;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                   
                </Nav>
                <Addition>
                    <Button className='writting'>
                    <span className="iconfont">&#xe615;</span>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        </div>
        )
    }
}

//从仓库拿数据
const mapStateToProps = (state)=>{
    return {
        //仓库里的focused
        //state.getIn(['header','focused'])
        focused:state.get('header').get('focused'),
        list:state.get('header').get('list'),
    }
}

//从这走流程到reducer 
const mapDispathToProps = (dispatch)=>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.getList());
           dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);