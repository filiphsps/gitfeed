import type { ErrorBoundaryProps } from 'expo-router';
import { Tabs } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { CustomTabBar } from '@/components/custom-tab-bar';
import { HapticTab } from '@/components/haptic-tab';
import { useTheme } from '@/hooks/use-theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
    const title = `Error!${error.name.toLowerCase() !== 'error' ? ` ${error.name}` : ''}`;

    return (
        <View className="flex-1">
            <SafeAreaView className="flex flex-1 items-center justify-between p-3 pb-0">
                <View className="flex flex-1 justify-between gap-6 px-3">
                    <View className="flex-1 gap-3">
                        <Text className="text-3xl">{title}</Text>
                        <Text className="text-xl">{error.message}</Text>
                    </View>

                    <View>
                        <Pressable onPress={retry}>
                            <Text className="text-3xl">Retry</Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default function TabLayout() {
    const { theme } = useTheme();

    return (
        <Tabs
            initialRouteName="index"
            screenOptions={{
                animation: 'shift',
                headerShown: false,
                tabBarHideOnKeyboard: true,

                tabBarActiveTintColor: theme.colors.tint,
                tabBarPosition: 'bottom',
                tabBarButton: HapticTab
            }}
            tabBar={(props) => <CustomTabBar showLabels={true} {...props} />}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <View className="size-8 rounded-full border-2" style={{ borderColor: color }} />
                    )
                }}
            />
            <Tabs.Screen
                name="(explore)"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color }) => (
                        <View className="size-8 rounded-full border-2" style={{ borderColor: color }} />
                    )
                }}
            />
        </Tabs>
    );
}
