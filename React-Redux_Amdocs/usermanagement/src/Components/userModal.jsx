
/**
 * @description This is the Modal Box, where use can Update their record.
 * @author Ashutosh Sarangi
 */

import './userModal.css';

const UserModal = (props)=>{
    return (
        <div className={`modal ${props.modal ? 'modalShow': 'modalHide'}`}>
            <span className="closeBtn" onClick={props.closeModal}>X</span>
            <form className="formClass" onSubmit={(e)=>props.updateUserForm(e)}>
                Name:- <input className="inputForm" name= "name" value={props.selectedUser.name} onChange={(e)=> props.handleInput(e)}/>
                Email:- <input className="inputForm" name= "email"  value={props.selectedUser.email} onChange={(e)=> props.handleInput(e)} />
                City:- <input className="inputForm" name="city" value={props.selectedUser.address.city} onChange={(e)=> props.handleInput(e)} />
                Phone:- <input className="inputForm" name= "phone"  value={props.selectedUser.phone} onChange={(e)=> props.handleInput(e)} />
                Website:- <input className="inputForm"  name= "website" value={props.selectedUser.website} onChange={(e)=> props.handleInput(e)} />
                Company Name:- <input className="inputForm" name="company_name" value={props.selectedUser.company.name} onChange={(e)=> props.handleInput(e)} />
                <button className='btn'>Update</button>
            </form>
        </div>
    );
}

export default UserModal;