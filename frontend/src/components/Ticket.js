import React, { Component } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Ticket_User } from '../actions/authentication';
import classnames from 'classnames';
 class Ticket extends Component {
   constructor() {
       super();
       this.state = {
          number:0
       }
       
   }
   componentWillMount() {
     axios.get('/api/users/ticket')
             .then(res => {
               console.log(res.data.Ticket_Number);
               if(res.data.Ticket_Number)
               this.state.number=res.data.Ticket_Number;
               else
                 this.props.history.push('/login');
                 console.log(this.state.number);

             });
      // this.props.Ticket_User();
  }

    render() {
      if(this.state.number!=0)
{
        return (
      <label value={this.state.number}>{this.state.number}</label>

        );
    }else {
      return(
      <div>
          Home Component
      </div>
    );
    }
  }
}
const mapStateToProps = (state) => ({
    auth: state.auth
})
export  default connect(mapStateToProps, { Ticket_User })(Ticket)
