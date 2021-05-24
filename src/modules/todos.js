const ADDPLAN = 'ADDPLAN';
const DELETEPLAN = 'DELETEPLAN';

let id=4;

export const insert = plan => ({
    type: ADDPLAN,
    todo: {
        ...plan,
        id: id++
    },
    date: plan.date 
});

export const remove = id => ({
    type: DELETEPLAN,
    id
})

const plan={
    date:["2021-05-11","2021-05-12"],
    todos:[
    {
        id:1,
        content:'Study with Yoonjae',
        date:'2021-05-11',
        place:'starbucks',
        starttime:'12:00',
        endtime:'14:00',
        importance:4.5,
        friends:{}
    },
    {
        id:2,
        content:'HCI Realtime Lecture',
        date:'2021-05-11',
        place:'Zoom',
        starttime:'15:30',
        endtime:'16:45',
        importance:5,
        friends:{}
    },
    {
        id:3,
        content:'Submit HCI Homework',
        date:'2021-05-12',
        place:'Cyber Campus',
        starttime:'17:00',
        endtime:'17:00',
        importance:5,
        friends:{}
    }]
};

function handleTodos(state=plan, action){
    switch(action.type){
        case ADDPLAN:
            const tmpTodos = state.todos.concat(action.todo);
            let tmpDate = state.date;
            if(!state.date.includes(action.date)) {
                tmpDate = state.date.concat(action.date);
                tmpDate.sort();
            }
            return {
                date: tmpDate,
                todos: tmpTodos
            }
        case DELETEPLAN:
            let count = 0;
            let targetdate="";
            state.todos.map(todo => {
                if(todo.id === action.id) targetdate = todo.date;
            })
            const nextTodos = state.todos.filter(todo => todo.id !== action.id)
            nextTodos.map(todo => {
                if(todo.date === targetdate) count++;
            })
            let nextdate =  state.date;
            if(count===0) nextdate = state.date.filter(date => date !== targetdate);
            return {
                date: nextdate,
                todos: nextTodos
            }
        default:
            return state;
    }
}

export default handleTodos;