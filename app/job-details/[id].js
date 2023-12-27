import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    RefreshControl,
} from "react-native";
import React, { useCallback, useState } from "react";
import { Stack, useRouter, useSearchParams } from "expo-reouter"

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifiecs } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch('job-details', {
        job_id: params.id
    })

    return <Text>Job Details</Text>;
};

export default JobDetails;
