import { FormControl, FormLabel, Input } from "@chakra-ui/react";
const InputComponent = ({ type, name, value, handleChange, title }) => {
    return (
        <FormControl>
            <FormLabel>{title}</FormLabel>
            <Input type={type} name={name} value={value} onChange={handleChange} />
        </FormControl>
    )
}

export default InputComponent;