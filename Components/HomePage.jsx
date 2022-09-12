// Imports
import React from 'react'
import styled from 'styled-components'
import {VscPerson} from 'react-icons/vsc'
import {IoMdAddCircle} from 'react-icons/io'
import {AiFillCreditCard} from 'react-icons/ai'
import {MdOutlineAttachMoney} from 'react-icons/md'



// Styles
const HomeContainer = styled.section`
  height:calc(100vh - 50px);
  width:calc(100vw - 300px);
`
const Boxes = styled.div`
  width:100%;
  display:flex;
  margin-top:20px;
  align-items:center;
  justify-content:space-evenly;
`
const Box = styled.div`
  width:20%;
  height:100px;
  display:flex;
  align-items:center;
  border-radius:10px;
  transition:0.2s linear;
  background-color:#ffffff;

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


const Page = styled.section`
  width:100%;
  display:flex;
  margin-top:30px;
  flex-direction:column;
  padding:20px 50px 0 50px;
  height:calc(100% - 120px);
`
const Top = styled.div`
  display:flex;
  align-items:center;
  background-color:transparent;
  justify-content:space-between;
`
const Select = styled.select`
  font-size:15px;
  padding:7px 15px;
  border-radius:5px;
  background-color:transparent;
`
const TopText = styled.p`
  font-size:25px;
  font-weight:500;
  background-color:transparent;
`
const MainBox = styled.div`
  height:90%;
  margin-top:20px;
  padding:0 0 30px 0;
  border-radius:10px;
  background-color:#fff;
`
const Section = styled.div`
  width:100%;
  height:50%;
  display:flex;
  border-radius:10px;
  align-items: center;
  flex-direction:column;
  background-color:transparent;
`
const SectionHeading = styled.h3`
  width:100%;
  text-align:end;
  font-size:35px;
  font-weight:400;
  margin:0 100px 30px 0;
  background-color:transparent;
`
const Table = styled.div`
  width:90%;
  height:150px;
  display:flex;
  overflow:hidden;
  border-radius:10px;
  flex-direction:column;
  border:1px solid #000;
  background-color:transparent;
`
const TableTop = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  background-color:transparent;
  justify-content:space-between;
`
const TableTopItem = styled.p`
  width:33.3%;
  height:100%;
  display:flex;
  font-size:22px;
  font-weight:400;
  align-items:center;
  justify-content:center;
  background-color:#ecedee;
  border-left:1px solid #000;
`
const TableBottom = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  background-color:transparent;
  justify-content:space-between;
`
const TableBottomItem = styled.p`
  width:33.3%;
  height:100%;
  display:flex;
  font-size:19px;
  font-weight:500;
  align-items:center;
  justify-content:center;
  border-top:1px solid #000;
  background-color:transparent;
  border-left:1px solid #000;
`
const BottomText = styled.div`
  width:100%;
  display:flex;
  margin-top:20px;
  align-items:center;
  background-color:transparent;
  justify-content:space-evenly;
`
const AddButton = styled.button`
  border:none;
  width:150px;
  padding:10px;
  display:flex;
  cursor:pointer;
  font-size:18px;
  font-weight:500;
  color:#367bf5;
  align-items:center;
  border-radius:20px;
  transition:0.2s linear;
  justify-content:center;
  background-color:#fff;
  box-shadow: 0px 0px 30px -5px rgba(0,0,0,0.75);

  &:hover{
    transform:scale(1.05);
  }
`
const Info = styled.p`
  font-size:20px;
  padding:10px 30px;
  border-radius:10px;
  border:1px solid #000;
  background-color:transparent;
`
const InfoNum = styled.span`
  color:#367bf5;
  background-color:transparent;
`



// Main Function
const HomePage = () => {
  return (
    <HomeContainer>
      <Boxes>
        <Box>
          <IconContainer>
            <MdOutlineAttachMoney style={{backgroundColor:'transparent'}}/>
          </IconContainer>
          <Text>
            <Paragraph>الدفعات</Paragraph>
            <Number>$5,174</Number>
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
            <AiFillCreditCard style={{backgroundColor:'transparent'}}/>
          </IconContainer>
          <Text>
            <Paragraph>المصاريف</Paragraph>
            <Number>$5,174</Number>
          </Text>
        </Box>
        <Box>
          <IconContainer>
            <MdOutlineAttachMoney style={{backgroundColor:'transparent'}}/>
          </IconContainer>
          <Text>
            <Paragraph>صافي الربح</Paragraph>
            <Number>$128,174</Number>
          </Text>
        </Box>
      </Boxes>
      <Page>
        <Top>
          <Select>
            <option>يناير 12, 2016 . 2016 ,21سبتمبر</option>
          </Select>
          <TopText>الموقف الحالي: موقف الفرن</TopText>
        </Top>
        <MainBox>
          <Section>
            <SectionHeading>الدفعات</SectionHeading>
            <Table>
              <TableTop>
                <TableTopItem>التاريخ</TableTopItem>
                <TableTopItem>القيمة</TableTopItem>
                <TableTopItem>اسم المستلم</TableTopItem>
              </TableTop>
              <TableBottom>
                <TableBottomItem>12/2/2022</TableBottomItem>
                <TableBottomItem>100000</TableBottomItem>
                <TableBottomItem>علي عمر</TableBottomItem>
              </TableBottom>
            </Table>
            <BottomText>
              <AddButton>
                اضافة<IoMdAddCircle style={{fontSize:'20px', marginLeft:'10px'}}/>
              </AddButton>
              <Info>
                المتبقي:<InfoNum>1542068</InfoNum>
              </Info>
            </BottomText>
          </Section>
          <Section>
            <SectionHeading>العهدات</SectionHeading>
            <Table>
              <TableTop>
                <TableTopItem>التاريخ</TableTopItem>
                <TableTopItem>القيمة</TableTopItem>
                <TableTopItem>اسم المشرف</TableTopItem>
              </TableTop>
              <TableBottom>
                <TableBottomItem>6/1/2022</TableBottomItem>
                <TableBottomItem>12000</TableBottomItem>
                <TableBottomItem>علاء السيد</TableBottomItem>
              </TableBottom>
            </Table>
            <BottomText>
              <AddButton>
                اضافة<IoMdAddCircle style={{fontSize:'20px', marginLeft:'10px'}}/>
              </AddButton>
              <Info>
                الاجمالي:<InfoNum>1542068</InfoNum>
              </Info>
            </BottomText>
          </Section>
        </MainBox>
      </Page>
    </HomeContainer>
  )
}



// Export
export default HomePage;