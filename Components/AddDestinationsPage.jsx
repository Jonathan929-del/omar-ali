// Imports
import React from 'react'
import styled from 'styled-components'
import {IoMdAddCircle} from 'react-icons/io'



// Styles
const AddDestinationsContainer = styled.section`
    height:100%;
    display:flex;
    padding:20px 0;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    width:calc(100vw - 300px);
`
const Header = styled.h1`
    font-size:40px;
    color:#367bf5;
`
const Form = styled.form`
    width:95%;
    height:85vh;
    display:flex;
    padding:30px 0;
    margin-top:10px;
    font-weight:400;
    border-radius:10px;
    flex-direction:column;
    background-color:#fff;
    justify-content:space-between;
`
const InputContainer = styled.div`
    width:90%;
    margin:auto;
    display:flex;
    align-items:flex-end;
    flex-direction:column;
    background-color:transparent;
`
const Label = styled.label`
    color:#3caff4;
    font-size:20px;
    background-color:transparent;
`
const Input = styled.input`
    width:100%;
    border:none;
    padding:10px;
    outline:none;
    text-align:end;
    font-size:18px;
    background-color:transparent;
    border-bottom:1px solid #ccc;
`
const FirstListItem = styled.button`
    width:200px;
    margin:auto;
    border:none;
    padding:10px;
    display:flex;
    cursor:pointer;
    font-size:18px;
    font-weight:500;
    color:#367bf5;
    align-items:center;
    border-radius:20px;
    text-decoration:none;
    justify-content:center;
    background-color:#fff;
    box-shadow: 0px 0px 30px -5px rgba(0,0,0,0.75);
`
const Select = styled.select`
  border:none;
  outline:none;
  font-size:15px;
  padding:7px 15px;
  border-radius:5px;
  background-color:transparent;
`
const Hr = styled.div`
    width:90%;
    margin:auto;
    color:transparent;
    background-color:transparent;
    border-bottom:1px solid #ccc;
`



// Main Function
const AddDestinationsPage = () => {
  return (
    <AddDestinationsContainer>
        <Header>اضافة موقف</Header>
        <Form>
            <InputContainer>
                <Label>اسم الموقف</Label>
                <Input placeholder='موقف الفرن' />
            </InputContainer>
            <InputContainer>
                <Label>عنوان الموقف</Label>
                <Input placeholder='الحديد و الصلب التبين حلوان' />
            </InputContainer>
            <InputContainer>
                <Label>قيمةالموقف</Label>
                <Input placeholder='160000' />
            </InputContainer>
            <InputContainer>
                <Label>المشرف علي الموقف</Label>
                <Select>
                    <option>علي جاد</option>
                </Select>
            </InputContainer>
            <Hr>-</Hr>
            <InputContainer>
                <Label>تاريخ البدأ</Label>
                <Input placeholder='12/2/2022' />
            </InputContainer>
            <InputContainer>
                <Label>تاريخ الانتهاء</Label>
                <Input placeholder='6/6/2022' />
            </InputContainer>
            <FirstListItem type='submit'>
                اضافة<IoMdAddCircle style={{fontSize:'20px', marginLeft:'10px'}}/>
            </FirstListItem>
        </Form>
    </AddDestinationsContainer>
  )
}



// Export
export default AddDestinationsPage