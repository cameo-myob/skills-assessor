import React from 'react';
import { Button } from '@myob/myob-widgets';
import { Link } from 'react-router-dom';


const RoleButtons = () => {
    return(<div className="roleButtonRow">
            <Link to="/protege"><Button type="secondary">Protege Developer</Button></Link>
            <Button type="secondary" onClick={() => {console.log('general')}}>General Developer</Button>
            <Button type="secondary" onClick={() => {console.log('ba')}}>Business Analyst</Button>
        </div>)
}

export default RoleButtons;