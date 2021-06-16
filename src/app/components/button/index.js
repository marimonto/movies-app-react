import { Button } from "@chakra-ui/react";

const ButtonComponent = ({ text, handleClick }) => {
    return (
        <Button onClick={handleClick}>
            {text}
        </Button>
    );
}

export default ButtonComponent;