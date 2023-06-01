import { parseISO, formatDistanceToNow } from 'date-fns'
import { StyleSheet, Text, View } from 'react-native'

const TimeAgo = ({ timestamp }) => {
    let timeAgo = ''
    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }
  return (
    <View>
      <Text title={timestamp}>
        &nbsp; {timeAgo}
      </Text>
    </View>
  )
}

export default TimeAgo

const styles = StyleSheet.create({})