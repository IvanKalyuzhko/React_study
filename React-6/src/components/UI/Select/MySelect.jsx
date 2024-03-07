import React from "react"
//Ми будем передавати масив і на основі цього масиву в список будуть додаватись пункти , додаєм ще 
const MySelect = ({options,defaultValue,value,onChange}) => {//цей компонент буде приймати декілька пропсів (так як ми вписали {option})
    //options - Ми будем передавати масив і на основі цього масиву в список будуть додаватись пункти 
    //defaultValue - сортування по
    return (
        <select 
         value={value} //пропсами приймаєм value
         onChange={event => onChange(event.target.value)}//в цю функцію передаєм не сам event ,а те значення яке вибрав користувач
        > 
            <option disabled/*вказує на початкове неактивне значення значка сортування*/ value="">{defaultValue}</option>
            {options.map(option => //для кожної опції відресовуєм штмл тег option
                <option key={option.value} value={option.value}> 
                    {option.name} {/*обєкт буде із 2 полями */}
                </option>
                )}
        </select>
    )
}

export default MySelect