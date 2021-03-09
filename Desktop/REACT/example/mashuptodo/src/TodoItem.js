import React from 'react';
import styled,{css} from 'styled-components';
import { MdDone,MdDelete } from 'react-icons/md';
import { useTodoDispatch } from './TodoContext';


const CheckCircle=styled.div`
    width:32px;
    height:32px;
    border-radius:16px;
    border:1px solid #ced4da;
    font-size:24px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    cursor:pointer;
    ${props=>props&&css`
        border:1px solid #e8d9a9;
        color:#38d9a9;
    `}
`;
const Text=styled.div`
    flex:1;
    font-size:21px;
    color:#495057;
    ${props=>props.done&&css`
        color: #ced4da;
    `}
`;
const Remove=styled.div`
    opacity:0;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#dee2e6;
    font-size:24px;
    cursor:pointer;
    &:hover{
        color:#ff6b6b;
    }
`;
const TodoItemBlock=styled.div`
    display:flex;
    align-items:center;
    padding-top:12px;
    padding-bottom:12px;

    &:hover{
        ${Remove}{
            opacity:1;
        }
    }
`;

function TodoItem({id, done,text}){
    const dispatch=useTodoDispatch();
    const onToggle=()=>dispatch({
        type:'TOGGLE',
        id
    });

    const onRemove=()=>
        dispatch({
            type:'REMOVE',
            id
    });

    return(
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>{done&&<MdDone/>}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    )
}

export default React.memo(TodoItem);
/*state를 변경시키는게 아닌 dispatch로만 값을 다루기때문에 하나 건들이면 값을 기억해 두었다가 다른것들은 리랜더링 되지않음 */