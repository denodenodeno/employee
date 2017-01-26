import React, {PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const EmployeeDetails = ({employee}) => (
    <View style={styles.employee}>
        <Image style={styles.cover}
               source={{uri: employee.picture.large}}/>
        <View style={styles.info}>
            <Text style={styles.name}>
                {`${employee.name.first.toUpperCase()} ${employee.name.last.toUpperCase()}`}
            </Text>
            <Text>
                <Text style={styles.fontBold}>Phone: </Text>
                {employee.cell}
            </Text>
            <Text>
                <Text style={styles.fontBold}>Email: </Text>
                {employee.email}
            </Text>
            <Text>
                <Text style={styles.fontBold}>Location: </Text>
                {employee.location.city},
                {employee.location.street}
            </Text>
            <Text>
                <Text style={styles.fontBold}>DOB: </Text>
                {employee.dob}
            </Text>
        </View>
    </View>
);

EmployeeDetails.propTypes = {
    ...View.propTypes,
    employee: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    employee: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 40,
        padding: 5,
        backgroundColor: '#FFFFFF'
    },
    cover: {
        flex: 1,
        height: 150,
        marginTop: 40,
        resizeMode: 'contain'
    },
    info: {
        flex: 3,
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 20
    },
    name: {
        alignSelf: 'center',
        marginBottom: 12,
        fontSize: 16,
        fontWeight: '700',
        color: '#222222'
    },
    fontBold: {
        fontWeight: '700'
    }
});

export default EmployeeDetails;