import { useState } from 'react';
import { View, SafeArea, FlatList, Text, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS, NFTData } from '../constants/index';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components/index';

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Platform.OS === 'ios' ? COLORS.primary : null,
        // height: Platform.OS === 'ios' ? 44 : 56,
      }}
    >
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
