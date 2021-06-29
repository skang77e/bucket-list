import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Progress = (props) => {
    const bucket_list = useSelector((state) => state.bucket.list);
    const completed = bucket_list.filter(item => item.completed === true);
    let percentage = completed.length / bucket_list.length * 100;

    return (
        <ProgressBar>
            <Highlight width={percentage + "%"}/>
        </ProgressBar>
    )
}

const ProgressBar = styled.div`
    background: #eee;
    width:100%;
    height: 20px;
    border-radius: 30px;

`

const Highlight = styled.div`
    background: #673AB8;
    height: 20px;
    width: ${props => props.width};
    transition: width 1s;
    position: relative;
    &:after{
        width:30px;
        height:30px;
        background-color:#fff;
        border:2px solid #673AB8;
        border-radius: 50%;
        content: '';
        position:absolute;
        right:-8px;
        top:-8px;
    }
`
export default Progress;
