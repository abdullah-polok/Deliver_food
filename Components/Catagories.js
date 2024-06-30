import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CatagoryCard from './CatagoryCard'

const Catagories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
    contentContainerStyle={{paddingBottom:15,paddingTop:10}}
    >
      {/* Catagory Cards */}
      <CatagoryCard></CatagoryCard>
    </ScrollView>
  )
}

export default Catagories