import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    RefreshControl,
    RefreshControlComponent,
} from "react-native";
import React, { useCallback, useState } from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";

import {
    Company,
    JobAbout,
    JobFooter,
    JobTabs,
    ScreenHeaderBtn,
    Specifiecs,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter();
    
    const { data, isLoading, error, refetch } = useFetch("job-details", {
        job_id: params.id,
    });
    
    const [ refreshing, setRefreshing ] = useState(false)
    const onRefresh = () => {} 

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowsVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()}
                            
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension="60%"
                        />
                    ),
                    headerTitle: "",

                }}
            ></Stack.Screen>
            <>
                <ScrollView showsVerticalScrollIndicator={false} RefreshControl={
                    <RefreshControlComponent refreshing={refreshing} onRefresh={onRefresh}>

                    </RefreshControlComponent>
                }>
                { isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary}></ActivityIndicator>
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : data.length === 0 ? (
                    <Text>No Data</Text>
                ) : (
                    <View style={{ padding:SIZES.medium, paddingBottom: 100 }}>
                        <Company 
                        companyLogo={data[0].employer_logo}
                        jobTitle={data[0].job_title}
                        companyNames={data[0].employer_name}
                        location={data[0].job_country}
                        >

                        </Company>

                        <JobTabs></JobTabs>
                    </View>
                )}
                </ScrollView>
            </>
        </SafeAreaView>
    );
};

export default JobDetails;
