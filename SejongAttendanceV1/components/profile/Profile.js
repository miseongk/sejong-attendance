import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Freshman from '../../assets/images/freshman.svg';
import Sophomore from '../../assets/images/sophomore.svg';
import Junior from '../../assets/images/junior.svg';
import Senior from '../../assets/images/senior.svg';
import {height, width, scale} from '../../config/globalStyles';

const Profile = () => {
  return (
    <View style={styles.component}>
      <View style={styles.row}>
        <View style={styles.profileImg}>
          <Senior width={40} height={40} />
        </View>
        <View>
          <Text style={styles.studentID}>18011480</Text>
          <Text style={styles.semester}>2022학년도 2학기</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    marginHorizontal: width * 16,
    height: height * 77,
    borderRadius: 14,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    marginVertical: height * 8.5,
  },
  profileImg: {
    backgroundColor: '#d9d9d9',
    width: width * 60,
    height: height * 60,
    borderRadius: 30,
    marginLeft: width * 16,
    marginRight: width * 13,
    padding: scale * 10,
  },
  studentID: {
    fontSize: scale * 22,
    marginTop: height * 8,
  },
  semester: {
    fontSize: scale * 13,
    marginTop: height * 2,
  },
});

export default Profile;
