import axios from 'axios'

const handleSignup = async (formData, setErrorMessage, handleContinue) => {
    const {name, email, password , confirmPassword } = formData;

    if(password !== confirmPassword){
        setErrorMessage('Password do not match');
        return;
    }

    try{
        const response = await axios.post('https://kreaze.com/pharmatop/api/user/register',{
            name,
            email,
            password,
            confirm_password: confirmPassword
        });
        console.log('User registered: ', response.data);
        handleContinue();
    }
    catch(error){
        console.error('Error registering user:', error);
        setErrorMessage('Failed to register. Please try Again')
    }
}

export default handleSignup;