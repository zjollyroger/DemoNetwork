import React from 'react';

const Friends = (props) => {
    let friendsArray = props.friendsData.map(el =>
           <div> {el.name} </div>
    )
    return (
        <div>
            {friendsArray}
        </div>
    );
}

export default Friends;