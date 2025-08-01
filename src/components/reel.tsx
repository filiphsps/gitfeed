import { Text } from '@/components/text';
import { FlashList } from '@shopify/flash-list';
import { useCallback, useRef } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Reel() {
    const { height } = useWindowDimensions();

    const refFlatList = useRef(null);

    const keyExtractor = useCallback((item: any) => `${item.id}`, []);

    const renderItem = useCallback(
        ({ item: _item, index }: { item: any; index: number }) => {
            return (
                <View key={index} style={{ height }} className="h-screen w-screen flex-1">
                    <ScrollView horizontal={true} className="h-screen w-full min-w-full">
                        <View className="relative flex h-screen w-screen min-w-full flex-1 justify-between">
                            <View className="h-72 w-full border-b-2 border-border-base">
                                <SafeAreaView edges={['top']} className="flex h-full w-full justify-start">
                                    <View className="flex h-full items-start justify-end gap-2 p-4">
                                        <Text type="title" className="line-clamp-2 overflow-ellipsis">
                                            react-native-scroll-to-child-again
                                        </Text>
                                        <Text type="subtitle" className="text-icon-base">
                                            React Native package to programmatically scroll a child of a ScrollView into
                                            view.
                                        </Text>
                                    </View>
                                </SafeAreaView>
                            </View>

                            <View className="max-h-2/6 h-32 w-full border-t-2 border-border-base">
                                <SafeAreaView
                                    edges={['bottom']}
                                    className="flex h-full w-full justify-end bg-card-base"
                                >
                                    <View className="h-full w-full"></View>
                                </SafeAreaView>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            );
        },
        [height]
    );

    return (
        <View className="flex-1">
            <FlashList
                nestedScrollEnabled={true}
                horizontal={false}
                data={Array.from({ length: 4096 }).map((_, index) => ({ id: `${index}` }))}
                pagingEnabled={true}
                showsVerticalScrollIndicator={false}
                ref={refFlatList}
                automaticallyAdjustContentInsets={true}
                renderItem={renderItem}
                decelerationRate="fast"
                keyExtractor={keyExtractor}
                onEndReachedThreshold={0.2}
                removeClippedSubviews={true}
                bounces={false}
            />
        </View>
    );
}
