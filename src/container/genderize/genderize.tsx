import * as React from 'react';
import Form from '../../components/form/form';
import GenderField from '../../components/gender-field/gender-field';
import { Result } from '../../types/types';
import './genderize.scss';


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