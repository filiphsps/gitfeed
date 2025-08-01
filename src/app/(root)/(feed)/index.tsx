import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { View } from 'react-native';

export default function ExploreView() {
    return (
        <ThemedView className="flex min-h-screen flex-1 gap-6 p-4 py-10">
            <View className="flex-1">
                <ThemedText type="title">Feed</ThemedText>
            </View>
        </ThemedView>
    );
}
