/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'
import { findInputError, isFormInvalid } from "./utils"

export const Select = ({
    name,
    id,
    options,
    label,
    value,
    onChange,
    validation,
}) => {
    const select_style = 'am-Input';
    const label_style = 'am-label';
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const inputErrors = findInputError(errors, name)
    const isInvalid = isFormInvalid(inputErrors)

    return (
        <>
            <label htmlFor={id} className={label_style}>
                {label}
            </label>
            <AnimatePresence mode="wait" initial={false}>
                {isInvalid && (
                    <InputError
                        message={inputErrors.error.message}
                        key={inputErrors.error.message}
                    />
                )}
            </AnimatePresence>
            <select className={select_style} name={name} id={id} onChange={onChange} {...register(name, validation)} >
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>

        </>
    );
}
const InputError = ({ message }) => {
    return (
        <motion.p
            className="text-danger am-label"
            {...framer_error}
        >
            <MdError />
            {message}
        </motion.p>
    )
}

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
}