import React from "react";
import {ProfileApi} from "../../../api/api";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        console.log(e.currentTarget.value);
        this.setState({status: e.currentTarget.value});
    }

    render() {
        return(
            <div>
                {!(this.state.editMode)
                    ? <div onDoubleClick={this.activateEditMode}>{this.props.status || 'empty status'}</div>

                    : <input type="text"  onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status} autoFocus={true}/>
                }
            </div>
        )
    }
}

export default ProfileStatus;