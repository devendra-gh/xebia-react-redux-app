import React, { Fragment } from 'react';
import Button from '../Button';

const PopulationInfo = () => {
    return (
        <Fragment>
            <Button
                cssClassName='btn-round light-green-btn'
                title="Population <= 100000"
            />
            <Button
                cssClassName='btn-round green-btn'
                title="Population <= 1000000"
            />
            <Button
                cssClassName='btn-round dark-green-btn'
                title="Population <= 100000000"
            />
            <Button
                cssClassName='btn-round yellow-btn'
                title="Population <= 10000000000"
            />
            <Button
                cssClassName='btn-round red-btn'
                title="Population <= 1000000000000"
            />
            <Button
                cssClassName='btn-round black-btn'
                title="Population > 1000000000000 || Unknown"
            />
        </Fragment>
    );
};

export default PopulationInfo;