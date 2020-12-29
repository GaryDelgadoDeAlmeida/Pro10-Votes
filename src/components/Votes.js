import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Text, View, TouchableOpacity } from 'react-native';
import { add_choices, reboot_choices } from "../actions/actions-types";
import Favorite from './Favorite';

export default function Votes() {
    const {count, candidates, choices, message} = useSelector(state => state);
    const dispatch = useDispatch();

    function handlePress(choice) {
        dispatch(add_choices(choice));
    }

    function handleReboot() {
        dispatch(reboot_choices());
    }

    if(count < candidates.length) {
        const {choice_1, choice_2} = candidates[count];

        return (
            <View>
                {count < candidates.length && (
                    <>
                        <TouchableOpacity onPress={() => handlePress(choice_1)}>
                            <Text>{choice_1}</Text>
                        </TouchableOpacity>
    
                        <TouchableOpacity onPress={() => handlePress(choice_2)}>
                            <Text>{choice_2}</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        );
    } else {
        return (
            <>
                <TouchableOpacity onPress={() => handleReboot()}>
                    <Text>Réinitialiser</Text>
                </TouchableOpacity>

                <Favorite choices={choices}/>
            </>
        )
    }
}