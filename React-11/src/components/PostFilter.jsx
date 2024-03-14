import React from "react"
import MySelect from '../components/UI/Select/MySelect';
import MyInput from '../components/UI/Input/MyInput'

const PostFilter = ({filter,setFilter}) => {//пропсами приймаєм фільтр 
    return (
        <div>
          <MyInput //створюю вікно записуу
               value={filter.query}
               onChange={e => setFilter({...filter, query: e.target.value})}
               placeholder='Пошук'
          />
          <MySelect 
            value={filter.sort}
            onChange={selectedSort =>setFilter({...filter, sort: selectedSort})} 
            defaultValue="Сортування"
            options={[
              {value:"title", name:"По назві"},
              {value:"body", name:"По опису"},
            ]}
          />
         </div>
    )
}

export default PostFilter