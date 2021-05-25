import Header from "../component/Header"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import handleTodos, { remove } from '../modules/todos';

const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;

    margin-left:300px;
    margin-right:300px;
`
const LittleRow = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

const Profile = styled.div`
    height:600px;
    width:350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`
const Content = styled.div`
    height:700px;
    width:850px;
    display:flex;
    flex-direction: column;

`
const ProfileImage = styled.image`
margin-top: 20px;
border: 2px solid #646568;
border-radius: 50%;
height: 180px;
width: 180px;
background: url(${(props) => props.src});
background-size: 180px;
`
const Group = styled.div`
margin-top: 20px;
border: 2px solid #646568;
border-radius: 50%;
height: 40px;
width: 40px;
display:flex;
justify-content: center;
align-items: center;
margin:10px;
`
const Line = styled.div`
margin-top: 10px;
border: 1px solid #646568;
width: ${props => props.width || 200}px;
margin-bottom: 20px;
`
const GrayButton = styled.button`
  margin-right:10px;
  background: ${props => props.theme.default || '#F8F9F9'};
  color:${props => props.theme.fontColor || 'black'};
  border: 1px solid #646568;
  outline:none;
  margin-top:30px;
  height:35px;
  padding-left:20px;
  padding-right:20px;
  border-radius:10px;
`
const MenuButton = styled.button`
  margin:30px;
  background: ${props => props.theme.default || '#F8F9F9'};
  color:${props => props.theme.fontColor || 'black'};
  border: none;
  margin-top:30px;
  height:35px;
  padding-left:20px;
  padding-right:20px;
  border-radius:10px;
  font-size: 25px;
  font-weight: bold;
`
const Card = styled.div`
border: 2px solid #646568;
border-radius: 10px;
box-shadow: rgba(23, 25, 29, 0.3) 0 2px 10px;
display: flex;
flex-direction: column;
margin-left: 40px;
width:350px;
height:100px;
margin-bottom: 50px;
`
const Warn = styled.div`
border: 2px solid red;
border-radius: 10px;
box-shadow: rgba(23, 25, 29, 0.3) 0 2px 10px;
display: flex;
flex-direction: column;
margin-left: 40px;
width:350px;
height:130px;
margin-bottom: 50px;
`
function Overivew() {
    const history = useHistory();
    const { friends, url } = useSelector((plan) => ({ friends: plan.friends, url: plan.profile }));
    const { todos, date } = useSelector((plan) => ({ todos: plan.todos, date: plan.date }));
    const dispatch = useDispatch();

    console.log(todos);
    return (
        <div>
            <Header></Header>
            <Row>
                <Profile>
                    <ProfileImage src={url}></ProfileImage>
                    <h2 style={{ color: "#24292e" }}>Ahyeon Joung</h2>
                    <GrayButton>Edit Profile</GrayButton>
                    <h3 style={{ color: "#24292e" }}>25 Friends</h3>
                    <Line />
                    <LittleRow>
                        <Group>HCI</Group>
                        <Group>AI</Group>
                        <Group>CSE</Group>
                    </LittleRow>
                </Profile>
                <Content>
                    <LittleRow>
                        <MenuButton onClick={() => history.push("/")}>Overview</MenuButton>
                        <MenuButton onClick={() => history.push("/plan")}>Plan</MenuButton>
                        <MenuButton onClick={() => history.push("/friends")}>Friends</MenuButton>
                        <MenuButton onClick={() => history.push("/chatting")}>Chatting</MenuButton>
                    </LittleRow>
                    <Line width={850} />
                    <h2 style={{ color: "#24292e", marginLeft: "10px" }}>Upcoming Schedule</h2>
                    <LittleRow>
                        {date?.map((day, i) => {
                            return (<>
                                {
                                    todos?.map((todo, i) => {
                                        if (i < 4 && todo.date === day) {
                                            return (
                                                <>
                                                    <Card><h3>{"[" + todo.date + "] "} {todo.content}</h3> <div></div>
                                                        <h4>{todo.place}</h4> <div>
                                                        </div>
                                                        {todo.starttime + "~" + todo.endtime}

                                                    </Card>
                                                </>
                                            );
                                        }

                                    })
                                }
                            </>);


                        })}


                    </LittleRow>
                    <h2 style={{ color: "red", marginLeft: "10px" }}>Alarm</h2>
                    <LittleRow>
                        {date?.map((day, j) => {
                            return (<>
                                {
                                    todos?.map((todo, i) => {
                                        if (j < 1 && todo.date === day) {
                                            return (
                                                <Warn>
                                                    <h2 style={{ color: "black" }}>{"[" + todo.date + "] "} {todo.content}</h2> <div></div>
                                                    <h3>{todo.place}</h3> <div>
                                                    </div>
                                                    {todo.starttime + "~" + todo.endtime}
                                                </Warn>
                                            );
                                        }

                                    })
                                }
                            </>);


                        })}
                    </LittleRow>

                </Content>
            </Row>
        </div>
    );
}

export default Overivew;
