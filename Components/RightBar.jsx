// Imports
import {useState} from 'react'
import styled from 'styled-components'
import {IoMdAddCircle} from 'react-icons/io'
import {FaClipboardList} from 'react-icons/fa'
import {SiGoogleanalytics} from 'react-icons/si'
import {BsFillGrid1X2Fill, BsFillPersonFill} from 'react-icons/bs'
import {AiFillCreditCard, AiFillQuestionCircle} from 'react-icons/ai'



// Styles
const RightbarContainer = styled.aside`
    top:0;
    right:0;
    height:100%;
    position:fixed;
    min-width:300px;
    background-color:#fff;
`
const Header = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#ddebfb;
`
const Img = styled.img`
    width:70px;
`
const Title = styled.h1`
    font-size:27px;
    font-weight:400;
    background-color:transparent;
`
const List = styled.ul`
    width:100%;
    display:flex;
    list-style:none;
    margin-right:40px;
    align-items:center;
    flex-direction:column;
    background-color:transparent;
`
const FirstListItem = styled.a`
    width:70%;
    padding:10px;
    display:flex;
    cursor:pointer;
    font-size:18px;
    font-weight:500;
    color:#367bf5;
    align-items:center;
    border-radius:20px;
    margin:40px 0 60px 0;
    text-decoration:none;
    justify-content:center;
    background-color:#fff;
    box-shadow: 0px 0px 30px -5px rgba(0,0,0,0.75);
`
const ListItem = styled.a`
    width:60%;
    display:flex;
    cursor:pointer;
    font-size:18px;
    font-weight:300;
    font-weight:500;
    align-items:center;
    margin-bottom:20px;
    text-decoration:none;
    justify-content:flex-end;
    background-color:transparent;
`
const Divider = styled.span`
    width:100%;
    color:transparent;
    border-top:1px solid #ccc;
    background-color:transparent;
`



// Main Function
const RightBar = ({title, ExpensesOpener}) => {

  return (
    <RightbarContainer>
        <Header>
            <Img src='./Images/Logo.png' alt='Logo'/>
            <Title>ALI OMAR</Title>
        </Header>
        <List>
            <FirstListItem href='/add-destination'>
                ?????????? ????????<IoMdAddCircle style={{fontSize:'20px', marginLeft:'10px'}}/>
            </FirstListItem>
            <ListItem href='/' style={{color:title === 'Main Page' ? '#367bf5' : '#5d6166'}}>
                ???????????? ????????????????<BsFillGrid1X2Fill style={{marginLeft:'10px', color:'#367bf5', fontSize:'20px'}}/>
            </ListItem>
            <ListItem href='/destinations' style={{color:title === 'Destinations' ? '#367bf5' : '#5d6166'}}>
                ??????????????<FaClipboardList style={{marginLeft:'10px', color:'#367bf5', fontSize:'20px'}}/>
            </ListItem>
            <ListItem href='/employees' style={{color:title === 'Employees' ? '#367bf5' : '#5d6166'}}>
                ????????????<BsFillPersonFill style={{marginLeft:'10px', color:'#367bf5', fontSize:'20px'}}/>
            </ListItem>
            <ListItem style={{color:title === 'Payments' ? '#367bf5' : '#5d6166'}} onClick={ExpensesOpener}>
                ????????????????<AiFillCreditCard style={{marginLeft:'10px', color:'#367bf5', fontSize:'20px'}}/>
            </ListItem>
            <ListItem href='/statistics' style={{color:title === 'Statistics' ? '#367bf5' : '#5d6166'}}>
                ????????????????????<SiGoogleanalytics style={{marginLeft:'10px', color:'#367bf5', fontSize:'20px'}}/>
            </ListItem>
            <Divider>-</Divider>
            <ListItem style={{color:'#5d6166'}}>
                ?????????? ????????????<AiFillQuestionCircle style={{marginLeft:'10px', color:'#ccc', fontSize:'20px'}}/>
            </ListItem>
        </List>
    </RightbarContainer>
  )
}



export default RightBar