import { Participant } from '@/store/conv/types';

export const TASK_STATUS = {
  New: 0,
  Acknowledged: 1,
  Resolved: 2,
  Cancelled: 3,
  Terminated: 4,
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
}

export interface TaskCreate {
  title: string;
  priority: 0;
  notes: string;
  participantsIds: string[];
}

export interface TaskStateColumn {
  id: number;
  name: string;
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
        id: 0,
        name: 'New',
        tasks: [],
      },
      {
        id: TASK_STATUS.Acknowledged,
        name: 'Acknowledged',
        tasks: [],
      },
      {
        id: TASK_STATUS.Resolved,
        name: 'Resolved',
        tasks: [],
      },
      {
        id: TASK_STATUS.Cancelled,
        name: 'Cancelled',
        tasks: [],
      },
      {
        id: TASK_STATUS.Terminated,
        name: 'Terminated',
        tasks: [],
      },
    ],
    tasks: [],
  },
};
