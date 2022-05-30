import * as React from 'react';
import { transliterate as translate } from 'transliteration';
import './form.scss';

interface Response {
    name: string;
    gender: string | null;
    probability: number;
    count: number;
}

interface Result {
    name: string,
    gender: string
}

interface IForm {
    setResult(argument: Result): any;
}

const Form: React.FC<IForm> = ({setResult}) => {
    const [value, setValue] = React.useState('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (value) {
            fetch(`https://api.genderize.io?name=${translate(value)}`)
                .then(res => res.json())
                .then((json:Response) => {
                    if (json.gender) {
                        setResult({name: value, gender: json.gender});
                    } else {
                        setResult({name: '', gender: ''})
                    }
                })
            setValue('');
        }

    };

    return (
        <form
            className={'form-container'}
            onSubmit={submitHandler}>

            <input
                className={'form-input'}
                placeholder={'write name'}
                value={value}
                onChange={changeHandler}
            />
        </form>
    );
};



export default Form;