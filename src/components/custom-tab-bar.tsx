import { useTheme } from '@/hooks/use-theme';
import { cn } from '@/utils/cn';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface CustomTabBarProps extends BottomTabBarProps {
    showLabels?: boolean;
}

export function CustomTabBar({ state, descriptors, navigation, showLabels = false }: CustomTabBarProps) {
    const { theme } = useTheme();

    const iconSize = showLabels ? 22 : 24;

    return (
        <SafeAreaView edges={['bottom']}>
            <View className="flex h-16 flex-row border-t border-border-base pt-6">
                {/* Regular Tab Buttons */}
                {state.routes.map((route, index) => {
                    const descriptor = descriptors[route.key];
                    if (!descriptor) return null;
                    const { options } = descriptor;
                    const label =
                        typeof options.tabBarLabel === 'string'
                            ? options.tabBarLabel
                            : typeof options.title === 'string'
                              ? options.title
                              : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const text = (
                        <Text
                            className="h-4 text-xs leading-snug"
                            style={{ color: isFocused ? theme.colors.primary : theme.colors.icon }}
                        >
                            {label}
                        </Text>
                    );

                    return (
                        <Pressable
                            key={route.key}
                            onPress={onPress}
                            className="flex-1 items-center justify-center transition-all duration-150"
                            style={({ pressed }) => [
                                {
                                    opacity: pressed ? 0.7 : 1
                                }
                            ]}
                        >
                            <View className="h-full items-center justify-center gap-2">
                                {options.tabBarIcon?.({
                                    focused: isFocused,
                                    color: isFocused ? theme.colors.primary : theme.colors.icon,
                                    size: iconSize
                                })}

                                {showLabels ? (
                                    <Text className={cn('text-icon-base', isFocused && 'text-primary-base')}>
                                        {text}
                                    </Text>
                                ) : null}
                            </View>
                        </Pressable>
                    );
                })}
            </View>
        </SafeAreaView>
    );
}
