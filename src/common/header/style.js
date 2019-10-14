import styled from 'styled-components';
import logoPic from '../../static/blog.jpg';
export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
 
`;

export const Logo = styled.a.attrs({
    href:'/'
})`
    position:absolute;
    top:0;
    left:0;
    display:block;
    padding:15px;
    box-sizing:border-box;
    width:40px;
    margin-left:5%;
    margin-top:8px;
    border-radius:50%;
    height:40px;
    background:url(${logoPic});
    background-size:cover;
    // filter:Invert();//反色
    box-shadow:0 0 10px #ccc ;//阴影
`;

export const Nav = styled.div`
    position:absolute;
    top:0;
    left:10%;
    width:68%;
    height:100%;
    margin:0 auto;
    // background:red;

`

export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`
export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    
    .iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        height:30px;
        line-height:30px;
        border-radius:15px;
        
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    &.slide-enter{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
    margin-left:20px;
    margin-top:9px;
    padding:0 30px 0 20px;
    box-sizing:border-box;//防止padding将该盒子撑开
    width:160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#666;
    &.focused{
        width:240px;
    }
    &::placeholder{
        color:#999;
    }

`

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    width:22%;
    // background:red;
    height:56px;

`

export const Button = styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding: 0 20px;
    line-height:38px;
    border-radius:19px;
    font-size:14px;
    border:1px solid #ec6149;
    cursor:pointer;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`