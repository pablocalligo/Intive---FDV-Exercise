import React, { Component} from 'react'
import {Row,Col} from 'react-flexbox-grid'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setShow,setVisitors} from './../actions'

class Visitors extends Component {

    componentWillMount = () => {
        if(localStorage.getItem('visitors'))
            this.props.setVisitors(JSON.parse(localStorage.getItem('visitors')))
    }

    componentWillUpdate = (nextProps, nextState) => {
        localStorage.setItem('visitors',JSON.stringify(nextProps.visitors))
    }

    handleClick(show) {
        this.props.setShow(show)
    }

    render = () => {
        const {visitors} = this.props
        return ( <div className = "visitors" >
                    <div className='visitorsTitle'>
                    <Row>
                        <Col xs >Name</Col><Col xs>Country</Col><Col xs>Birthday</Col>
                    </Row>
                    </div>
                    {
                        visitors && visitors.map( (visit,key) => {
                            return <div className='rowVisitor' key={key} onClick={()=>{this.handleClick(visit)}} >
                            <Row>
                                <Col xs >{visit.name} {visit.surname}</Col><Col xs>{visit.country}</Col><Col xs>{visit.birthday}</Col>
                            </Row>
                            </div>
                        })
                    }
            </div>
        )
    }
}
Visitors.propTypes = {
    visitors:PropTypes.array.isRequired,
    setShow: PropTypes.func.isRequired,
    setVisitors:PropTypes.func.isRequired
}
const mapDispatchToProps = dispatch => ({
    setShow: value => dispatch(setShow(value)),
    setVisitors: value => dispatch(setVisitors(value)),
  })
const mapStateToProps = (state) => (state)
export default connect(mapStateToProps, mapDispatchToProps)(Visitors)