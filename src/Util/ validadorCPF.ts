import { ValidationOptions, registerDecorator, ValidationArguments } from 'class-validator';
import { isValid } from 'cpf';

export function IsCPF(validationOptions?: ValidationOptions) {
    return (object: object, propertyName: string) => {
        registerDecorator({
            name: 'isCpf',
            target: object.constructor,
            propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return typeof value === 'string' && isValid(value);
                },
            },
        });
    };
}
