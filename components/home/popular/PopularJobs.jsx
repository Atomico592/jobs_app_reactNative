import React from 'react';
import {ActivityIndicator, FlatList, Text, TouchableOpacity, View} from "react-native";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import {useRouter} from "expo-router";
import styles from "./popularjobs.style";
import {COLORS, SIZES} from "../../../constants";
import useFetch from "../../../hook/useFetch";
const PopularJobs = () => {
    const router = useRouter()
    const { data , isLoading, error} = useFetch('search', {query: 'React developer', num_pages: 1});
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large"  color={COLORS.primary}></ActivityIndicator>
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                            data={[1, 2, 3, 4]}
                            renderItem={({item}) => (
                                <PopularJobCard
                                    item={item}
                                />
                            )}
                            keyExtractor={item => item?.job_id}
                            contentContainerStyle={{ columnGap: SIZES.medium}}
                            horizontal
                    />
                ) }
            </View>
        </View>
    );
};

export default PopularJobs;