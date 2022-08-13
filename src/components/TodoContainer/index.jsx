import React from 'react';
import { List } from 'antd';
import { CheckCircleTwoTone, CloseCircleTwoTone, IssuesCloseOutlined, WarningOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { TODO_ITEM_STATUS } from '../../constant/STATUS';
import './style.css';


const TodoContainer = ({ data = [], changeData }) => {
  const handler = (type, item) => {
    changeData({
      ...item,
      status: type,
    })
  }

  return (
    <ul className="todo-list">
      <List
        className="list-content"
        dataSource={data}
        renderItem={
          (item) => (
            <List.Item className="list-item">
              {item.status === TODO_ITEM_STATUS.IS_DONE && <IssuesCloseOutlined />}
              {item.status === TODO_ITEM_STATUS.IS_DELETE && <WarningOutlined />}
              {item.status === TODO_ITEM_STATUS.IS_CREATE && <ClockCircleOutlined />}

              {item.content}
              {
                item.status === TODO_ITEM_STATUS.IS_CREATE && (
                  <aside className="todo-operator">
                    <CheckCircleTwoTone onClick={() => handler(TODO_ITEM_STATUS.IS_DONE, item)} />
                    <CloseCircleTwoTone onClick={() => handler(TODO_ITEM_STATUS.IS_DELETE, item)} />
                  </aside>
                )
              }
            </List.Item>
          )
        }
      />
    </ul>
  );
};

export default TodoContainer;