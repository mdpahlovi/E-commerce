import { ActionButton, Counter, Text } from 'components/ui';
import { useCartState } from 'hooks/useCartState';
import { useColors } from 'hooks/useColors';
import { FlatList, Image, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

export default function CardScreen() {
    const { items, removeFromCart, updateQuantity } = useCartState();
    const { card: backgroundColor, border: borderColor } = useColors();

    return (
        <FlatList
            data={items}
            style={{ padding: 16 }}
            ListEmptyComponent={<Text variant="body"> OPPS! No Products Available in Cart...!</Text>}
            contentContainerStyle={{ gap: 16 }}
            renderItem={({ item: { id, title, thumbnail, price, quantity } }) => (
                <Swipeable key={id} renderRightActions={() => <RightAction />} onSwipeableOpen={() => removeFromCart(id)}>
                    <View style={{ flex: 1, backgroundColor, flexDirection: 'row', borderWidth: 1, borderColor, borderRadius: 20, gap: 6 }}>
                        <Image src={thumbnail} style={{ width: 96, height: 96 }} />
                        <View style={{ flex: 1, justifyContent: 'center', paddingVertical: 6 }}>
                            <Text variant="title-lg">{title}</Text>
                            <Text variant="heading">
                                {(price * quantity).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                            </Text>
                        </View>
                        <Counter
                            value={quantity}
                            onChange={(value) => updateQuantity(id, value)}
                            style={{ flexDirection: 'column-reverse', paddingLeft: 0, backgroundColor: 'transparent' }}
                        />
                    </View>
                </Swipeable>
            )}
            ListFooterComponent={items?.length ? <ActionButton>Proceed To Pay</ActionButton> : null}
        />
    );
}

function RightAction() {
    const { notification: backgroundColor } = useColors();
    return (
        <View style={{ marginLeft: 16, justifyContent: 'center', backgroundColor, borderRadius: 20, paddingHorizontal: 24 }}>
            <Text style={{ fontFamily: 'Roboto-Medium', color: '#FFFFFF' }}>Delete</Text>
        </View>
    );
}
