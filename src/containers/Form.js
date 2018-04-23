import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Row,Col} from 'react-flexbox-grid'
import Greeting from './Greeting'
import {setVisitors,setShow,loadCountries} from './../actions'

class Form extends Component {
    constructor(){
      super()
      this.state = {
          name:null,
          surname:null,
          birthday:null,
          country:'',
          show:null
      }
      this.handleInputChange = this.handleInputChange.bind(this)
      this.handleSave = this.handleSave.bind(this)
    }
    
    componentDidMount(){
        this.props.loadCountries()
    }

    handleSave(e){
        const {name,surname,birthday,country} = this.state
        const {visitors} = this.props
        let fecha = this.isValidDate(birthday)
        if(fecha && name !== '' && surname !== '' && birthday !== '' && birthday.length === 10 && country !== ''){
            let show = {name,surname,birthday,country}
            visitors.push(show)
            this.props.setVisitors(visitors)
            this.props.setShow(show)
        } else this.props.setShow(null)
    }
    
    isValidDate(date){
        if(date){
            let fecha = date.split('/')
            if(fecha.length === 3){
                if(fecha[0]>12){
                    alert('Date format is wrong')
                    return null
                }else return true
            } else return alert('Date format is wrong')
        } else return null
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        let stateParcial = this.state;
        stateParcial[name] = value;
        this.setState(stateParcial);
    }
    
    render = () => {
        const {countries,name,surname,birthday,country} = this.props
        if (!countries&&!country) {
            return null;
        }      
        return (
            <div className="form">
            <div className='inputs'> 
                <Row>
                    <Col xs><label className='textoForm'>Name:</label></Col>
                    <Col xs><input type='text' className='input' name='name' value={name} placeholder='name here' onChange={this.handleInputChange}/></Col>
                </Row>
                <Row>
                    <Col xs><label className='textoForm'>Surname:</label></Col>
                    <Col xs><input className='input' name='surname' value={surname} placeholder='surname here' onChange={this.handleInputChange}/></Col>
                </Row>
                <Row>
                    <Col xs><label className='textoForm'>Country:</label></Col>
                    <Col xs><select className='input select' name='country' value={country} onChange={this.handleInputChange}>
                    <option value=''>Countries</option>
                    { 
                        countries && countries.map((pais,key) => {
                            return <option key={key} value={pais.name}>{pais.name}</option>
                        }) 
                    }
                    </select></Col>
                </Row>
                <Row>
                    <Col xs><label className='textoForm'>Birthday:</label></Col>
                    <Col xs><input type="text" className="input" maxLength='10' name='birthday' value={birthday} placeholder='mm/dd/yyyy' onChange={this.handleInputChange}/></Col>
                </Row>
            </div>
            <Row end="xs">
            <Col><button style={{marginRight:'15px'}} className='saveButton' onClick={this.handleSave} >Save</button></Col>
            </Row>
            <Greeting/>
        </div>
    )
  }
}
Form.propTypes = {
    setVisitors:PropTypes.func.isRequired,
    loadCountries:PropTypes.func.isRequired,
    setShow:PropTypes.func.isRequired,
}
const mapDispatchToProps = dispatch => ({
    setVisitors: value => dispatch(setVisitors(value)),
    setShow: value => dispatch(setShow(value)),
    loadCountries: () => dispatch(loadCountries())
 })
const mapStateToProps = ({visitors,greet,countries,country,show}) => ({visitors,greet,countries,country,show})
export default connect(mapStateToProps, mapDispatchToProps)(Form)
