import Header from "../component/Header"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import handleTodos, { unfriend, addfriend } from '../modules/todos';
import axios from "axios";
import { useState } from "react";
const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;

    margin-left:300px;
    margin-right:300px;
`
const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const InputHere = styled.input`
 border-radius: 10px;
 border: 2px solid #646568;
 color: #b6b7b8;
 font-family: inherit;
 font-size: 1rem;
 padding: 1rem;
 margin-bottom: 2rem;
 width: 320px;
 outline:none;
`
const Card = styled.div`
border: 2px solid #646568;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
max-width: 800px;
width:350px;
height:350px;
margin-bottom: 50px;
`

const ProfileGithub = styled.image`
margin-top: 20px;
border: 2px solid #646568;
border-radius: 50%;
height: 180px;
width: 180px;
background: url(${(props) => props.src});
background-size: 180px;
`

const Button = styled.button`
  height: 30px;
  width: 175px;
  color:black;
  font-weight: bold;
  outline:none;
`


function AddFriends() {
    const history = useHistory();
    const { friends, url } = useSelector((plan) => ({ friends: plan.friends, url: plan.profile }));
    const dispatch = useDispatch();

    const AddFriend = async () => {
        dispatch(addfriend(friend));
    }
    const [myState, setMyState] = useState({
        login: '',
        avatar_url: '',
        html_url: '',
        name: '',
        company: '',
    });
    const [friend, setFriend] = useState({
        id: '',
        name: '',
        profile: '',
        chattings: [{
        }]
    });

    const onIDChange = async evt => {
        try {
            setMyState({
                ...myState,
                login: evt.target.value
            })
        } catch (e) {
            console.error(e)
        }
    }

    const getData = async () => {
        try {
            const response = await axios.get(`https://api.github.com/users/${myState.login}`);
            console.log(response);
            window.localStorage.setItem('ID', myState.login);
            if (response.status === 200) {
                setMyState({
                    ...myState,
                    avatar_url: response.data.avatar_url,
                    html_url: response.data.html_url,
                    name: response.data.name,
                    company: response.data.company,
                    bio: response.data.bio
                });
                setFriend({
                    ...friend,
                    name: response.data.login,
                    profile: response.data.avatar_url
                });
                console.log(friends);
            } else {
                console.log("time error");
            }


        } catch (e) {
            console.log("error")
            console.log(myState);
        }
    }
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
                    <Column>
                        <Card>
                            <ProfileGithub src={myState.avatar_url}></ProfileGithub>
                            <h3 style={{ color: "black", margin: "7px", fontWeight: "bold" }}>{myState.name}</h3>
                            <p style={{ color: "black", height: "10px", margin: "15px" }}>{myState.company}</p>

                        </Card>
                        <InputHere type="text" placeholder="Input GitHub ID here." name="summary_title" onChange={onIDChange} />
                        <div></div>
                        <Button onClick={getData} > Find </Button>
                        <Button onClick={(AddFriend)} > Add Friend </Button>
                    </Column>
                </Content>
            </Row>

        </div>
    );
}

export default AddFriends;