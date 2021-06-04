import Header from "../component/Header"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
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
width:750px;
height:100px;
margin-bottom: 50px;
`
var timer;
var seconds;
var minutes;
var hours;
var days;
var compareDate = new Date();
compareDate.setDate(window.localStorage.getItem("date")); //just for this demo today + 7 days

timer = setInterval(function () {
    timeBetweenDates(compareDate);
}, 1000);
function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {
        // Timer done
        clearInterval(timer);

    } else {

        seconds = Math.floor(difference / 1000);
        minutes = Math.floor(seconds / 60);
        hours = Math.floor(minutes / 60);
        days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;


    }
}

function Alarm() {
    const history = useHistory();
    const { friends, url } = useSelector((plan) => ({ friends: plan.friends, url: plan.profile }));
    const dispatch = useDispatch();
    var now = new Date();
    console.log(now);


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

                    <h2 style={{ color: "red", marginLeft: "10px" }}>CountDown</h2>
                    <Warn>
                        {days}일 {hours}시간 {seconds}초

                    </Warn>


                </Content>
            </Row>
        </div>
    );
}

export default Alarm;
