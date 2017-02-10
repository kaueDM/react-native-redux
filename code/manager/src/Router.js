import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router sceneStyle={styles.routerStyle}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Manager - Login" initial />
            </Scene>

            <Scene key="main">
                <Scene 
                initial
                key="employeeList" 
                component={EmployeeList} 
                title="Funcionários"
                rightTitle="Novo"
                onRight={() => Actions.employeeCreate()}
                />
                <Scene key="employeeCreate" component={EmployeeCreate} title="Novo Funcionário" />
            </Scene>
        </Router>
    );
};

const styles = {
    routerStyle: {
        paddingTop: 65,
        backgroundColor: '#2b2b2b'
    }
};

export default RouterComponent;
