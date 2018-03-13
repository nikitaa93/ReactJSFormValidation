import React, { Component } from 'react';
import DropDownElement from './Drop';
import RadioElement from './Radio';
import propTypes from 'prop-types';
//import { validate} from './validate'

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          
          nameValue: '',
          contactValue: '',
          emailValue:'',
          countryValue:'',
          genderValue:'' ,
          nameError:'',
          contactError:'',
          emailError:'',
          nameReq:'',
          contactReq:'',
          emailReq:''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        let name = event.target.name;
        let value =  event.target.value;
       this.validate(name,value);       
    }

    
  
    handleSubmit(event) {   
        let { nameValue,contactValue,emailValue,countryValue,genderValue } = this.state;
        if (nameValue.trim().length<1) {
            console.log('Name require');
            this.setState({nameReq : 'Name is Required'}); 
        }else{
            this.setState({nameReq : '',
                            nameValue  }); 
            console.log('Name : ',nameValue);
        }
        if(contactValue.trim().length<1){
            this.setState({contactReq : 'Contact is Required'})
            console.log('Contact require');
        }else{
            console.log('Contact : ',contactValue);    
        }
        if(emailValue.trim().length<1){
            this.setState({emailReq : 'Email is Required'})
            console.log('Email require');
        }else{
            console.log('Email : ',emailValue);
        }
        console.log('Country : ',countryValue);
        console.log('Gender : ',genderValue);
        event.preventDefault();
    }

    validate(name,value){
        switch(name){
            case 'nameValue'  : {   console.log((/^[a-zA-Z\s]+$/).test(value))
                                    if((/^[a-zA-Z\s]+$/).test(value)){   
                                        this.setState({ 
                                            [name]: value, 
                                            nameError : ' '

                                        });
                                        console.log(name,value);

                                    }else if(value.trim().length>0){
                                       
                                        console.log('Name is invalid'); 
                                         
                                        this.setState({
                                            nameError : 'Name is invalid',
                                            nameReq : ' '});  
                                    }
                                    break;
                                    
            }

            case 'contactValue' : {
                                    if(value.match(/^[0-9]/)){
                                        this.setState({ 
                                            [name]: value, 
                                            contactError : ''});
                                    }else if(value.trim().length>0){
                                        console.log('Contact is invalid');
                                        this.setState({
                                            contactError : 'Contact is invalid',
                                            contactReq : ''
                                        }) 
                                    }
                                }
                                break;
            
            case 'emailValue' :  {
                                    if(value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)){  
                                        this.setState({ 
                                            [name]: value, 
                                            emailError : ''}); 
                                        
                                    }else if(value.length>1){

                                        console.log('Email is invalid');
                                        this.setState({
                                            emailError : 'Email is invalid',
                                            emailReq : ''
                                        }) 
                                    }
                                    break;
                                    
                                }
            default : this.setState({ [name]: value });
        }
    }
    
      
   
  
    render() {
        let { nameValue,contactValue,emailValue,countryValue,
            genderValue,nameError,contactError,emailError,
            nameReq,contactReq,emailReq } = this.state;
        
        
      return (
          
        <div >
            <h1>Enter your details</h1>

            <form  className='form-style-1' onSubmit={this.handleSubmit.bind(this)} >
            
                <label>Name :  
                    <input type='text'  name = 'nameValue'  onChange={this.handleChange } />  
                </label>
                <br/>
                <label className='error'>
                    {nameError}
                    <br/>
                    {nameReq}</label>
                <br/>
                <label>Contact :
                    <input type='text' name ='contactValue'  onChange={this.handleChange} />
                </label>
                <br/>
                <label className='error'>
                    {contactError}
                     {contactReq}</label>
                <br/>
                <label>Email :
                    <input type='text'  name='emailValue' onChange={this.handleChange} />
                </label>
                <br/>
                <label className='error'>{emailError}{emailReq}</label>
                <br/>
                <br/>
                <label>Country :
                    <DropDownElement  name='countryValue' updateStateProp = {this.handleChange}/>
                </label>
                <br/>
                
                <RadioElement name='genderValue' updateRadioProp = {this.handleChange}/>  
                <br/>
                <input type='submit' value='Submit'  />
            </form>
            <h3>Name : {nameValue} 
            
            <br/>
            Contact : {contactValue}
            <br/>
            Email : {emailValue}
            <br/>
            Country : {countryValue}
            <br/>
            Gender : {genderValue}</h3>
            
        </div>
      );
    }
    

   
   
  }

  App.propTypes= {
      nameValue : propTypes.string,
      contactValue : propTypes.number

  }

  



  

  //export default App;