import { Stack } from 'expo-router';
import { cssInterop } from 'nativewind';
import { ScrollView } from 'react-native-gesture-handler';

cssInterop(ScrollView, {
    className: 'style'
});

export default function ExploreLayout() {
    return (
        <Stack
            initialRouteName="index"
            screenOptions={{
                headerShown: false,
                headerTransparent: false
            }}
        >
            <Stack.Screen name="index" options={{ title: 'Explore' }} />
        </Stack>
    );
}
