const ADDPLAN = 'ADDPLAN';
const DELETEPLAN = 'DELETEPLAN';
const UNFRIEND = 'UNFRIEND';
const SENDMESSAGE = "SENDMESSAGE";

let id = 4;
let friendId = 4;

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

export const unfriend = id => ({
    type: UNFRIEND,
    id
})

export const sendMessage = ({ content, id }) => ({
    type: SENDMESSAGE,
    content: content,
    id: id
})

const plan = {
    profile: "data:image/jpeg;base64,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",
    date: ["2021-05-30", "2021-05-31"],
    friends: [
        {
            id: 1,
            name: "Yoonjae Choi",
            profile: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
            chattings: [
                {
                    isMe: true,
                    date: "2021-05-01",
                    time: "09:11",
                    content: "We have to submit HCI homework by tomorrow!!"
                },
                {
                    isMe: false,
                    date: "2021-05-02",
                    time: "10:00",
                    content: "Oh!! Thanks"
                },
                {
                    isMe: true,
                    date: "2021-05-02",
                    time: "10:01",
                    content: "Fighting!!"
                },
                {
                    isMe: true,
                    date: "2021-05-02",
                    time: "10:02",
                    content: "Bye~~"
                }
            ],
            sharedPlan: []
        },
        {
            id: 2,
            name: "Haneul Jung",
            profile: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
            chattings: [
                {
                    isMe: false,
                    date: "2021-05-01",
                    time: "10:00",
                    content: "Hi"
                },
                {
                    isMe: true,
                    date: "2021-05-01",
                    time: "10:01",
                    content: "Hello"
                }
            ]
        },
        {
            id: 3,
            name: "Jeewoon Kim",
            profile: "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg",
            chattings: [
                {
                    isMe: false,
                    date: "2021-05-01",
                    time: "10:00",
                    content: "Goodbye"
                },
                {
                    isMe: true,
                    date: "2021-05-01",
                    time: "10:01",
                    content: "See you tomorrow!!"
                }
            ]
        },

    ],
    todos: [
        {
            id: 1,
            content: 'Study with Yoonjae',
            date: '2021-05-30',
            place: 'starbucks',
            starttime: '12:00',
            endtime: '14:00',
            importance: 4.5,
            friends: {}
        },
        {
            id: 2,
            content: 'HCI Realtime Lecture',
            date: '2021-05-30',
            place: 'Zoom',
            starttime: '15:30',
            endtime: '16:45',
            importance: 5,
            friends: {}
        },
        {
            id: 3,
            content: 'Submit HCI Homework',
            date: '2021-05-31',
            place: 'Cyber Campus',
            starttime: '17:00',
            endtime: '17:00',
            importance: 5,
            friends: {}
        }]
};

function handleTodos(state = plan, action) {
    switch (action.type) {
        case ADDPLAN:
            const tmpTodos = state.todos.concat(action.todo);
            let tmpDate = state.date;
            if (!state.date.includes(action.date)) {
                tmpDate = state.date.concat(action.date);
                tmpDate.sort();
            }
            return {
                ...state,
                date: tmpDate,
                todos: tmpTodos
            }
        case DELETEPLAN:
            let count = 0;
            let targetdate = "";
            state.todos.map(todo => {
                if (todo.id === action.id) targetdate = todo.date;
            })
            const nextTodos = state.todos.filter(todo => todo.id !== action.id)
            nextTodos.map(todo => {
                if (todo.date === targetdate) count++;
            })
            let nextdate = state.date;
            if (count === 0) nextdate = state.date.filter(date => date !== targetdate);
            return {
                ...state,
                date: nextdate,
                todos: nextTodos
            }
        case UNFRIEND:
            const nextFriends = state.friends.filter(friend => friend.id !== action.id);
            return {
                ...state,
                friends: nextFriends
            }
        case SENDMESSAGE:
            let today = new Date();
            let year = today.getFullYear();
            let month = ("0" + (today.getMonth() + 1)).slice(-2);
            let date = ("0" + today.getDate()).slice(-2);
            let hour = today.getHours();
            let minute = today.getMinutes();
            const history = state.friends.map(friend => {
                if (friend.id == action.id) {
                    const newchatting = friend.chattings.concat({
                        isMe: true,
                        date: year + "-" + month + "-" + date,
                        time: hour + ":" + minute,
                        content: action.content
                    })
                    return { ...friend, chattings: newchatting }
                }
                else return friend
            })
            return {
                ...state,
                friends: history
            }
        default:
            return state;
    }
}

export default handleTodos;