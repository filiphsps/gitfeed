import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeView() {
    return (
        <ScrollView>
            <SafeAreaView className="p-4">
                <ThemedView className="flex gap-6">
                    <ThemedText type="title">Hello World</ThemedText>
                </ThemedView>
            </SafeAreaView>
        </ScrollView>
    );
}
