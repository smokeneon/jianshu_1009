import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) =>({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length / 10),
});


export const searchFocus = () =>({
    type: constants.SEARCH_FOCUS,
});

export const searchBlur = () => ({
    type:constants.SEARCH_BLUR,
});

export const mouseEnter = () => ({
    type:constants.MOUSE_ENTER,
});

export const changePage = (page) => ({
    type:constants.CHANGE_PAGE,
    page,
})

export const mouseLeave = () => ({
    type:constants.MOUSE_LEAVE,
})


export const getList = () => {
    return (dispatch)=>{
        axios.get('./api/headerList.json').then((res)=>{
            const data = res.data;
            console.log('aaab'+data.data);
            const action = changeList(data.data);
            dispatch(action);
        })
        .catch((err)=>{
            console.log('error'+err);
        })

    }
}