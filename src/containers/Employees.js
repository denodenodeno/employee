import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    NavigatorIOS
} from 'react-native';
import {bind} from '../utils/utils';
import EmployeesApi from '../api/mockEmployeesApi';
import EmployeesList from '../components/EmployeesList';

class Employees extends Component {
    
    constructor(props, context) {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        super(props, context);
        this.state = {
            dataSource: ds.cloneWithRows([]),
            isLoading: true
        };
        bind(this)('_renderLoadingView')
    }
    
    _renderLoadingView() {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }
    
    componentDidMount() {
        EmployeesApi.getAllEmployees()
            .then(function (data) {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(data),
                    isLoading: false
                })
            }.bind(this));
    }
    
    render() {
        if (this.state.isLoading) {
            return this._renderLoadingView();
        }
        
        return (
            <View style={styles.container}>
                <EmployeesList
                    dataSource={this.state.dataSource}
                    navigator={this.props.navigator}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    }
});


export default Employees;