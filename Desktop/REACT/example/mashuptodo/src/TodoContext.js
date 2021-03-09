import React,{useReducer,createContext,useContext,useRef} from 'react';

const initialTodos=[
    {
        id:1,
        text:'프로젝트 생성하기',
        done:true,
    },
    {
        id:2,
        text:'컴포넌트 스타일링하기',
        done:true,
    },
    {
        id:3,
        text:'Context 만들기',
        done:false,
    },
    {
        id:4,
        text:'기능 구현하기',
        done:false,
    }
]
/*
CREATE
TOGGLE
REMOVE
*/
function todoReducer(state,action){
    switch(action.type){
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo=>todo.id===action.id ? {...todo, done:!todo.done }:todo);
        case 'REMOVE':
            return state.filter(todo=>todo.id!==action.id);
        default:
            throw new Error(`Unhandled action type:${action.type}`);
    }
}

const TodoStateContext=createContext(); 
const TodoDispatchContext=createContext();
const TodoNextIdContext=createContext();

export function TodoProvider({children}){
    const [state,dispatch]=useReducer(todoReducer,initialTodos);
    const nextId=useRef(5);
    return(
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState(){
    const context= useContext(TodoStateContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch(){
    const context= useContext(TodoDispatchContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId(){
    const context= useContext(TodoNextIdContext);
    if(!context){
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

/*컨텍스트 없을 떄 에러 처리
컴포넌트 최적화떄문에 context를 따로따로 만들고 커스텀 훅을 만들어줬다..
컨텍스트로 묶어주는 커스텀훅도 만들어서 child를 알아서 감싸줌
개발하는데도 편한 패턴 */