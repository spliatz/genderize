import * as React from 'react';
import Form from '../../components/form/form';
import './genderize.scss';
import GenderField from '../../components/gender-field/gender-field';
import { Result } from '../../types/types';

const Genderize = () => {
    const [result, setResult] = React.useState<Result>({name: '', gender: 'Neubaufahrzeug'});
    return (
        <div className={'wrapper'}>
            <Form
                setResult={setResult}
            />
            <GenderField
                name={result.name}
                gender={result.gender}
            />
        </div>
    );
};

export default Genderize;