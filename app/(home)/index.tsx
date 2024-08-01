import { MaterialIcons } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useTheme } from '@react-navigation/native';
import { useCallback, useRef, useState } from 'react';
import { View, ScrollView, Image, Pressable, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CustomBackdrop, FilterView, ProductCard, products } from '@/components/home';
import { Button, Input, Text } from '@/components/ui';

const CATEGORIES = ['Clothing', 'Shoes', 'Accessories', 'Accessories 2', 'Accessories 3', 'Accessories 4'];

export default function HomeScreen() {
    const { colors } = useTheme();
    const [categoryIndex, setCategoryIndex] = useState(0);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const openFilterModal = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ padding: 20, gap: 16 }}>
                {/* Header Section */}
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3' }}
                        style={{ width: 44, height: 44, borderRadius: 22, aspectRatio: 1 }}
                        resizeMode="cover"
                    />
                    <View style={{ flex: 1 }}>
                        <Text variant="heading">Hi, James 👋</Text>
                        <Text numberOfLines={1} variant="body">
                            Discover fashion that suit your style
                        </Text>
                    </View>
                    <Button variant="outlined" iconButton>
                        <MaterialIcons name="notifications" size={24} color={colors.text} />
                    </Button>
                </View>
                {/* Search Bar Section */}
                <View style={{ flexDirection: 'row', gap: 12 }}>
                    <Input placeholder="Search..." />
                    <Button variant="primary" onPress={openFilterModal} iconButton>
                        <MaterialIcons name="tune" size={24} color={colors.text} />
                    </Button>
                </View>
                {/* Grid Collection View */}
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 12 }}>
                        <Text variant="heading">New Collections</Text>
                        <Pressable>
                            <Text variant="action-link">See All</Text>
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: 'row', height: 256, gap: 8 }}>
                        <ProductCard
                            type="new"
                            price={130}
                            image="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                        />
                        <View style={{ flex: 1, gap: 8 }}>
                            <ProductCard
                                type="new"
                                price={120}
                                image="https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                            />
                            <ProductCard
                                type="new"
                                price={170}
                                image="https://images.unsplash.com/photo-1485218126466-34e6392ec754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
                            />
                        </View>
                    </View>
                </View>
                {/* Categories Section */}
                <FlatList
                    horizontal
                    data={CATEGORIES}
                    style={{ maxHeight: 48 }}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap: 6, alignItems: 'center' }}
                    renderItem={({ item, index }) => (
                        <Button
                            variant={index === categoryIndex ? 'primary' : 'default'}
                            size="small"
                            onPress={() => setCategoryIndex(index)}>
                            {item}
                        </Button>
                    )}
                />
                {/* Products Section */}
                <View style={{ gap: 8 }}>
                    {products.map((product, idx) => (
                        <ProductCard key={idx} {...product} style={{ aspectRatio: 1 }} />
                    ))}
                </View>
            </ScrollView>

            <BottomSheetModal
                index={0}
                snapPoints={['80%']}
                ref={bottomSheetModalRef}
                backdropComponent={(props) => <CustomBackdrop {...props} />}
                backgroundStyle={{ borderRadius: 24, backgroundColor: colors.background }}
                handleIndicatorStyle={{ backgroundColor: colors.primary }}>
                <FilterView />
            </BottomSheetModal>
        </SafeAreaView>
    );
}
