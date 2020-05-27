
export const TASK_STATUS = {
  New: 0,
  Queued: 1,
  Started: 2,
  Overdue: 3,
  Completed: 4,
};

export interface Task {
  id: string;
  referenceNumber: number;
  title: string;
  priority: number;
  notes: string;
  requestorSystemRoleId: string;
  participantsIds: string[];
  status: number;
  createdTimeOffset: string;
  modifiedTimeOffset: string;
  order: number;
  typeName: string;
  typeShortName: string;
}

export interface TaskCreate {
  title: string;
  priority: 0;
  notes: string;
  participantsIds: string[];
  typeName: string;
  typeShortName: string;
}

export interface TaskStateColumn {
  id: number;
  name: string;
  color: string;
  tasks: Task[];
}

export interface TaskState {
  data: {
    tasks: Task[];
    columns: TaskStateColumn[];
  };
}

export const taskInitialState: TaskState = {
  data: {
    columns: [
      {
        id: TASK_STATUS.New,
        name: 'New',
        color: '#0F5CB0',
        tasks: [],
      },
      {
        id: TASK_STATUS.Queued,
        name: 'Queued',
        color: '#4BA4EC',
        tasks: [],
      },
      {
        id: TASK_STATUS.Started,
        name: 'Started',
        color: '#39af4d',
        tasks: [],
      },
      {
        id: TASK_STATUS.Overdue,
        name: 'Overdue',
        color: '#CF021A',
        tasks: [],
      },
      {
        id: TASK_STATUS.Completed,
        name: 'Completed',
        color: '#9B9B9B',
        tasks: [],
      },
    ],
    tasks: [],
  },
};
