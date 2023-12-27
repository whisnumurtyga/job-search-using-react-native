import { React, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
    const router = useRouter();
    // const isLoading = false;
    // const error = false;

    const { data, isLoading, error } = useFetch("search", {
        query: "React Developer",
        num_pages: 1,
    });

    const [ selectedJob, setSelectedJob ] = useState()

    const handleCardPress = (item) => {
        router.push(`/job-details/${item.job_id}`)
        setSelectedJob(item.job_id)
    }

    // console.log(data);
    // console.log(isLoading);
    // console.log(error);

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
                    <ActivityIndicator
                        size="large"
                        colors={COLORS.primary}
                    ></ActivityIndicator>
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <PopularJobCard
                                item={item}
                                setSelectedJob={selectedJob}
                                handleCardPress={handleCardPress}
                            ></PopularJobCard>
                        )}
                        keyExtractor={(item) => item?.job_id}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        horizontal
                    ></FlatList>
                )}
            </View>
        </View>
    );
};

export default Popularjobs;
