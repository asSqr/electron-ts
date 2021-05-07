export interface ITask {
  complete: boolean;
  deadline: Date;
  id: string;
  taskName: string;
}

export interface ITaskList {
  /** タスクの一覧 */
  tasks: ITask[];
  /** スキナーの表示 */
  loading: boolean;
  /** 失敗時のメッセージ */
  failedMessage: string;
}
