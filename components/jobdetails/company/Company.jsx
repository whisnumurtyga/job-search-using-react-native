import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ( { companyLogo, jobTitle, companyName, location } ) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
      
      </View>
      <Text>Company</Text>
    </View>
  )
}

export default Company