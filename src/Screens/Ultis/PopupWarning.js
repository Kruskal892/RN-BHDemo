import {showMessage} from "react-native-flash-message";

const popUpError = (message) => {
    showMessage({
        type: 'danger',
        icon: 'danger',
        message
    })
}

const popupSuccess = (message) => {
    showMessage({
        type: 'success',
        icon: 'success',
        message
    })
}

export {
    popUpError, 
    popupSuccess,
}