import React from 'react';
import './practicepage.styles.scss';

import {people} from '../../assets/people';
import methodsFactory from '../../factory/methods';

class PracticePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: people
        }
    }

    render() {
        const {people} = this.state;

        console.log(people);

        // 1) What is the average income of all the people in the array?
        const averageIncome = methodsFactory.getAverageByKey(people, 'salary');
        console.log('Average Income of People is: ' + averageIncome);

        // 2) Who are the people that are currently older than 30?
        const aboveAge30 = methodsFactory.getAgeAboveByKey(people, 'DOB', 30, "/", 2);
        console.log(aboveAge30);

        //  3) Get a list of the people's full name (firstName and lastName).
        const getFullName = methodsFactory.getFullNameByKey(people, 'firstName', 'lastName');
        console.log(getFullName);

        // 5) How many people are there in each department?
        const groupedByDepartment = methodsFactory.getGroupingObjectsbyKey(people, 'department');
        console.log(groupedByDepartment);

        const getCountedByDepartment = methodsFactory.getCountedInstancesbyKey(people, 'department');
        console.log(getCountedByDepartment);

        return (
            <p>Welcome to the Array Methods Practice Page</p>
        )

    }
}

export default PracticePage;