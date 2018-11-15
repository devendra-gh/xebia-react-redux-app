import React from 'react';

const NoResultFound = ({cssClassName, message = ''}) => {
    return (
        <div className={`no-result-found-section ${cssClassName}`}>
            <div className='no-result-text'>{ message }</div>
        </div>
    );
};

export default NoResultFound;
