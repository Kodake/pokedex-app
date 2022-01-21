import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import globalStyles from '../theme/appTheme';

const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={globalStyles.pokebolaBG}
            />
            <Text style={{
                ...globalStyles.title,
                ...globalStyles.globalMargin,
                top: top + 20
            }}>Pokedex</Text>
        </>
    )
};

export default HomeScreen;