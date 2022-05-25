import * as React from 'react';
import './gender-field.scss';

const GenderField: React.FC<{gender: string, name: string}> = ({name, gender}) => {
    if (name && gender) {
        return (
            <div className={"gender-field"}>{name} - {gender}</div>
        )
    }
    return (
        <div className={"gender-field"}/>
    )
}

export default GenderField;