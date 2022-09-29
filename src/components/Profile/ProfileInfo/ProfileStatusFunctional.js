import React, {useEffect, useState} from "react";
import Preloader from "../../common/Preloader/Preloader";

const ProfileStatusFunctional = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode( true);
    }

    const deactivateEditMode = () => {
        setEditMode( false);
        if (status !== props.status) {
            props.updateStatus(status);
        }
    }

    const onStatusChange = (e) => {
        // console.log(e.currentTarget.value);
        setStatus( e.currentTarget.value);
    }

    if (props.isFetching) return <Preloader/>
    return(
        <div>
            {!(editMode)
                ? <div onDoubleClick={activateEditMode}>{props.status || 'empty status'}</div>

                : <input type="text"  onChange={onStatusChange} onBlur={deactivateEditMode}
                         value={status} autoFocus={true}/>
            }
        </div>
    )
}

export default ProfileStatusFunctional;