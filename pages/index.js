
import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    height: 50vh;
`
const Input = styled.input`
    height: 40px;
    width:500px;
    border: 1px solid aqua;
    border-radius:29px 0 0 29px ;
    margin:0;
    outline: none;
    padding 5px;
    font-size: 2rem;
    padding-left: 25px;
    color: #6f6b6b;
`
const Submit = styled.button`
    height:20px;
    height: 51px;
    width: 111px;
    background-color: #00BCD4;
    color: white;
    font-size : 12px;
 `

const Result = styled.div`
    display: flex;
    font-size: 3rem;
    font-weight: 400;
    border: 1px solid #00BCD4;
    justify-content:center;
    align-items:center;
 `

class Form extends  React.Component {
    state = {
        value:null,
        range: ''
    }


    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    handleSubmit = () => {
        const NumberInput = convertSTringToNumber(this.state.value)
        const range = findRange(NumberInput)
        this.setState({
            range
        })
    }

    render(){
    return(
    <div>
    <FormWrapper>
    <Input onChange={this.handleChange} />
    <Submit type='submit' onClick={this.handleSubmit}> submit </Submit>


    </FormWrapper>
            {this.state.range && <Result> Result = {this.state.range} </Result>}
    </div>
)
    }
}

const convertSTringToNumber = (str) => {
    return str.trim().split(' ')
        .map(e => Number(e))
        .filter(e => Number.isInteger(e))
}

const findRange = (numbers) =>{
    let string = ''
    for (var i = 0; i < numbers.length; i++) {
        if ((numbers[i + 1] === numbers[i] + 1) && (numbers[i - 1] === numbers[i] - 1)) {
            //skip middle numbers
        }

        else if ((numbers[i + 1] !== numbers[i] + 1) && (numbers[i - 1] !== numbers[i] - 1)) {
            string += ` ${numbers[i]},`
        }
        else if (numbers[i + 1] !== numbers[i] + 1) {
            string += `-${numbers[i]},`
        }
        else {
            string += ` ${numbers[i]}`
        }
    }
    return string.trim().replace(/,$/, '.')
}

export default Form