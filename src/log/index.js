import electronLog from 'electron-log';
import store from '../store';

const { userInfo } = store.state;
const userScope = `${userInfo.name}【${userInfo.username}】`;

const sysLog = electronLog.scope('sys'); // 系统日志
const userLog = electronLog.scope(userScope); // 用户日志

export {
  userLog,
  sysLog,
};
