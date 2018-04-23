import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Greeting extends Component {
    
    calcularCumpleaños(birth){
        let hoy = new Date()
        let fecha = new Date(birth)
        let edad = hoy.getFullYear() - fecha.getFullYear()
        let mes = hoy.getMonth() - fecha.getMonth()
        if(mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())){
            edad--
        }
        return edad+1
    }
    
    monthToText(mes){
        switch (mes) {
            case '01':
                return 'January'
            case '02':
                return 'February'
            case '03':
                return 'March'
            case '04':
                return 'April'
            case '05':
                return 'May'
            case '06':
                return 'June'
            case '07':
                return 'July'
            case '08':
                return 'August'
            case '09':
                return 'September'
            case '10':
                return 'October'
            case '11':
                return 'November'
            case '12':
                return 'December'
            default:
                break;
        }
    }

    render = () => {
        const {show} = this.props
        if(show !== '' && show){
            let date = show.birthday.split('/')
            let month = this.monthToText(date[0])
            return ( show &&
                <div className = "greeting" >
                Hello {show.name} {show.surname} from {show.country} on {date[1]} of {month} you will have {this.calcularCumpleaños(show.birthday)} years old
            </div>
            )
        } else return null
    }
}
Greeting.propTypes = {
    greet:PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        birthday: PropTypes.string.isRequired,
      })
}
const mapStateToProps = (state) => (state)
export default connect(mapStateToProps, null)(Greeting)