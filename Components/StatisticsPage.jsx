// Imports
import React from 'react'
import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs'
import {VscPerson} from 'react-icons/vsc'
import {DoughtnutCom} from './DoughtnutCom'
import {LineChartCom} from './LineChartCom'
import {FaClipboardList} from 'react-icons/fa'
import {MdOutlineAttachMoney} from 'react-icons/md'
import {LineChartComTwo} from './LineChartComTwo'



// Styles
const StatisticsContainer = styled.section`
    height:100vh;
    display:flex;
    padding:20px 0;
    align-items:center;
    flex-direction:column;
    width:calc(100vw - 300px);
`
const SearchContainer = styled.div`
    width:95%;
    height:50px;
    display:flex;
    position:relative;
    align-items:center;
    border-radius:50px;
    background-color:#fff;
`
const SearchIcon = styled(BsSearch)`
    font-size:25px;
    margin-left:30px;
`
const Search = styled.input`
    width:100%;
    height:100%;
    border:none;
    outline:none;
    text-align:center;
    background-color:transparent;
`
const TopSection = styled.div`
  width:100%;
  display:flex;
  overflow:hidden;
  padding:30px 50px;
  align-items:center;
  justify-content:space-between;
`
const TopSectionLeftBox = styled.div`
  width:335px;
  height:100%;
  border-radius:5px;
  background-color:#fff;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
`
const TopSectionLeftBoxTop = styled.div`
  display:flex;
  padding:20px 10px;
  align-items:center;
  background-color:transparent;
  justify-content:space-between;
  border-bottom:1px solid #ccc;
`
const TopSectionLeftBoxTopLeft = styled.div`
  font-size:12px;
  background-color:transparent;
`
const TopSectionLeftBoxTopRight = styled.div`
  background-color:transparent;
`
const Select = styled.select`
  border:none;
  outline:none;
  font-size:12px;
  color:#2ea8f3;
  background-color:transparent;
`
const TopSectionLeftBoxBottom = styled.div`
  width:55%;
  display:flex;
  margin:auto;
  align-items:center;
  justify-content:center;
  background-color:#fff;
`
const TopSectionRightBox = styled.div`
  width:335px;
  height:100%;
  border-radius:5px;
  background-color:#fff;
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
`
const MiddleSection = styled.div`
  
  width:100%;
  display:flex;
  padding:0 50px;
  align-items:center;
  justify-content:space-between;
`
const Box = styled.div`
  width:250px;
  height:150px;
  display:flex;
  align-items:center;
  border-radius:10px;
  transition:0.2s linear;
  background-color:#fff;

  &:hover{
    transform:scale(1.05);
  }
`
const IconContainer = styled.div`
  flex:1;
  height:100%;
  display:flex;
  font-size:60px;
  color:#367bf5;
  align-items:center;
  justify-content:center;
  background-color:transparent;
`
const Text = styled.div`
  flex:1.5;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  background-color:transparent;
`
const Paragraph = styled.p`
  font-size:23px;
  background-color:transparent;
`
const Number = styled.p`
  color:#367bf5;
  font-size:23px;
  margin-top:20px;
  background-color:transparent;
`
const BottomSection = styled.div`
  width:100%;
  display:flex;
  padding:0 50px;
  align-items:center;
  justify-content:space-between;
`
const ChartContainer = styled.div`
  width:40%;
  height:100%;
  padding:20px;
  border-radius:5px;
  background-color:#fff;
`



// Main Function
const StatisticsPage = () => {
  return (
    <StatisticsContainer>
        <SearchContainer>
            <SearchIcon />
            <Search placeholder='بحث'/>
        </SearchContainer>
        <TopSection>
          <TopSectionLeftBox>
            <TopSectionLeftBoxTop>
              <TopSectionLeftBoxTopLeft>
                Show: <Select>
                  <option>This month</option>
                </Select>
              </TopSectionLeftBoxTopLeft>
              <TopSectionLeftBoxTopRight>
                جميع المواقف
              </TopSectionLeftBoxTopRight>
            </TopSectionLeftBoxTop>
            <TopSectionLeftBoxBottom>
              <DoughtnutCom />
            </TopSectionLeftBoxBottom>
          </TopSectionLeftBox>
          <TopSectionRightBox></TopSectionRightBox>
        </TopSection>
        <MiddleSection>
          <Box>
            <IconContainer>
              <FaClipboardList style={{backgroundColor:'transparent'}}/>
            </IconContainer>
            <Text>
              <Paragraph>المشاريع</Paragraph>
              <Number>18</Number>
            </Text>
          </Box>
          <Box>
            <IconContainer>
              <VscPerson style={{backgroundColor:'transparent'}}/>
            </IconContainer>
            <Text>
              <Paragraph>العمال</Paragraph>
              <Number>104</Number>
            </Text>
          </Box>
          <Box>
            <IconContainer>
              <MdOutlineAttachMoney style={{backgroundColor:'transparent'}}/>
            </IconContainer>
            <Text>
              <Paragraph>صافي الربح</Paragraph>
              <Number>$152,564</Number>
            </Text>
          </Box>
        </MiddleSection>
        <BottomSection>
          <ChartContainer>
            <LineChartCom />
          </ChartContainer>
          <ChartContainer>
            <LineChartComTwo />
          </ChartContainer>
        </BottomSection>
    </StatisticsContainer>
  )
}



// Export
export default StatisticsPage