
// Custom Hook - to check validations of input values using regex
const useRegex = () => {
    return(
        {
            nameFormat: /^[a-zA-Z\s]+$/,
        mailFormat : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    numberFormat : /^[6-9]\d{9}$/,
    passwordFormat : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        }
    )
}

export default useRegex
