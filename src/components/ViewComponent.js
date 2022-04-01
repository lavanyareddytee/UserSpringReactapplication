import React from 'react';
    import UserService from '../services/UserService';
    class ViewComponent extends React.Component{
        constructor(props)
        {
            super(props)
            this.state={
                id:this.props.match.params.id,user:{}
            }
        }
    
        componentDidMount()
        {
            UserService.getUserById(this.state.id).then(res=>{
                this.setState({user:res.data})
            })

        }
        render()
        {
            return(
                
                    <div className='card col-md-6 offset-md-3'>
                        <h2 className='text-center'> View User Data</h2>
                        <div className='card-body'>
                            <div className='row'>
                                <label>User Name</label>
                                <div>{this.state.user.Name}</div>
                                 </div>
                                 <div className='row'>
                                     <lable>User Password</lable>
                                     <div>{this.state.user.Password}</div>
                                 </div>
                                 <div className='row'>
                                     <lable>User Email Id</lable>
                                     <div>{this.state.user.emailId}</div>
                                 </div>
                        </div>
                    </div>
            )    
    }
} 
export default ViewComponent;