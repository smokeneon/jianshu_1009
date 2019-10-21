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
        const { focused,list,page,mouseIn,handleMouseEnter,totalPage,handleMouseLeave,handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for(let i = ((page-1)*10);i<page*10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
       
        if(focused || mouseIn){
            return (
            <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                 <SearchInfoTitle>
                 热门搜索
                 <SearchInfoSwitch onClick={()=> handleChangePage(page,totalPage)}>换一批</SearchInfoSwitch>
                 </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
     
            </SearchInfo>
            )
         }else{
             return null;
         }
    }
    render(){
        const { focused,handleInputFocus,handleInputBlur } = this.props;
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
                            in = {focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                            className={focused ? 'focused' : ''}
                            onFocus = {handleInputFocus}
                            onBlur = {handleInputBlur}
                            ></NavSearch>
    
                        </CSSTransition>
                            <span 
                            className={focused ? 'focused iconfont' : 'iconfont'}
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
        page:state.get('header').get('page'),
        mouseIn:state.get('header').get('mouseIn'),
        totalPage:state.get('header').get('totalPage'),
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
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage){
            if(page < totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else {
                dispatch(actionCreators.changePage(1));
            }
         
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);