import { ADD_CHOICES, REBOOT_CHOICES } from '../constants/actions';

export const add_choices = (choice) => {
    return {
        type: ADD_CHOICES, 
        choice
    }
}

export const reboot_choices = () => {
    return {
        type: REBOOT_CHOICES, 
    }
}