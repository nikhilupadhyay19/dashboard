const methods = () => {

    const getAverageByKey = (objArray, objKey) => {
        return objArray.reduce((accumulator, elem) => {
            return accumulator + (+ elem[objKey]);
        }, 0)
    } 

    const getAgeAboveByKey = (objArray, objKey, ageAboveBy, sepratedBy, atWhichIndex) => {
        let currentYear = new Date().getFullYear();
        return objArray.reduce((accumulator, elem) => {
            if (currentYear - elem[objKey].split(sepratedBy)[atWhichIndex] > ageAboveBy) {
                accumulator.push(elem);
            }
            return accumulator;
        }, []);
    }

    const getFullNameByKey = (objArray, objKey1, objKey2) => {
        return objArray.reduce((accumulator, elem) => {
            accumulator.push(`${elem[objKey1]} ${elem[objKey2]}`);
            return accumulator;
        }, [])
    }

    const getGroupingObjectsbyKey = (objArray, objKey) => {
        return objArray.reduce((accumulator, elem) => {
            if (!accumulator[elem[objKey]]) {
                accumulator[elem[objKey]] = []
            }
            accumulator[elem[objKey]].push(elem);
            return accumulator;
        }, {})
    }

    const getCountedInstancesbyKey = (objArray, objKey) => {
        return objArray.reduce((accumulator, elem) => {
            if (!accumulator[elem[objKey]]) {
                accumulator[elem[objKey]] = 1
            } else {
                accumulator[elem[objKey]]++;
            }
            return accumulator;
        }, {})
    }

    const services = Object.freeze({getAverageByKey, getAgeAboveByKey, getFullNameByKey, getGroupingObjectsbyKey, getCountedInstancesbyKey});
    return services;
}

const methodsFactory = methods();
export default methodsFactory;