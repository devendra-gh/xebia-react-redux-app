import React from 'react';
import FormGroup from '../../src/app/components/general/FormGroup';

describe('FormGroup component:', () => {

    test('Should render button', () => {

        const wrapper = (props = {}) => shallow(
            <FormGroup
                className='form-group'
                {...props}
            />
        ).dive();

        expect(wrapper).toMatchSnapshot();
    });

});
