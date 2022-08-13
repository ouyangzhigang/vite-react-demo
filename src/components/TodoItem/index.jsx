import React, { useState } from 'react';
import { Input, Button, message } from 'antd';
import { debounce } from 'lodash';
import { TODO_ITEM_STATUS } from '../../constant/STATUS';
import './style.css';

const todoItemData = () => {
  return {
    id: ~~(Math.random() * 1000),
    content: '',
    status: TODO_ITEM_STATUS.IS_CREATE
  }
}

const TodoItem = ({ onSubmit }) => {
  const [itemContent, setItemContent] = useState(todoItemData());

  const changeValue = (e) => {
    setItemContent({
      ...itemContent,
      content: e.target.value
    });
  };

  const handler = (e) => {
    if (!/\S+/.test(itemContent.content)) {
      return message.warning(`              请输入todo事项!            `);
    }

    onSubmit && onSubmit(itemContent);
    setItemContent(todoItemData);
  }

  return (
    <div className='todo-item'>
      <Input placeholder="请输入代办事项" size="large" value={itemContent.content} onPressEnter={handler} onChange={changeValue} />
      <Button className="todo-item-button" size="large" type='primary' onClick={handler}>提交</Button>
    </div>
  );
};

export default TodoItem;