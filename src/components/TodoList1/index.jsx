import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    datas: PropTypes.array,
    onClickData: PropTypes.func,
};

TodoList.defaultProps = {
    datas: [],
    onClickData: null,
};

function TodoList(props) {
    const {datas, onClickData} = props;

    function handleClick (item){
        if(onClickData){
            onClickData(item);
        }
    }

    return (
        <ul>
            {datas.map(item => (
                <li key={item.id} onClick={() => handleClick(item)}>{item.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;