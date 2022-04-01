
import React, { Component } from 'react'
import UserService from '../services/UserService';
class UpdateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            password: '',
            email: ''
        }
        this.changeNameHandler= this.changeNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( (res) =>{

            let user = res.data;
            this.setState({name: user.Name,
                password: user.Password,
                emailId : user.EmailId
            });
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let user = {Name: this.state.name, Password: this.state.Password, EmailId: this.state.uemailId};
        console.log('user => ' + JSON.stringify(user));
        console.log('id => ' + JSON.stringify(this.state.id));
        UserService.updateUser(user, this.state.id).then( res => {
            this.props.history.push('/users');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({Name: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({Password: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({EmailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/user');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update User</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.Name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.Password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateUser}>Save</button>                                                                     
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        )
    }
}

export default UpdateComponent;