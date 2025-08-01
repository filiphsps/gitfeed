import { Text } from '@/components/text';
import { ThemedView } from '@/components/themed-view';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeView() {
    return (
        <ScrollView>
            <SafeAreaView className="p-4">
                <ThemedView className="flex gap-6">
                    <Text type="title">Hello World</Text>
                </ThemedView>
            </SafeAreaView>
        </ScrollView>
    );
}
