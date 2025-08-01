import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { cn } from '@/utils/cn';
import { Dimensions, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ExploreView() {
    return (
        <ScrollView className="flex-1" contentInsetAdjustmentBehavior="automatic">
            <ThemedView className="flex min-h-screen flex-1 gap-6 p-4 py-10">
                <View className="flex-1">
                    <ThemedText type="title">Explore</ThemedText>
                    <ThemedText type="subtitle">the World of Open Source</ThemedText>
                </View>

                <View className="flex flex-row flex-wrap gap-4">
                    {Array.from({ length: 45 }).map((_, index) => (
                        <View
                            key={index}
                            style={{ width: (Dimensions.get('window').width - 56) / 3 }}
                            className={cn(
                                'h-32',
                                index % 5 === 0 && 'bg-rose-600',
                                index % 5 === 1 && 'bg-purple-600',
                                index % 5 === 2 && 'bg-cyan-500',
                                index % 5 === 3 && 'bg-orange-400',
                                index % 5 === 4 && 'bg-green-500'
                            )}
                        />
                    ))}
                </View>
            </ThemedView>
        </ScrollView>
    );
}
