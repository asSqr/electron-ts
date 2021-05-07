/* eslint-disable @typescript-eslint/no-explicit-any */
import reducer from '../../src/reducers/TaskReducer';
import { ITaskList } from '../../src/states/ITask';

describe('TaskReducer', () => {
  // 非同期開始時
  test('showTaskListAction: STARTED', () => {
    const beforState: ITaskList = {
      failedMessage: 'befor',
      loading: false,
      tasks: [],
    };
    const afterState = reducer(beforState, {
      type: 'task-actions/show-task-list_STARTED',
    } as any);
    expect(afterState).toEqual({
      failedMessage: '',
      loading: true,
      tasks: [],
    });
  });
});
