import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./popularjobcard.style";

const PopularJobCard = ({selectedJob, item, handleCardPress}) => {

    return (
        <TouchableOpacity
            style={styles.container(selectedJob, item)}
            onPress={() => handleCardPress(item)}
        >
            <TouchableOpacity
                style={styles.logoContainer(selectedJob, item)}
            >
                <Image
                    source={{url: item?.employer_logo}}
                    resizeMode="contain"
                    style={styles.logoImage}
                />
            </TouchableOpacity>
            <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
                    {item.job_title}
                </Text>
                <Text style={styles.location}>{item.job_country}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default PopularJobCard;