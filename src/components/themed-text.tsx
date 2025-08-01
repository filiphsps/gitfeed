import { cn } from '@/utils/cn';
import { Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({ className, type = 'default', ...rest }: ThemedTextProps) {
    return (
        <Text
            className={cn(
                'text-base text-text-base',
                type === 'defaultSemiBold' && 'font-semibold',

                type === 'title' && 'text-4xl font-bold leading-[1.1]',
                type === 'subtitle' && 'text-xl font-medium',
                type === 'link' && 'text-cyan-600 underline underline-offset-2',
                className
            )}
            {...rest}
        />
    );
}
